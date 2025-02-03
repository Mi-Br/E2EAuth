import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		try {
			const formData = await event.request.formData();
			const data = Object.fromEntries(formData);
			const jsonData = JSON.stringify(data);
			
			const response = await fetch('http://localhost:3000/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: jsonData
			});
			if (!response.ok) {
				return { success: false, error: 'Error from server' };
			}
			const result = await response.json();
			console.log('result from server', result);
			return { success: true, result };
		} catch (error) {
			return { success: false, error: error.message };
		}
	}
} satisfies Actions;


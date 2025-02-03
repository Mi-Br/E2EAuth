import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

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
			if (response.status === 401 || response.status === 404) {
				return fail(401, { success: false, data, error: 'User not found' });
			}
			const result = await response.json();
			return { success: true, data, result };
		} catch (error) {
			return fail(500, { success: false, error: 'Internal server error' });
		}
	}
} satisfies Actions;

  
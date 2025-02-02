import type { Actions } from './$types';

export const actions = {
	default: async (event) => {
		try {
			const formData = await event.request.formData();
			const data = Object.fromEntries(formData);
			const jsonData = JSON.stringify(data);
			
			console.log('About to send request with data:', jsonData);
			console.log('Request URL:', 'http://localhost:3000/login');
			
			// Test server connectivity first
			try {
				const pingResponse = await fetch('http://localhost:3000/');
				console.log('Server ping response:', pingResponse.status);
			} catch (e) {
				console.error('Server ping failed:', e);
			}
	
			const response = await fetch('http://localhost:3000/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: jsonData
			});
			
			console.log('Response received');
			const result = await response.json();
			return { success: true, data: result };
		} catch (error) {
			console.error('Detailed error:', {
				name: error.name,
				message: error.message,
				cause: error.cause
			});
			return {
				success: false,
				message: 'Connection failed',
				error: error.message
			};
		}
	}
} satisfies Actions;

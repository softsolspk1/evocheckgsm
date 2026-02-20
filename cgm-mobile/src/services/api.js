import Constants from 'expo-constants';

// For local development with Expo, use the machine's IP address instead of localhost
// Or use your production URL
const BASE_URL = 'https://evocheckgsm.vercel.app/api';

export const apiService = {
    async login(email, password) {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || 'Login failed');
        }
        return response.json();
    },

    async getOrders(role, userId) {
        // In production, we'd filter by role and userId
        const response = await fetch(`${BASE_URL}/orders`);
        if (!response.ok) throw new Error('Failed to fetch orders');
        return response.json();
    },

    async getInventory() {
        const response = await fetch(`${BASE_URL}/inventory`);
        if (!response.ok) throw new Error('Failed to fetch inventory');
        return response.json();
    },

    async submitInstallation(formData) {
        // This would be a new endpoint or reused Patients/Orders endpoint
        console.log('Submitting installation:', formData);
        return { success: true };
    },

    async addInventory(distributorId, quantity) {
        const response = await fetch(`${BASE_URL}/inventory`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ distributorId, quantity }),
        });
        if (!response.ok) throw new Error('Failed to update inventory');
        return response.json();
    }
};

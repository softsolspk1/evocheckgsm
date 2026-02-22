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

    async getOrders(params = {}) {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${BASE_URL}/orders?${query}`);
        if (!response.ok) throw new Error('Failed to fetch orders');
        return response.json();
    },

    async getInventory(params = {}) {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${BASE_URL}/inventory?${query}`);
        if (!response.ok) throw new Error('Failed to fetch inventory');
        return response.json();
    },

    async submitInstallation(formData) {
        const response = await fetch(`${BASE_URL}/installations`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || 'Failed to submit installation');
        }
        return response.json();
    },

    async updateOrder(id, status) {
        const response = await fetch(`${BASE_URL}/orders`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, status }),
        });
        if (!response.ok) throw new Error('Failed to update order');
        return response.json();
    },

    async createOrder(orderData) {
        const response = await fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData),
        });
        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.error || 'Failed to place order');
        }
        return response.json();
    },

    async getCities() {
        const response = await fetch(`${BASE_URL}/cities`);
        if (!response.ok) throw new Error('Failed to fetch cities');
        return response.json();
    },

    async getDistributors() {
        const response = await fetch(`${BASE_URL}/distributors`);
        if (!response.ok) throw new Error('Failed to fetch distributors');
        return response.json();
    },

    async getNotifications(params) {
        const query = new URLSearchParams(params).toString();
        const response = await fetch(`${BASE_URL}/notifications?${query}`);
        if (!response.ok) throw new Error('Failed to fetch notifications');
        return response.json();
    },

    async markNotificationRead(id) {
        const response = await fetch(`${BASE_URL}/notifications`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id, isRead: true }),
        });
        if (!response.ok) throw new Error('Failed to update notification');
        return response.json();
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

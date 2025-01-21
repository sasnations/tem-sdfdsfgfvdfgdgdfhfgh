import { create } from 'zustand';
import axios from 'axios';
import { AuthState } from '../types/auth';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const useAuthStore = create<AuthState>()((set) => {
  // Initialize state from localStorage
  const token = localStorage.getItem('token');
  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  return {
    user,
    token,
    isAuthenticated: !!token,

    login: async (email: string, password: string) => {
      try {
        const response = await axios.post(`${API_URL}/auth/login`, {
          email,
          password,
        });
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        set({ user, token, isAuthenticated: true });
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },

    register: async (email: string, password: string) => {
      try {
        const response = await axios.post(`${API_URL}/auth/register`, {
          email,
          password,
        });
        const { token, user } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        set({ user, token, isAuthenticated: true });
      } catch (error) {
        console.error('Registration failed:', error);
        throw error;
      }
    },

    logout: () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      set({ user: null, token: null, isAuthenticated: false });
    },
  };
});
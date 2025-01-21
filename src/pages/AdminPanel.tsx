import React, { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';
import axios from 'axios';
import { useAuthStore } from '../store/authStore';

interface Domain {
  id: string;
  domain: string;
  created_at: string;
}

export function AdminPanel() {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [newDomain, setNewDomain] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { token } = useAuthStore();

  useEffect(() => {
    fetchDomains();
  }, []);

  const fetchDomains = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/domains`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setDomains(response.data);
    } catch (error) {
      console.error('Failed to fetch domains:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/domains/add`,
        { domain: newDomain },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setDomains([...domains, response.data]);
      setNewDomain('');
      setError('');
      setSuccess('Domain added successfully');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError('Failed to add domain');
      setSuccess('');
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Domain Management</h1>

      <div className="bg-white shadow sm:rounded-lg mb-6">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Domain</h3>
          <div className="mt-2 max-w-xl text-sm text-gray-500">
            <p>Add a new domain that users can use for their temporary email addresses.</p>
          </div>
          <form onSubmit={handleSubmit} className="mt-5 sm:flex sm:items-center">
            <div className="w-full sm:max-w-xs">
              <label htmlFor="domain" className="sr-only">
                Domain
              </label>
              <input
                type="text"
                name="domain"
                id="domain"
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="example.com"
              />
            </div>
            <button
              type="submit"
              className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              <Plus className="h-4 w-4 mr-2" />
              Add Domain
            </button>
          </form>
          {error && (
            <div className="mt-2 text-sm text-red-600">{error}</div>
          )}
          {success && (
            <div className="mt-2 text-sm text-green-600">{success}</div>
          )}
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Available Domains</h3>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {domains.map((domain) => (
              <li key={domain.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">{domain.domain}</p>
                  <p className="text-sm text-gray-500">
                    Added {new Date(domain.created_at).toLocaleDateString()}
                  </p>
                </div>
              </li>
            ))}
            {domains.length === 0 && (
              <li className="px-4 py-4 sm:px-6 text-sm text-gray-500 text-center">
                No domains added yet
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
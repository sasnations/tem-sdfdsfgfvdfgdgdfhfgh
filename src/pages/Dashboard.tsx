import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Trash2, RefreshCw, Mail } from 'lucide-react';
import axios from 'axios';
import { useAuthStore } from '../store/authStore';
import { useThemeStore } from '../store/themeStore';
import { EmailSearch } from '../components/EmailSearch';
import { DeleteConfirmation } from '../components/DeleteConfirmation';
import { CopyButton } from '../components/CopyButton';

interface ReceivedEmail {
  subject: string;
  received_at: string;
}

interface TempEmail {
  id: string;
  email: string;
  created_at: string;
  expires_at: string;
  lastEmail?: ReceivedEmail;
}

interface Domain {
  id: string;
  domain: string;
}

export function Dashboard() {
  const [tempEmails, setTempEmails] = useState<TempEmail[]>([]);
  const [domains, setDomains] = useState<Domain[]>([]);
  const [newEmail, setNewEmail] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteConfirmation, setDeleteConfirmation] = useState<{ isOpen: boolean; emailId: string; email: string }>({
    isOpen: false,
    emailId: '',
    email: ''
  });

  const { token } = useAuthStore();
  const { isDark } = useThemeStore();

  useEffect(() => {
    fetchEmails();
    fetchDomains();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/emails`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const emailsWithLastMessage = await Promise.all(
        response.data.map(async (email: TempEmail) => {
          try {
            const lastEmailResponse = await axios.get(
              `${import.meta.env.VITE_API_URL}/emails/${email.id}/received`,
              { headers: { Authorization: `Bearer ${token}` } }
            );
            return {
              ...email,
              lastEmail: lastEmailResponse.data[0] || null
            };
          } catch (error) {
            return email;
          }
        })
      );
      setTempEmails(emailsWithLastMessage);
    } catch (error) {
      console.error('Failed to fetch emails:', error);
    }
  };

  const fetchDomains = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/domains`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setDomains(response.data);
      if (response.data.length > 0 && !selectedDomain) {
        setSelectedDomain(response.data[0].id);
      }
    } catch (error) {
      console.error('Failed to fetch domains:', error);
    }
  };

  const createEmail = async () => {
    try {
      if (!selectedDomain) {
        setError('Please select a domain');
        return;
      }

      const emailPrefix = newEmail.trim();
      if (!emailPrefix) {
        setError('Please enter an email prefix');
        return;
      }

      const selectedDomainObj = domains.find(d => d.id === selectedDomain);
      if (!selectedDomainObj) {
        setError('Invalid domain selected');
        return;
      }

      const fullEmail = `${emailPrefix}@${selectedDomainObj.domain}`;

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/emails/create`,
        { 
          email: fullEmail,
          domainId: selectedDomain 
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      setTempEmails([...tempEmails, response.data]);
      setNewEmail('');
      setError('');
    } catch (error) {
      console.error('Create email error:', error);
      setError('Failed to create email');
    }
  };

  const confirmDelete = (id: string, email: string) => {
    setDeleteConfirmation({ isOpen: true, emailId: id, email });
  };

  const deleteEmail = async () => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/emails/delete/${deleteConfirmation.emailId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTempEmails(tempEmails.filter(email => email.id !== deleteConfirmation.emailId));
      setDeleteConfirmation({ isOpen: false, emailId: '', email: '' });
    } catch (error) {
      console.error('Failed to delete email:', error);
    }
  };

  const filteredEmails = tempEmails.filter(email =>
    email.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch (error) {
      return 'Invalid Date';
    }
  };

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="flex flex-col space-y-6 mb-6">
        <div className="flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Your Temporary Emails
          </h1>
          <div className="flex space-x-4">
            <select
              value={selectedDomain}
              onChange={(e) => setSelectedDomain(e.target.value)}
              className={`rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                isDark ? 'bg-gray-700 text-white border-gray-600' : ''
              }`}
            >
              {domains.map(domain => (
                <option key={domain.id} value={domain.id}>
                  @{domain.domain}
                </option>
              ))}
            </select>
            <div className="flex">
              <input
                type="text"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Enter email prefix"
                className={`rounded-l-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 ${
                  isDark ? 'bg-gray-700 text-white border-gray-600' : ''
                }`}
              />
              <button
                onClick={createEmail}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-r-md shadow-sm text-sm font-medium text-white bg-[#4A90E2] hover:bg-[#357ABD] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Plus className="h-5 w-5 mr-2" />
                Create
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <EmailSearch searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
          <button
            onClick={fetchEmails}
            className={`p-2 ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'} transition-colors`}
          >
            <RefreshCw className="h-5 w-5" />
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {filteredEmails.length === 0 ? (
        <div className={`text-center py-12 ${isDark ? 'text-gray-300' : 'text-gray-900'}`}>
          <Mail className={`mx-auto h-12 w-12 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
          <h3 className="mt-2 text-sm font-medium">No temporary emails</h3>
          <p className={`mt-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            {searchTerm ? 'No emails match your search.' : 'Get started by creating a new temporary email.'}
          </p>
        </div>
      ) : (
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow overflow-hidden sm:rounded-lg`}>
          <ul className="divide-y divide-gray-200">
            {filteredEmails.map((email) => (
              <li key={email.id} className={`hover:bg-gray-50 transition-colors ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                <div className="px-6 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center space-x-2">
                      <Link 
                        to={`/dashboard/email/${email.id}`}
                        className={`block hover:text-[#4A90E2] transition-colors ${isDark ? 'text-gray-300' : 'text-gray-900'}`}
                      >
                        <p className="text-sm font-medium truncate">{email.email}</p>
                      </Link>
                      <CopyButton text={email.email} />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Created {formatDate(email.created_at)}
                        {' · '}
                        Expires {formatDate(email.expires_at)}
                      </p>
                      {email.lastEmail ? (
                        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} truncate`}>
                          Latest: {email.lastEmail.subject}
                        </p>
                      ) : (
                        <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'} italic`}>
                          No messages yet
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <button
                      onClick={() => confirmDelete(email.id, email.email)}
                      className={`text-gray-400 hover:text-red-500 transition-colors p-2 rounded-full ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      <DeleteConfirmation
        isOpen={deleteConfirmation.isOpen}
        onClose={() => setDeleteConfirmation({ isOpen: false, emailId: '', email: '' })}
        onConfirm={deleteEmail}
        itemName={deleteConfirmation.email}
      />
    </div>
  );
}
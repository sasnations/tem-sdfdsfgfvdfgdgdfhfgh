import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Mail, Settings, LogOut, User, Moon, Sun, Menu, X } from 'lucide-react';
import { useAuthStore } from '../store/authStore';
import { useThemeStore } from '../store/themeStore';

export function Layout() {
  const { user, logout } = useAuthStore();
  const { isDark, toggleTheme } = useThemeStore();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <nav className={`${isDark ? 'bg-gray-800' : 'bg-white'} shadow-sm relative z-50`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center">
                <Mail className="h-6 w-6 text-[#4A90E2]" />
                <span className={`ml-2 text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  TempMail
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              {user?.isAdmin && (
                <Link
                  to="/dashboard/admin"
                  className={`flex items-center ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  <Settings className="h-5 w-5" />
                  <span className="ml-2">Admin</span>
                </Link>
              )}
              <button
                onClick={handleLogout}
                className={`flex items-center ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                <LogOut className="h-5 w-5" />
                <span className="ml-2">Logout</span>
              </button>
              <div className="flex items-center">
                <User className={`h-5 w-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} />
                <span className={`ml-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  {user?.email}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-16 inset-x-0 ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center px-3 py-4 text-base font-medium ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              } border-b border-gray-700`}
            >
              {isDark ? <Sun className="h-5 w-5 mr-2" /> : <Moon className="h-5 w-5 mr-2" />}
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </button>
            {user?.isAdmin && (
              <Link
                to="/dashboard/admin"
                className={`block px-3 py-4 text-base font-medium ${
                  isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                } border-b border-gray-700`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Settings className="h-5 w-5 inline mr-2" />
                Admin
              </Link>
            )}
            <button
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center px-3 py-4 text-base font-medium ${
                isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              } border-b border-gray-700`}
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </button>
            <div className={`px-3 py-4 text-base font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <User className="h-5 w-5 inline mr-2" />
              {user?.email}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-[1400px] mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
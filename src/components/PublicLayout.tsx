import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Menu, X } from 'lucide-react';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export function PublicLayout({ children }: PublicLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <Mail className="h-6 w-6 text-[#4A90E2]" />
              <span className="ml-2 text-xl font-bold text-gray-900">Boomlify</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/features" className="text-gray-600 hover:text-[#4A90E2] transition-colors">
                Features
              </Link>
              <Link to="/how-it-works" className="text-gray-600 hover:text-[#4A90E2] transition-colors">
                How It Works
              </Link>
              <Link to="/temp-mail-pro" className="text-gray-600 hover:text-[#4A90E2] transition-colors">
                Pro Features
              </Link>
              <Link to="/login" className="text-[#4A90E2] hover:text-[#357ABD] transition-colors">
                Sign In
              </Link>
              <Link
                to="/register"
                className="bg-[#4A90E2] text-white px-4 py-2 rounded-lg hover:bg-[#357ABD] transition-colors"
              >
                Get Started
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile navigation */}
        <div
          className={`md:hidden absolute top-16 inset-x-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/features"
              className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-[#4A90E2] border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/how-it-works"
              className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-[#4A90E2] border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link
              to="/temp-mail-pro"
              className="block px-3 py-4 text-base font-medium text-gray-600 hover:text-[#4A90E2] border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Pro Features
            </Link>
            <Link
              to="/login"
              className="block px-3 py-4 text-base font-medium text-[#4A90E2] hover:text-[#357ABD] border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </Link>
            <Link
              to="/register"
              className="block px-3 py-4 text-base font-medium text-white bg-[#4A90E2] hover:bg-[#357ABD] rounded-lg text-center mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Features</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                    Temporary Email
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                    Disposable Address
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                    Anonymous Inbox
                  </Link>
                </li>
                <li>
                  <Link to="/features" className="text-gray-400 hover:text-white transition-colors">
                    Spam Protection
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-gray-400 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/gdpr" className="text-gray-400 hover:text-white transition-colors">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Boomlify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
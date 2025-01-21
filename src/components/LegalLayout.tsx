import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Book, Cookie, Scale } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, children }: LegalLayoutProps) {
  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case 'privacy policy':
        return <Shield className="w-8 h-8 text-[#4A90E2]" />;
      case 'terms of service':
        return <Book className="w-8 h-8 text-[#4A90E2]" />;
      case 'cookie policy':
        return <Cookie className="w-8 h-8 text-[#4A90E2]" />;
      case 'gdpr compliance statement':
        return <Scale className="w-8 h-8 text-[#4A90E2]" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Legal Document Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-wrap gap-4 mb-8">
          <Link
            to="/privacy"
            className="flex items-center px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <Shield className="w-4 h-4 mr-2 text-[#4A90E2]" />
            <span>Privacy Policy</span>
          </Link>
          <Link
            to="/terms"
            className="flex items-center px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <Book className="w-4 h-4 mr-2 text-[#4A90E2]" />
            <span>Terms of Service</span>
          </Link>
          <Link
            to="/cookies"
            className="flex items-center px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <Cookie className="w-4 h-4 mr-2 text-[#4A90E2]" />
            <span>Cookie Policy</span>
          </Link>
          <Link
            to="/gdpr"
            className="flex items-center px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <Scale className="w-4 h-4 mr-2 text-[#4A90E2]" />
            <span>GDPR</span>
          </Link>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] px-8 py-6">
            <div className="flex items-center">
              {getIcon(title)}
              <h1 className="text-3xl font-bold text-white ml-4">{title}</h1>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-10">
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50 px-8 py-6 mt-8">
            <p className="text-sm text-gray-600">
              Last updated: January 16, 2024. If you have any questions about our policies,
              please{' '}
              <a
                href="mailto:legal@boomlify.com"
                className="text-[#4A90E2] hover:text-[#357ABD] transition-colors"
              >
                contact us
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
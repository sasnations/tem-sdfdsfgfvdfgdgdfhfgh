import React from 'react';
import { Mail, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PublicLayout } from '../components/PublicLayout';
import { BackButton } from '../components/BackButton';

export function HowItWorks() {
  // ... rest of the component remains the same ...
  
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5 py-12">
        {/* ... rest of the JSX ... */}
        
        {/* Update the CTA button to use Link */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Create your first temporary email address now and experience the most
            secure and reliable disposable email service.
          </p>
          <Link
            to="/register"
            className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#357ABD] transition-colors inline-block"
          >
            Create Free Email
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
}
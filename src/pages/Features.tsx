import React from 'react';
import { Shield, Clock, RefreshCw, Lock, Zap, Globe, Mail, Ban } from 'lucide-react';
import { PublicLayout } from '../components/PublicLayout';
import { Link } from 'react-router-dom';

export function Features() {
  const features = [
    {
      title: "Temporary Email",
      icon: Mail,
      description: "Create disposable email addresses instantly, perfect for temporary use and protecting your privacy.",
      benefits: [
        "Instant creation",
        "No registration needed",
        "Multiple addresses",
        "Real-time notifications"
      ]
    },
    {
      title: "Disposable Address",
      icon: RefreshCw,
      description: "Generate unlimited disposable addresses that automatically expire after their validity period.",
      benefits: [
        "Unlimited addresses",
        "Automatic expiration",
        "Custom validity period",
        "Easy management"
      ]
    },
    {
      title: "Anonymous Inbox",
      icon: Lock,
      description: "Keep your real identity private with our anonymous inbox system.",
      benefits: [
        "Complete anonymity",
        "No personal data required",
        "Secure messaging",
        "Private attachments"
      ]
    },
    {
      title: "Spam Protection",
      icon: Shield,
      description: "Advanced spam filtering keeps your temporary inbox clean and secure.",
      benefits: [
        "Smart spam detection",
        "Malware protection",
        "Phishing prevention",
        "Clean inbox"
      ]
    }
  ];

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Your Privacy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover all the features that make Boomlify the most secure and reliable temporary email service.
            </p>
          </div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-12`}
              >
                <div className="flex-1">
                  <div className="text-[#4A90E2] mb-6">
                    <feature.icon className="w-16 h-16" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    {feature.description}
                  </p>
                  <ul className="space-y-4">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-700">
                        <Zap className="w-5 h-5 text-[#4A90E2] mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Create your first temporary email address now and see why thousands of users trust Boomlify.
            </p>
            <Link
              to="/register"
              className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#357ABD] transition-colors inline-block"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
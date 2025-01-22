import React from 'react';
import { Shield, Zap, Star, Clock, Search, Globe, Mail, Gift, RefreshCw, FileText, Users, Database } from 'lucide-react';
import { PublicLayout } from '../components/PublicLayout';
import { Link } from 'react-router-dom';

export function ProFeatures() {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-5xl font-bold mb-6 text-center">
              Advanced Free Features
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-center">
              Discover our powerful free features that make Boomlify the most advanced
              temporary email service available. No hidden costs, no premium plans - everything is free!
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Long-Term Validity",
                description: "Industry-leading 2+ month email validity period",
                features: [
                  "Longest free validity period",
                  "Perfect for long-term projects",
                  "Automatic expiry notifications",
                  "Validity extension option"
                ]
              },
              {
                icon: Search,
                title: "Advanced Search",
                description: "Powerful email search and organization features",
                features: [
                  "Full-text email search",
                  "Search across all inboxes",
                  "Filter by date and type",
                  "Advanced sorting options"
                ]
              },
              {
                icon: RefreshCw,
                title: "Real-Time Updates",
                description: "Instant email delivery and notifications",
                features: [
                  "Instant email notifications",
                  "Real-time inbox updates",
                  "Live email tracking",
                  "Delivery confirmations"
                ]
              },
              {
                icon: FileText,
                title: "Rich Email Support",
                description: "Full support for modern email features",
                features: [
                  "HTML email support",
                  "Attachment handling",
                  "Email formatting",
                  "Rich text viewing"
                ]
              },
              {
                icon: Users,
                title: "Multi-Inbox Management",
                description: "Manage multiple temporary emails efficiently",
                features: [
                  "Unlimited email addresses",
                  "Unified inbox view",
                  "Bulk actions support",
                  "Easy organization"
                ]
              },
              {
                icon: Database,
                title: "Email History",
                description: "Complete email history and management",
                features: [
                  "Full email archive",
                  "Message tracking",
                  "Download options",
                  "History retention"
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <feature.icon className="w-12 h-12 text-[#4A90E2] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <Star className="w-4 h-4 text-[#4A90E2] mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] rounded-2xl p-12">
              <Gift className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-6">
                Try All Features For Free
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Get instant access to all our advanced features. No credit card required,
                no premium plans - everything is completely free!
              </p>
              <Link
                to="/register"
                className="inline-flex items-center bg-white text-[#4A90E2] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Create Free Account
              </Link>
              <p className="mt-4 text-sm text-white/80">
                100% Free • No Credit Card • No Hidden Costs
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
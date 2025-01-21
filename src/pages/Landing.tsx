import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Shield, Clock, Globe, CheckCircle, ArrowRight, Lock, RefreshCw, 
  Zap, AlertTriangle, Inbox, Search, Star, Users, Award, Gift, 
  DollarSign, Percent, BarChart, MessageCircle, Heart
} from 'lucide-react';
import { PublicLayout } from '../components/PublicLayout';

export function Landing() {
  return (
    <PublicLayout>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#4A90E2]/10 to-[#357ABD]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Create Temporary Emails That Last 2+ Months
            </h1>
            <h2 className="text-3xl font-semibold text-gray-700 mb-8">
              100% Free Service - No Credit Card Required
            </h2> {/* Added subheading to emphasize free service */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get unlimited disposable email addresses with extended validity. Perfect for testing, privacy protection, and avoiding spam. Our service is completely free, with no hidden fees or subscriptions.
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/register"
                className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#357ABD] transition-colors"
              >
                Create Free Email
              </Link>
              <Link
                to="/how-it-works"
                className="bg-white text-[#4A90E2] px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-500">
              No credit card required • Free forever • Cancel anytime
            </p>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Boomlify's Temporary Email Service?
            </h2>
            <p className="text-xl text-gray-600">
              The most reliable and secure disposable email service with extended validity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-[#4A90E2] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                2+ Months Validity
              </h3>
              <p className="text-gray-600">
                Our temporary emails last longer than other services, giving you more time for
                extended projects and testing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="w-12 h-12 text-[#4A90E2] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Enhanced Privacy Protection
              </h3>
              <p className="text-gray-600">
                Keep your real email private and protect yourself from spam, phishing, and
                unwanted marketing.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Mail className="w-12 h-12 text-[#4A90E2] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Unlimited Free Addresses
              </h3>
              <p className="text-gray-600">
                Create as many disposable email addresses as you need, all completely free
                and without restrictions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Unified Account Management Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="text-[#4A90E2] mb-6">
                <Globe className="w-16 h-16" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                All Your Temporary Emails in One Dashboard
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Manage all your disposable email addresses from a single, unified account.
                No more juggling between services or losing track of your temporary inboxes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 text-[#4A90E2] mr-3" />
                  <span>Create unlimited temporary emails under one account</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 text-[#4A90E2] mr-3" />
                  <span>Easy search and filter across all your inboxes</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 text-[#4A90E2] mr-3" />
                  <span>Centralized notifications for all incoming emails</span>
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-6 h-6 text-[#4A90E2] mr-3" />
                  <span>Simple bulk management and organization</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9 bg-white rounded-lg shadow-md p-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-[#4A90E2]" />
                        <span className="font-medium">temp1@boomlify.com</span>
                      </div>
                      <span className="text-green-500 text-sm">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-[#4A90E2]" />
                        <span className="font-medium">temp2@boomlify.com</span>
                      </div>
                      <span className="text-green-500 text-sm">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Mail className="w-5 h-5 text-[#4A90E2]" />
                        <span className="font-medium">temp3@boomlify.com</span>
                      </div>
                      <span className="text-green-500 text-sm">Active</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#4A90E2] text-white px-4 py-2 rounded-lg text-sm">
                  All in one account!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Advanced Features for Your Privacy
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need in a temporary email service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lock className="w-10 h-10 text-[#4A90E2] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Anonymous Inbox
              </h3>
              <p className="text-gray-600">
                Protect your identity with our completely anonymous temporary email system.
                No personal information required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <RefreshCw className="w-10 h-10 text-[#4A90E2] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Auto-Refresh Inbox
              </h3>
              <p className="text-gray-600">
                Real-time email delivery with automatic inbox refresh. Never miss an
                important message.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <AlertTriangle className="w-10 h-10 text-[#4A90E2] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Spam Protection
              </h3>
              <p className="text-gray-600">
                Advanced filters automatically detect and block spam, keeping your
                temporary inbox clean.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Inbox className="w-10 h-10 text-[#4A90E2] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Multiple Domains
              </h3>
              <p className="text-gray-600">
                Choose from multiple domain options for your temporary email addresses.
                Mix and match as needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Search className="w-10 h-10 text-[#4A90E2] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Advanced Search
              </h3>
              <p className="text-gray-600">
                Quickly find any email across all your temporary inboxes with our
                powerful search feature.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Zap className="w-10 h-10 text-[#4A90E2] mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Instant Setup
              </h3>
              <p className="text-gray-600">
                Create new temporary email addresses instantly. No verification or
                complex setup required.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New: Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Thousands of Users
            </h2>
            <p className="text-xl text-gray-600">
              See what our users say about Boomlify
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Software Developer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200",
                content: "The 2-month validity period is a game-changer. Perfect for long-term testing and development projects."
              },
              {
                name: "Michael Rodriguez",
                role: "Digital Marketer",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
                content: "Best temporary email service I've used. The interface is intuitive and the spam protection is excellent."
              },
              {
                name: "Emma Thompson",
                role: "Privacy Advocate",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200",
                content: "Finally, a temporary email service that takes privacy seriously. The extended validity is a huge plus."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="inline-block w-5 h-5 text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New: Pricing Comparison Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Boomlify?
            </h2>
            <p className="text-xl text-gray-600">
              Compare our features with other services
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-t border-b">
                  <th className="py-4 px-6 text-left">Features</th>
                  <th className="py-4 px-6 text-center bg-[#4A90E2]/10">
                    <span className="text-[#4A90E2] font-bold">Boomlify</span>
                  </th>
                  <th className="py-4 px-6 text-center">Other Services</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Email Validity", boomlify: "2+ Months", others: "10-60 Minutes" },
                  { feature: "Number of Addresses", boomlify: "Unlimited", others: "Limited" },
                  { feature: "Spam Protection", boomlify: "Advanced", others: "Basic" },
                  { feature: "Attachment Support", boomlify: "Yes", others: "Limited" },
                  { feature: "Custom Domains", boomlify: "Yes", others: "No" },
                  { feature: "API Access", boomlify: "Yes", others: "Limited" }
                ].map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-4 px-6 font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center bg-[#4A90E2]/10">
                      <span className="text-[#4A90E2] font-medium">{row.boomlify}</span>
                    </td>
                    <td className="py-4 px-6 text-center text-gray-600">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* New: Statistics Section */}
      <div className="py-24 bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Users, number: "100,000+", label: "Active Users" },
              { icon: Mail, number: "1M+", label: "Emails Created" },
              { icon: Shield, number: "99.9%", label: "Uptime" },
              { icon: MessageCircle, number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 text-[#4A90E2] mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* New: Trust Badges Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: "256-bit SSL Encryption" },
              { icon: Award, label: "GDPR Compliant" },
              { icon: Heart, label: "Privacy Focused" },
              { icon: Gift, label: "Always Free" }
            ].map((badge, index) => (
              <div key={index} className="flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-gray-400 mr-2" />
                <span className="text-sm text-gray-600">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Perfect for Every Situation
            </h2>
            <p className="text-xl text-gray-600">
              Discover how our temporary email service can help you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                For Personal Use
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-2" />
                  <span>Sign up for newsletters and promotions</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-2" />
                  <span>Test online services before committing</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-2" />
                  <span>Protect your primary email from spam</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                For Business Use
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-2" />
                  <span>Test email marketing campaigns</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-2" />
                  <span>Create temporary accounts for projects</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-2" />
                  <span>Manage multiple service registrations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Protect Your Privacy?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who trust Boomlify for their temporary email needs.
            Create your first disposable email address now!
          </p>
          <Link
            to="/register"
            className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#357ABD] transition-colors inline-flex items-center"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required • Free forever • Cancel anytime
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, Lock, Mail, AlertTriangle, CheckCircle, Clock, 
  UserPlus, Infinity, Code, Ban, ArrowRight, Search,
  Users, Eye, Key, RefreshCw, Zap, FileText, Star,
  Award, Gift, Heart, MessageCircle, Settings, Globe,
  Smartphone, Laptop, Server, Cloud, Share2, BookOpen,
  Target, Briefcase, ShoppingCart, Headphones, Send,
  BarChart, PieChart, TrendingUp, Layers, Database
} from 'lucide-react';
import { PublicLayout } from '../components/PublicLayout';

export function Benefits() {
  return (
    <PublicLayout>
      {/* Hero Section with SEO Focus */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h1 className="text-5xl font-bold mb-6 text-center">
            Why Choose a Long-Term Temporary Email Service?
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto text-center">
            Explore the unique advantages of using a temporary email service that lasts longer
            and offers more features than traditional disposable emails.
          </p>
        </div>
      </div>

      {/* Business Use Cases Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Professional Applications
            </h2>
            <p className="text-xl text-gray-600">
              Discover how businesses leverage long-term temporary emails
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Client Communication",
                features: [
                  "Dedicated project emails",
                  "Client-specific addresses",
                  "Professional domain options",
                  "Team collaboration"
                ]
              },
              {
                icon: Target,
                title: "Market Research",
                features: [
                  "Competitor analysis",
                  "Market surveys",
                  "Product research",
                  "Customer feedback"
                ]
              },
              {
                icon: ShoppingCart,
                title: "E-commerce Testing",
                features: [
                  "Order flow verification",
                  "Payment gateway testing",
                  "Email notification checks",
                  "User journey analysis"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <section.icon className="w-12 h-12 text-[#4A90E2] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Analytics Section */}
      <div className="py-24 bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Email Analytics & Insights
            </h2>
            <p className="text-xl text-gray-600">
              Understand your email usage patterns
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart,
                title: "Usage Analytics",
                features: [
                  "Email volume tracking",
                  "Peak usage times",
                  "Domain statistics",
                  "Storage metrics"
                ]
              },
              {
                icon: PieChart,
                title: "Content Analysis",
                features: [
                  "Spam detection rates",
                  "Content categorization",
                  "Attachment analysis",
                  "Sender patterns"
                ]
              },
              {
                icon: TrendingUp,
                title: "Performance Metrics",
                features: [
                  "Delivery success rates",
                  "Response times",
                  "System availability",
                  "Error tracking"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <section.icon className="w-12 h-12 text-[#4A90E2] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Advanced Security Features */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600">
              Advanced protection for your temporary communications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Threat Detection",
                description: "AI-powered malware and phishing detection"
              },
              {
                icon: Lock,
                title: "Access Controls",
                description: "IP-based restrictions and login alerts"
              },
              {
                icon: Key,
                title: "Encryption",
                description: "End-to-end encryption for sensitive content"
              },
              {
                icon: Eye,
                title: "Activity Monitoring",
                description: "Real-time suspicious activity detection"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <feature.icon className="w-12 h-12 text-[#4A90E2] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance & Standards Section */}
      <div className="py-24 bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600">
              Meeting global privacy and security standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Compliance",
                features: [
                  "GDPR compliance",
                  "CCPA compliance",
                  "ISO 27001 certified",
                  "SOC 2 Type II"
                ]
              },
              {
                icon: Shield,
                title: "Data Protection",
                features: [
                  "Data residency options",
                  "Retention policies",
                  "Secure deletion",
                  "Audit trails"
                ]
              },
              {
                icon: Award,
                title: "Industry Standards",
                features: [
                  "Email authentication",
                  "SPF records",
                  "DKIM signing",
                  "DMARC policies"
                ]
              }
            ].map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <section.icon className="w-12 h-12 text-[#4A90E2] mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[#4A90E2] mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Elevate Your Email Security?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience enterprise-grade temporary email features with our free service.
            No credit card required.
          </p>
          <Link
            to="/register"
            className="bg-[#4A90E2] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#357ABD] transition-colors inline-flex items-center"
          >
            Start Protecting Your Privacy
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </PublicLayout>
  );
}
import React from 'react';
import { Shield, Users, Target, Mail, Globe, Lock } from 'lucide-react';
import { PublicLayout } from '../components/PublicLayout';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-5xl font-bold mb-6 text-center">
              About Boomlify – Your Privacy, Our Priority
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-center">
              At Boomlify, we believe in empowering users to take control of their online privacy.
              Our temporary email service helps you avoid spam, protect your personal information,
              and stay secure online.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                We're dedicated to making online communication safer and more secure for everyone.
                Our innovative temporary email service provides you with the tools you need to
                protect your privacy in an increasingly connected world.
              </p>
              <Link
                to="/register"
                className="inline-flex items-center bg-[#4A90E2] text-white px-6 py-3 rounded-lg hover:bg-[#357ABD] transition-colors"
              >
                Get Started Free
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="w-12 h-12 text-[#4A90E2] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Privacy First
                </h3>
                <p className="text-gray-600">
                  Your privacy is our top priority. We never sell your data.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Users className="w-12 h-12 text-[#4A90E2] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  User Focused
                </h3>
                <p className="text-gray-600">
                  Built with users in mind, for the best experience.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Target className="w-12 h-12 text-[#4A90E2] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Reliable
                </h3>
                <p className="text-gray-600">
                  99.9% uptime guarantee for your peace of mind.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Lock className="w-12 h-12 text-[#4A90E2] mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Secure
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade security for your data.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're a team of privacy enthusiasts and tech experts dedicated to
                making online communication safer for everyone.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Chen",
                  role: "Chief Privacy Officer",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Lead Developer",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400"
                },
                {
                  name: "Emma Thompson",
                  role: "Security Specialist",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400"
                }
              ].map((member, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Take Control of Your Privacy?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust Boomlify for their temporary email needs.
              Create your first disposable email address now!
            </p>
            <Link
              to="/register"
              className="inline-flex items-center bg-white text-[#4A90E2] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
import React, { useState } from 'react';
import { Mail, MessageCircle, Clock, Send } from 'lucide-react';
import { PublicLayout } from '../components/PublicLayout';
import axios from 'axios';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/contact`, {
        ...formData,
        to: 'support@boomlify.com' // Support email address
      });
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for your message. We\'ll get back to you soon!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email us directly at support@boomlify.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-5xl font-bold mb-6 text-center">
              Contact Boomlify – We're Here to Help
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-center">
              Have a question or need assistance? Our team is ready to help you with
              any inquiries about our temporary email service.
            </p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Mail className="w-12 h-12 text-[#4A90E2] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Email Support
              </h3>
              <p className="text-gray-600 mb-4">
                Send us an email anytime. We typically respond within 24 hours.
              </p>
              <a
                href="mailto:support@boomlify.com"
                className="text-[#4A90E2] hover:text-[#357ABD] transition-colors"
              >
                support@boomlify.com
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <MessageCircle className="w-12 h-12 text-[#4A90E2] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Telegram Support
              </h3>
              <p className="text-gray-600 mb-4">
                Get instant support through our Telegram channel.
              </p>
              <a
                href="https://t.me/boomlify"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#4A90E2] hover:text-[#357ABD] transition-colors"
              >
                @boomlify
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Clock className="w-12 h-12 text-[#4A90E2] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Response Time
              </h3>
              <p className="text-gray-600">
                We strive to respond to all inquiries within 24 hours. For urgent
                matters, please reach out via Telegram.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {submitStatus.type && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#4A90E2] text-white rounded-lg px-6 py-3 hover:bg-[#357ABD] transition-colors flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
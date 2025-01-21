import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { BackButton } from '../components/BackButton';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long do temporary emails last?",
      answer: "Our temporary emails are valid for 2+ months by default, which is significantly longer than most other services. You can also extend this period if needed, making it perfect for long-term use."
    },
    {
      question: "Is Boomlify really free?",
      answer: "Yes! Boomlify is 100% free with no hidden costs. All features, including unlimited email addresses, 2+ month validity, and spam protection, are available to all users at no charge."
    },
    {
      question: "Can I receive attachments?",
      answer: "Absolutely! You can receive all types of email attachments through your temporary email address. Our system supports various file formats while maintaining security."
    },
    {
      question: "How secure is the service?",
      answer: "Very secure! We use industry-standard encryption and security measures to protect your temporary emails. Your data is encrypted, and we never share your information with third parties."
    },
    {
      question: "Can I create multiple email addresses?",
      answer: "Yes! You can create unlimited temporary email addresses with Boomlify. There are no restrictions on the number of addresses you can create or manage."
    },
    {
      question: "How quickly do I receive emails?",
      answer: "Instantly! Our system delivers emails in real-time, so you'll receive messages as soon as they're sent. No delays, no waiting periods."
    },
    {
      question: "Can I extend the email validity period?",
      answer: "Yes! While emails are valid for 2+ months by default, you can easily extend their validity period through your dashboard if you need them for longer."
    },
    {
      question: "What about spam protection?",
      answer: "We have robust spam filters that automatically detect and block spam, phishing attempts, and malicious content, keeping your temporary inbox clean and secure."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need to know about Boomlify's temporary email service
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-[#4A90E2]" />
                ) : (
                  <Plus className="h-5 w-5 text-[#4A90E2]" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
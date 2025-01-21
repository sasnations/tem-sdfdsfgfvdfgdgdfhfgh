import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export function Cookies() {
  return (
    <LegalLayout title="Cookie Policy">
      <div className="prose max-w-none">
        <p className="text-sm text-gray-500 mb-6">Effective Date: January 16, 2024</p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small files stored on your device to improve functionality and user experience.
          They help us understand how you use our service and enhance your browsing experience.
        </p>

        <h2>2. Types of Cookies We Use</h2>
        <h3>Essential Cookies</h3>
        <p>
          These cookies are necessary for the website to function properly. They enable core
          functionality such as security, network management, and accessibility.
        </p>

        <h3>Analytics Cookies</h3>
        <p>
          We use analytics cookies to understand how visitors interact with our website. This
          helps us improve our service and user experience.
        </p>

        <h3>Preference Cookies</h3>
        <p>
          These cookies remember your settings and preferences to enhance your experience
          and provide more personalized features.
        </p>

        <h2>3. Managing Cookies</h2>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies
          that are already on your computer and you can set most browsers to prevent them
          from being placed. However, if you do this, you may have to manually adjust some
          preferences every time you visit a site, and some services and functionalities may
          not work.
        </p>

        <h2>4. Third-Party Cookies</h2>
        <p>
          We use third-party services such as Google Analytics that may place cookies on
          your device. These cookies help us analyze usage patterns and improve our service.
          Third-party cookies are subject to their respective privacy policies.
        </p>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            For any questions about our Cookie Policy, please contact us at{' '}
            <a href="mailto:privacy@boomlify.com" className="text-[#4A90E2]">
              privacy@boomlify.com
            </a>
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export function Privacy() {
  return (
    <LegalLayout title="Privacy Policy">
      <div className="prose max-w-none">
        <p className="text-sm text-gray-500 mb-6">Effective Date: January 16, 2024</p>

        <h2>1. Information We Collect</h2>
        <h3>Personal Data</h3>
        <ul>
          <li>Email addresses</li>
          <li>IP addresses</li>
          <li>Optional user account details (if applicable)</li>
        </ul>

        <h3>Non-Personal Data</h3>
        <ul>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Usage analytics</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our temporary email service</li>
          <li>To improve user experience through analytics</li>
          <li>To detect and prevent fraud and abuse</li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>3. Data Retention</h2>
        <p>
          Temporary email content is automatically deleted after 2 months. Personal data
          associated with user accounts is retained until account deletion or service
          termination.
        </p>

        <h2>4. Data Sharing</h2>
        <p>
          We never sell your personal data to third parties. Data sharing is limited to:
        </p>
        <ul>
          <li>Trusted service providers for operational purposes</li>
          <li>Legal authorities when required by law</li>
        </ul>

        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal data</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Opt-out of certain data collection</li>
        </ul>

        <h2>6. Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your
          data. However, no Internet-based service can guarantee 100% security.
        </p>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            For any questions about our Privacy Policy, please contact us at{' '}
            <a href="mailto:privacy@boomlify.com" className="text-[#4A90E2]">
              privacy@boomlify.com
            </a>
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export function Terms() {
  return (
    <LegalLayout title="Terms of Service">
      <div className="prose max-w-none">
        <p className="text-sm text-gray-500 mb-6">Effective Date: January 16, 2024</p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using Boomlify.com, you agree to be bound by these Terms of
          Service. If you disagree with any part of these terms, you may not access our
          service.
        </p>

        <h2>2. Use of Service</h2>
        <h3>Permitted Use</h3>
        <p>
          Temporary email addresses provided by Boomlify.com are for receiving emails only.
          Each address is valid for up to 2 months.
        </p>

        <h3>Prohibited Activities</h3>
        <ul>
          <li>Sending spam or unsolicited emails</li>
          <li>Using the service for illegal activities</li>
          <li>Attempting to abuse or exploit the service</li>
          <li>Interfering with other users' access to the service</li>
        </ul>

        <h2>3. Termination</h2>
        <p>
          Boomlify.com reserves the right to:
        </p>
        <ul>
          <li>Terminate accounts for violations of these terms</li>
          <li>Deny service to any user for any reason</li>
          <li>Delete inactive accounts after extended periods</li>
        </ul>

        <h2>4. Liability</h2>
        <p>
          The service is provided "as is" without warranties of any kind. Boomlify.com is
          not responsible for:
        </p>
        <ul>
          <li>Loss of data or emails</li>
          <li>Service interruptions or downtime</li>
          <li>Misuse of the service by users</li>
          <li>Any damages resulting from use of the service</li>
        </ul>

        <h2>5. Modifications</h2>
        <p>
          We may modify these terms at any time. Continued use of the service after any
          modifications indicates your acceptance of the updated terms.
        </p>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            For any questions about our Terms of Service, please contact us at{' '}
            <a href="mailto:legal@boomlify.com" className="text-[#4A90E2]">
              legal@boomlify.com
            </a>
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
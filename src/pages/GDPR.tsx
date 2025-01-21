import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

export function GDPR() {
  return (
    <LegalLayout title="GDPR Compliance Statement">
      <div className="prose max-w-none">
        <p className="text-sm text-gray-500 mb-6">Effective Date: January 16, 2024</p>

        <h2>1. Data Controller</h2>
        <p>
          Boomlify.com acts as the data controller for all personal data collected through
          our service. We are committed to protecting your privacy and handling your data
          in an open and transparent manner.
        </p>

        <h2>2. Legal Basis for Processing</h2>
        <h3>Consent</h3>
        <p>
          We process your data based on the consent you provide when using our service.
          This consent can be withdrawn at any time.
        </p>

        <h3>Legitimate Interest</h3>
        <p>
          Some data processing is based on our legitimate interests in operating and
          improving our service, ensuring security, and preventing fraud.
        </p>

        <h2>3. Your GDPR Rights</h2>
        <ul>
          <li>Right to access your personal data</li>
          <li>Right to correct inaccurate personal data</li>
          <li>Right to request deletion of your personal data</li>
          <li>Right to data portability</li>
          <li>Right to restrict processing of your data</li>
          <li>Right to object to processing of your data</li>
        </ul>

        <h2>4. Data Breach Policy</h2>
        <p>
          In the event of a data breach that poses a risk to your personal data, we will
          notify you and the relevant supervisory authority within 72 hours of becoming
          aware of the breach. The notification will include:
        </p>
        <ul>
          <li>The nature of the data breach</li>
          <li>The categories and approximate number of individuals concerned</li>
          <li>The likely consequences of the breach</li>
          <li>The measures taken or proposed to address the breach</li>
        </ul>

        <h2>5. How to Exercise Your Rights</h2>
        <p>
          To exercise any of your rights under GDPR, please contact our Data Protection
          Officer at{' '}
          <a href="mailto:dpo@boomlify.com" className="text-[#4A90E2]">
            dpo@boomlify.com
          </a>
          . We will respond to your request within 30 days.
        </p>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <p className="text-sm text-gray-600">
            For any questions about our GDPR compliance, please contact our Data Protection
            Officer at{' '}
            <a href="mailto:dpo@boomlify.com" className="text-[#4A90E2]">
              dpo@boomlify.com
            </a>
          </p>
        </div>
      </div>
    </LegalLayout>
  );
}
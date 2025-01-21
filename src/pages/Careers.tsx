import React from 'react';
import { Briefcase, Code, Headphones, Send, ChevronRight, Heart, Users, Target } from 'lucide-react';
import { PublicLayout } from '../components/PublicLayout';

export function Careers() {
  const positions = [
    {
      title: "Software Engineer",
      type: "Full-time",
      location: "Remote",
      icon: Code,
      description: "Join our engineering team to develop and maintain Boomlify's temporary email platform.",
      requirements: [
        "3+ years of experience with JavaScript/TypeScript",
        "Strong knowledge of React and Node.js",
        "Experience with REST APIs and database design",
        "Understanding of security best practices",
        "Excellent problem-solving skills"
      ]
    },
    {
      title: "Customer Support Specialist",
      type: "Full-time",
      location: "Remote",
      icon: Headphones,
      description: "Help our users get the most out of Boomlify by providing exceptional support.",
      requirements: [
        "2+ years of customer support experience",
        "Excellent written and verbal communication",
        "Knowledge of email systems and privacy",
        "Problem-solving mindset",
        "Ability to work independently"
      ]
    }
  ];

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-[#4A90E2]/5 to-[#357ABD]/5">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <h1 className="text-5xl font-bold mb-6 text-center">
              Join the Boomlify Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto text-center">
              Help us make the internet a safer place. We're looking for passionate
              individuals who share our vision of privacy and security.
            </p>
          </div>
        </div>

        {/* Why Join Us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Join Boomlify?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer more than just a job. Join a team that's passionate about
              privacy and making a difference in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Heart className="w-12 h-12 text-[#4A90E2] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Work-Life Balance
              </h3>
              <p className="text-gray-600">
                Flexible hours, remote work options, and generous time off to help
                you stay refreshed and productive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users className="w-12 h-12 text-[#4A90E2] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Great Team Culture
              </h3>
              <p className="text-gray-600">
                Join a supportive team that values collaboration, growth, and
                innovation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Target className="w-12 h-12 text-[#4A90E2] mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Opportunities for learning, development, and advancement in your
                career.
              </p>
            </div>
          </div>

          {/* Open Positions */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Open Positions
            </h2>

            {positions.map((position, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <position.icon className="w-8 h-8 text-[#4A90E2] mr-4" />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {position.title}
                      </h3>
                      <div className="flex items-center mt-2 text-gray-600">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="mr-4">{position.type}</span>
                        <span>{position.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">
                    {position.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      Requirements
                    </h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, i) => (
                        <li key={i} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-[#4A90E2] mr-2 mt-0.5" />
                          <span className="text-gray-600">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`mailto:careers@boomlify.com?subject=Application for ${position.title}`}
                    className="inline-flex items-center bg-[#4A90E2] text-white px-6 py-3 rounded-lg hover:bg-[#357ABD] transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply Section */}
        <div className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                How to Apply
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to join our team? Here's how to apply:
              </p>
              <ol className="text-left space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4A90E2] text-white mr-4 shrink-0">
                    1
                  </span>
                  <p className="text-gray-600">
                    Send your resume and cover letter to{' '}
                    <a
                      href="mailto:careers@boomlify.com"
                      className="text-[#4A90E2] hover:text-[#357ABD]"
                    >
                      careers@boomlify.com
                    </a>
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4A90E2] text-white mr-4 shrink-0">
                    2
                  </span>
                  <p className="text-gray-600">
                    Include the position title in the subject line
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#4A90E2] text-white mr-4 shrink-0">
                    3
                  </span>
                  <p className="text-gray-600">
                    Tell us why you'd be a great fit for Boomlify
                  </p>
                </li>
              </ol>
              <p className="text-gray-600">
                We'll review your application and get back to you within 5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
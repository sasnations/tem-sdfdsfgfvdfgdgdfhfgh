import React from 'react';
import { BarChart3, PieChart, Activity, Download, Share2 } from 'lucide-react';

export function ProjectReporting() {
  const projectProgress = 75;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#333333] font-['Roboto']">Project Reporting</h1>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors flex items-center font-['Roboto'] font-medium">
                <Download className="w-4 h-4 mr-2" />
                Export
              </button>
              <button className="px-4 py-2 bg-white border border-[#4A90E2] text-[#4A90E2] rounded-lg hover:bg-[#F5F5F5] transition-colors flex items-center font-['Roboto'] font-medium">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Progress Overview */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-[#333333] mb-6 font-['Roboto']">Progress Overview</h2>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-[#4A90E2] bg-[#F5F5F5]">
                    Overall Progress
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-[#4A90E2]">
                    {projectProgress}%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-[#F5F5F5]">
                <div
                  style={{ width: `${projectProgress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#4A90E2] transition-all duration-500"
                ></div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#F5F5F5] p-4 rounded-lg">
                <div className="flex items-center">
                  <Activity className="w-5 h-5 text-[#4A90E2]" />
                  <span className="ml-2 font-medium text-[#333333]">Tasks Completed</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-[#333333]">24/32</p>
              </div>
              <div className="bg-[#F5F5F5] p-4 rounded-lg">
                <div className="flex items-center">
                  <BarChart3 className="w-5 h-5 text-[#FF6F61]" />
                  <span className="ml-2 font-medium text-[#333333]">Hours Spent</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-[#333333]">128</p>
              </div>
              <div className="bg-[#F5F5F5] p-4 rounded-lg">
                <div className="flex items-center">
                  <PieChart className="w-5 h-5 text-[#4A90E2]" />
                  <span className="ml-2 font-medium text-[#333333]">Milestones</span>
                </div>
                <p className="mt-2 text-2xl font-bold text-[#333333]">3/4</p>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-[#333333] mb-6 font-['Roboto']">Recent Activity</h2>
            <div className="space-y-4">
              {[
                { title: 'Task Completed', time: '2 hours ago', type: 'success' },
                { title: 'Milestone Reached', time: '5 hours ago', type: 'info' },
                { title: 'New Task Added', time: '1 day ago', type: 'warning' }
              ].map((activity, index) => (
                <div key={index} className="flex items-start">
                  <div className={`w-2 h-2 mt-2 rounded-full ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'info' ? 'bg-[#4A90E2]' : 'bg-[#FF6F61]'
                  }`}></div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-[#333333]">{activity.title}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-8 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 text-sm text-[#333333]">
            <a href="#" className="hover:text-[#4A90E2] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#4A90E2] transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
import React from 'react';
import { Import, Play, Download, ChevronRight } from 'lucide-react';

export function Job1() {
  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-[#333333] font-['Roboto']">Job Management</h1>
            <nav className="flex space-x-4">
              <button className="px-4 py-2 text-[#4A90E2] hover:text-[#333333] transition-colors">Dashboard</button>
              <button className="px-4 py-2 text-[#4A90E2] hover:text-[#333333] transition-colors">Projects</button>
              <button className="px-4 py-2 text-[#4A90E2] hover:text-[#333333] transition-colors">Settings</button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Import Job Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Import className="w-6 h-6 text-[#4A90E2]" />
              <h2 className="ml-2 text-xl font-bold text-[#333333] font-['Roboto']">Import Job</h2>
            </div>
            <p className="text-[#333333] mb-4 font-['Open_Sans']">Import your job configuration and settings.</p>
            <button className="w-full bg-[#4A90E2] text-white rounded-lg px-4 py-2 hover:bg-[#357ABD] transition-colors flex items-center justify-center">
              <span className="font-['Roboto'] font-medium">Import Now</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Install Dependencies Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Download className="w-6 h-6 text-[#4A90E2]" />
              <h2 className="ml-2 text-xl font-bold text-[#333333] font-['Roboto']">Install Dependencies</h2>
            </div>
            <p className="text-[#333333] mb-4 font-['Open_Sans']">Install required packages and dependencies.</p>
            <button className="w-full bg-[#4A90E2] text-white rounded-lg px-4 py-2 hover:bg-[#357ABD] transition-colors flex items-center justify-center">
              <span className="font-['Roboto'] font-medium">Install Now</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          {/* Start Job Card */}
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <Play className="w-6 h-6 text-[#4A90E2]" />
              <h2 className="ml-2 text-xl font-bold text-[#333333] font-['Roboto']">Start Job</h2>
            </div>
            <p className="text-[#333333] mb-4 font-['Open_Sans']">Begin job execution with your configuration.</p>
            <button className="w-full bg-[#FF6F61] text-white rounded-lg px-4 py-2 hover:bg-[#E85D4F] transition-colors flex items-center justify-center">
              <span className="font-['Roboto'] font-medium">Start Now</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </button>
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
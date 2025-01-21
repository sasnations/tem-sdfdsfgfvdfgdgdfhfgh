import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Shield, Clock, Globe, CheckCircle, ArrowRight, Lock, RefreshCw, Zap, AlertTriangle, Inbox, Search, Star, Users, Award, Gift, Heart, MessageCircle, Settings, Smartphone, Laptop, Server, Cloud, Share2, BookOpen, Target, Briefcase, ShoppingCart, Headphones, Send, BarChart, PieChart, TrendingUp, Layers, Database, Eye, Key, UserPlus, Infinity, Code, Ban, FileText, Download, Upload, Copy, Check, Bell, Calendar, Trash2, Archive, Flag, Filter, List, Grid, ChevronDown, ExternalLink, HelpCircle, Info, LifeBuoy, Map, Maximize2, Minimize2, Monitor, Network, Package, Percent, Phone, Printer, Radio, Save, Settings2, Shuffle, Sliders, Speaker, Tag, Terminal, ThumbsUp, PenTool as Tool, Trash, TrendingDown, Triangle, Tv, Type, Umbrella, Video, Volume2, Wifi, Wind, X, ZoomIn } from 'lucide-react';
import { PublicLayout } from '../components/PublicLayout';
import { CopyButton } from '../components/CopyButton';

export function TempMailAdvanced() {
  // State
  const [selectedDomain, setSelectedDomain] = useState('tempmail.pro');
  const [emailPrefix, setEmailPrefix] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [options, setOptions] = useState({
    notifications: false,
    autoForward: false,
    spamFilter: false,
    attachments: false
  });

  // Handlers
  const generateRandomPrefix = () => {
    const randomString = Math.random().toString(36).substring(7);
    setEmailPrefix(randomString);
  };

  const generateEmail = () => {
    setIsLoading(true);
    setTimeout(() => {
      const prefix = emailPrefix || Math.random().toString(36).substring(7);
      setGeneratedEmail(`${prefix}@${selectedDomain}`);
      setIsLoading(false);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }, 1000);
  };

  const handleOptionChange = (option: keyof typeof options) => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  return (
    <PublicLayout>
      {/* Advanced Email Generator Section */}
      <div className="bg-gradient-to-r from-[#4A90E2] to-[#357ABD] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Advanced Temporary Email Generator
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Generate secure, customizable temporary emails with advanced features
              and extended validity.
            </p>

            {/* Advanced Email Generator Interface */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg rounded-lg p-8 mb-8">
              <div className="space-y-6">
                {/* Custom Domain Selector */}
                <div className="flex flex-col space-y-2">
                  <label className="text-left text-sm font-medium text-white/90">
                    Select Domain
                  </label>
                  <select 
                    value={selectedDomain}
                    onChange={(e) => setSelectedDomain(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    <option value="tempmail.pro">tempmail.pro</option>
                    <option value="securetemp.com">securetemp.com</option>
                    <option value="privacymail.org">privacymail.org</option>
                  </select>
                </div>

                {/* Email Prefix Generator */}
                <div className="flex flex-col space-y-2">
                  <label className="text-left text-sm font-medium text-white/90">
                    Email Prefix
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={emailPrefix}
                      onChange={(e) => setEmailPrefix(e.target.value)}
                      placeholder="Enter custom prefix or generate random"
                      className="flex-1 px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                    <button 
                      onClick={generateRandomPrefix}
                      className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
                    >
                      <Shuffle className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Advanced Options */}
                <div className="flex flex-col space-y-2">
                  <label className="text-left text-sm font-medium text-white/90">
                    Advanced Options
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox"
                        checked={options.notifications}
                        onChange={() => handleOptionChange('notifications')}
                        className="rounded"
                      />
                      <span className="text-sm">Enable Notifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox"
                        checked={options.autoForward}
                        onChange={() => handleOptionChange('autoForward')}
                        className="rounded"
                      />
                      <span className="text-sm">Auto-forward</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox"
                        checked={options.spamFilter}
                        onChange={() => handleOptionChange('spamFilter')}
                        className="rounded"
                      />
                      <span className="text-sm">Spam Filter</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="checkbox"
                        checked={options.attachments}
                        onChange={() => handleOptionChange('attachments')}
                        className="rounded"
                      />
                      <span className="text-sm">Attachment Support</span>
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <button
                  onClick={generateEmail}
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-white text-[#4A90E2] rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-[#4A90E2] border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Zap className="w-5 h-5 mr-2" />
                      Generate Advanced Email
                    </>
                  )}
                </button>

                {/* Generated Email Display */}
                {generatedEmail && (
                  <div className="bg-white/20 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-medium">{generatedEmail}</span>
                      <CopyButton
                        text={generatedEmail}
                        className="text-white hover:text-white/80"
                      />
                    </div>
                    <div className="mt-2 flex items-center space-x-4 text-sm">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        Valid for 2 months
                      </span>
                      <span className="flex items-center">
                        <Shield className="w-4 h-4 mr-1" />
                        Protected
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Shield, label: "Enterprise Security" },
                { icon: Clock, label: "2+ Months Validity" },
                { icon: Globe, label: "Multiple Domains" },
                { icon: Lock, label: "Privacy Protected" }
              ].map((badge, index) => (
                <div key={index} className="flex items-center text-white/80">
                  <badge.icon className="w-5 h-5 mr-2" />
                  <span>{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {showNotification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" />
          Email generated successfully!
        </div>
      )}
    </PublicLayout>
  );
}
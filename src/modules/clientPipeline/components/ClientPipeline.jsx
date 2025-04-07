import React, { useState } from 'react';
import LeadCaptureTools from './LeadCaptureTools';
import ClientOnboarding from './ClientOnboarding';
import RetentionStrategies from './RetentionStrategies';

export default function ClientPipeline() {
  const [selectedTab, setSelectedTab] = useState('leads');
  
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Client Pipeline</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Attract and Retain Clients
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Set up systems to consistently attract, convert, and retain clients for your freelance business.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex justify-center space-x-8">
              <button
                className={`cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md ${
                  selectedTab === 'leads'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setSelectedTab('leads')}
              >
                Lead Capture
              </button>
              <button
                className={`cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md ${
                  selectedTab === 'onboarding'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setSelectedTab('onboarding')}
              >
                Client Onboarding
              </button>
              <button
                className={`cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md ${
                  selectedTab === 'retention'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setSelectedTab('retention')}
              >
                Retention Strategies
              </button>
            </nav>
          </div>
          
          {/* Tab content */}
          <div className="py-8">
            {selectedTab === 'leads' && <LeadCaptureTools />}
            {selectedTab === 'onboarding' && <ClientOnboarding />}
            {selectedTab === 'retention' && <RetentionStrategies />}
          </div>
        </div>
      </div>
    </div>
  );
}
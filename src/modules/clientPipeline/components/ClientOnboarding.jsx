import React from 'react';
import { DocumentTextIcon, ClipboardDocumentListIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function ClientOnboarding() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Onboarding</h3>
      
      <div className="prose prose-indigo max-w-none">
        <p>
          Create a professional and seamless experience for new clients with these onboarding tools and templates.
          A smooth onboarding process sets the foundation for successful client relationships.
        </p>
      </div>
      
      {/* Onboarding Process Diagram */}
      <div className="mt-10 relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-between">
          <div className="text-center">
            <span className="px-3 py-2 rounded-full text-sm font-semibold tracking-wide bg-indigo-100 text-indigo-600">
              Step 1
            </span>
            <div className="mt-3 bg-white px-2">
              <h4 className="text-sm font-medium text-gray-900">Welcome Packet</h4>
            </div>
          </div>
          <div className="text-center">
            <span className="px-3 py-2 rounded-full text-sm font-semibold tracking-wide bg-indigo-100 text-indigo-600">
              Step 2
            </span>
            <div className="mt-3 bg-white px-2">
              <h4 className="text-sm font-medium text-gray-900">Onboarding Forms</h4>
            </div>
          </div>
          <div className="text-center">
            <span className="px-3 py-2 rounded-full text-sm font-semibold tracking-wide bg-indigo-100 text-indigo-600">
              Step 3
            </span>
            <div className="mt-3 bg-white px-2">
              <h4 className="text-sm font-medium text-gray-900">Kickoff Meeting</h4>
            </div>
          </div>
          <div className="text-center">
            <span className="px-3 py-2 rounded-full text-sm font-semibold tracking-wide bg-indigo-100 text-indigo-600">
              Step 4
            </span>
            <div className="mt-3 bg-white px-2">
              <h4 className="text-sm font-medium text-gray-900">Project Setup</h4>
            </div>
          </div>
        </div>
      </div>
      
      {/* Onboarding Tools */}
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {/* Welcome Packet */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
              <DocumentTextIcon className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Welcome Packet</h4>
            <p className="text-sm text-gray-500 mb-4">
              Professional welcome documents that set expectations and provide important information for new clients.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>Company introduction</li>
              <li>Service overview</li>
              <li>Communication guidelines</li>
              <li>Important policies</li>
              <li>Next steps guide</li>
            </ul>
            <a
              href="#"
              className="block text-center w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 cursor-pointer"
            >
              Create Welcome Packet
            </a>
          </div>
        </div>
        
        {/* Client Forms */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
              <ClipboardDocumentListIcon className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Client Forms</h4>
            <p className="text-sm text-gray-500 mb-4">
              Essential forms to collect important information from new clients and streamline your workflow.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>Client questionnaires</li>
              <li>Service agreements</li>
              <li>Project briefs</li>
              <li>Brand questionnaires</li>
              <li>Payment authorization</li>
            </ul>
            <a
              href="#"
              className="block text-center w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 cursor-pointer"
            >
              Create Client Forms
            </a>
          </div>
        </div>
        
        {/* Kickoff Meeting */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
              <UserGroupIcon className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Kickoff Meeting</h4>
            <p className="text-sm text-gray-500 mb-4">
              Templates and guidelines for conducting professional kickoff meetings that set projects up for success.
            </p>
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>Meeting agenda templates</li>
              <li>Discovery questions</li>
              <li>Goal setting frameworks</li>
              <li>Timeline development</li>
              <li>Meeting follow-up templates</li>
            </ul>
            <a
              href="#"
              className="block text-center w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 cursor-pointer"
            >
              Create Meeting Templates
            </a>
          </div>
        </div>
      </div>
      
      {/* Best Practices */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Client Onboarding Best Practices</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Do's</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>Set clear expectations about deliverables, timeline, and communication</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>Create a consistent, repeatable process for all new clients</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>Collect all necessary information upfront to avoid delays</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>Provide clear next steps and action items after each stage</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 font-bold mr-2">✓</span>
                <span>Add personal touches to make new clients feel valued</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-3">Don'ts</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✗</span>
                <span>Overwhelm clients with too much information at once</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✗</span>
                <span>Skip important contract or scope discussions</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✗</span>
                <span>Delay responses during the critical first weeks</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✗</span>
                <span>Make assumptions about client needs or expectations</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 font-bold mr-2">✗</span>
                <span>Start work without clear scope and payment agreements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

export default function LeadCaptureTools() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Lead Capture Tools</h3>
      
      <div className="prose prose-indigo max-w-none">
        <p>
          Attract and capture potential client information with these professional lead generation tools. 
          Each tool is designed to help you build your email list, showcase your expertise, and convert visitors into clients.
        </p>
      </div>
      
      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Lead Magnet Tool */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Lead Magnets</h4>
            <p className="text-sm text-gray-500 mb-4">
              Create valuable free resources that visitors can download in exchange for their email address.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">PDF guides and checklists</span>
              </li>
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Email course templates</span>
              </li>
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Free consultation offer</span>
              </li>
            </ul>
            <a
              href="#"
              className="block text-center w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 cursor-pointer"
            >
              Create Lead Magnet
            </a>
          </div>
        </div>
        
        {/* Contact Forms */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Forms</h4>
            <p className="text-sm text-gray-500 mb-4">
              Professional contact forms that convert visitors into leads with strategic fields and follow-up.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Service inquiry forms</span>
              </li>
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Quote request templates</span>
              </li>
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Automated responses</span>
              </li>
            </ul>
            <a
              href="#"
              className="block text-center w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 cursor-pointer"
            >
              Create Contact Form
            </a>
          </div>
        </div>
        
        {/* Email Opt-In */}
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Email Opt-In</h4>
            <p className="text-sm text-gray-500 mb-4">
              Email signup forms and pop-ups that capture leads and build your mailing list.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Newsletter signup forms</span>
              </li>
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Timed pop-up templates</span>
              </li>
              <li className="flex">
                <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2" />
                <span className="text-sm text-gray-600">Welcome email sequences</span>
              </li>
            </ul>
            <a
              href="#"
              className="block text-center w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 cursor-pointer"
            >
              Create Email Opt-In
            </a>
          </div>
        </div>
      </div>
      
      {/* Lead Generation Strategy */}
      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Lead Generation Strategy</h3>
        <p className="text-gray-600 mb-6">
          Follow these steps to create an effective lead generation system for your freelance business:
        </p>
        
        <ol className="space-y-6">
          <li className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white">
                1
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Identify Your Ideal Client</h4>
              <p className="mt-1 text-gray-600">
                Create detailed profiles of your ideal clients to target your lead generation efforts effectively.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white">
                2
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Create Valuable Lead Magnets</h4>
              <p className="mt-1 text-gray-600">
                Develop free resources that solve specific problems for your ideal clients and showcase your expertise.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white">
                3
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Implement Lead Capture Forms</h4>
              <p className="mt-1 text-gray-600">
                Place strategic opt-in forms on your website to collect contact information from interested visitors.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white">
                4
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Set Up Follow-Up Sequences</h4>
              <p className="mt-1 text-gray-600">
                Create automated email sequences that nurture leads and guide them toward becoming clients.
              </p>
            </div>
          </li>
          
          <li className="flex">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-8 w-8 rounded-full bg-indigo-600 text-white">
                5
              </div>
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-medium text-gray-900">Track and Optimize</h4>
              <p className="mt-1 text-gray-600">
                Monitor your lead generation metrics and continuously refine your approach for better results.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}
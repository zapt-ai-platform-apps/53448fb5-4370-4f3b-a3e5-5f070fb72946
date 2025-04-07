import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon } from '@heroicons/react/24/outline';
import { websiteTemplates } from '../data/websiteTemplates';

export default function WebsiteBuilder() {
  const [selectedNiche, setSelectedNiche] = useState('all');
  
  const filteredTemplates = selectedNiche === 'all' 
    ? websiteTemplates
    : websiteTemplates.filter(template => template.niches.includes(selectedNiche));
  
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Website Builder</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Build Your Professional Website
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Create a website that attracts clients and showcases your services with our easy-to-use templates.
          </p>
        </div>
        
        {/* Filter by niche */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex shadow-sm rounded-md">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                selectedNiche === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 cursor-pointer`}
              onClick={() => setSelectedNiche('all')}
            >
              All Templates
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                selectedNiche === 'virtual-assistant'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-gray-300 cursor-pointer`}
              onClick={() => setSelectedNiche('virtual-assistant')}
            >
              Virtual Assistant
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                selectedNiche === 'dog-groomer'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-gray-300 cursor-pointer`}
              onClick={() => setSelectedNiche('dog-groomer')}
            >
              Dog Groomer
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                selectedNiche === 'travel-agent'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300 cursor-pointer`}
              onClick={() => setSelectedNiche('travel-agent')}
            >
              Travel Agent
            </button>
          </div>
        </div>
        
        {/* Templates grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTemplates.map((template) => (
            <div key={template.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={template.imageUrl} alt={template.name} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">{template.name}</p>
                  <p className="mt-3 text-base text-gray-500">{template.description}</p>
                </div>
                <div className="mt-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                        {template.category}
                      </span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-500">
                        {template.pages} pages
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <a
                      href="#"
                      className="block text-center w-full bg-indigo-600 border border-transparent rounded-md py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 cursor-pointer"
                    >
                      Preview Template
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Features section */}
        <div className="mt-20">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center">
            Features Included in All Templates
          </h2>
          
          <div className="mt-8 grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Mobile responsive design',
              'Contact forms',
              'Service pages',
              'Pricing tables',
              'Testimonial sections',
              'Portfolio/gallery',
              'About page',
              'Social media integration',
              'Blog functionality'
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckIcon className="h-6 w-6 text-green-500" />
                </div>
                <p className="ml-3 text-base text-gray-500">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            Ready to create your professional website?
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 cursor-pointer"
              >
                Start Building Now
              </a>
            </div>
            <div className="ml-3 inline-flex">
              <Link
                to="/niches"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 cursor-pointer"
              >
                Explore Business Templates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { api as templatesApi } from '../api';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';

export default function BusinessTemplate() {
  const { nicheId } = useParams();
  const [niche, setNiche] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the niche data based on the ID from the URL using the templates module API
    setLoading(true);
    const selectedNiche = templatesApi.getNicheById(nicheId);
    
    setNiche(selectedNiche);
    setLoading(false);
    
    // Notify other modules that this template was viewed
    if (selectedNiche) {
      eventBus.publish(events.TEMPLATE_VIEWED, {
        nicheId: selectedNiche.id,
        nicheName: selectedNiche.name,
        timestamp: new Date()
      });
    }
  }, [nicheId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!niche) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900">Niche not found</h2>
        <p className="mt-2 text-gray-600">The requested niche could not be found.</p>
        <Link
          to="/niches"
          className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 cursor-pointer"
        >
          Back to niches
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center">
          <Link 
            to="/niches" 
            className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
          >
            ← Back to niches
          </Link>
        </div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {niche.name} Business Template
            </h1>
            <p className="mt-3 text-lg text-gray-500">
              Everything you need to start and grow your {niche.name.toLowerCase()} business. 
              Get access to business templates, website designs, marketing strategies, and more.
            </p>
            
            <div className="mt-8 overflow-hidden rounded-lg">
              <img
                className="w-full h-auto object-cover rounded-lg shadow-lg"
                src={niche.imageUrl}
                alt={niche.name}
              />
            </div>
          </div>
          
          <div className="mt-12 lg:mt-0">
            <div className="bg-gray-50 rounded-lg shadow px-5 py-6 sm:px-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">What's Included</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Core Business Services</h3>
                  <ul className="mt-3 space-y-3">
                    {niche.businessServices.map((service, index) => (
                      <li key={index} className="flex">
                        <ChevronRightIcon className="h-5 w-5 text-indigo-500 flex-shrink-0 mr-2" />
                        <span className="text-gray-600">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Target Client Profiles</h3>
                  <ul className="mt-3 space-y-3">
                    {niche.targetClients.map((client, index) => (
                      <li key={index} className="flex">
                        <ChevronRightIcon className="h-5 w-5 text-indigo-500 flex-shrink-0 mr-2" />
                        <span className="text-gray-600">{client}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Marketing Strategies</h3>
                  <ul className="mt-3 space-y-3">
                    {niche.marketingStrategies.map((strategy, index) => (
                      <li key={index} className="flex">
                        <ChevronRightIcon className="h-5 w-5 text-indigo-500 flex-shrink-0 mr-2" />
                        <span className="text-gray-600">{strategy}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 space-y-4">
                <Link
                  to="/website-builder"
                  className="block w-full bg-indigo-600 border border-transparent rounded-md py-3 px-5 text-center text-base font-medium text-white hover:bg-indigo-700 cursor-pointer"
                >
                  Build Your Website
                </Link>
                
                <Link
                  to="/branding"
                  className="block w-full bg-white border border-gray-300 rounded-md py-3 px-5 text-center text-base font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Create Your Brand
                </Link>
                
                <Link
                  to="/client-pipeline"
                  className="block w-full bg-white border border-gray-300 rounded-md py-3 px-5 text-center text-base font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
                >
                  Set Up Client Pipeline
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
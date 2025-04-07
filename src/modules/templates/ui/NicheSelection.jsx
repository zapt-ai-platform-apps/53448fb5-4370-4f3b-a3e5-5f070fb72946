import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api as templatesApi } from '../api';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';

export default function NicheSelection() {
  const [niches, setNiches] = useState([]);
  
  useEffect(() => {
    // Get niche data from the templates module API
    const nicheData = templatesApi.getAllNiches();
    setNiches(nicheData);
  }, []);
  
  // Handler for when a niche is selected
  const handleNicheSelect = (niche) => {
    // Publish event for other modules to respond to
    eventBus.publish(events.NICHE_SELECTED, {
      nicheId: niche.id,
      nicheName: niche.name,
      timestamp: new Date()
    });
  };
  
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Business Templates</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Choose Your Freelance Niche
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Select your specific freelance niche to get tailored business templates, branding, and client acquisition strategies.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {niches.map((niche) => (
            <Link 
              key={niche.id}
              to={`/templates/${niche.id}`}
              className="relative flex flex-col rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform transition hover:-translate-y-1 cursor-pointer"
              onClick={() => handleNicheSelect(niche)}
            >
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={niche.imageUrl} alt={niche.name} />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-gray-900">{niche.name}</p>
                  <p className="mt-3 text-base text-gray-500">{niche.description}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="ml-auto flex space-x-1 text-sm text-gray-500">
                    <span>{niche.templates} templates</span>
                    <span aria-hidden="true">&middot;</span>
                    <span>{niche.resources} resources</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
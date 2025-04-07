import React from 'react';

const resources = [
  {
    title: 'Getting Started Guide',
    description: 'Learn how to use Business in a Box to quickly set up your freelance business.',
    link: '#',
    type: 'Guide'
  },
  {
    title: 'Finding Your First Clients',
    description: 'Strategies for landing your first clients in any freelance niche.',
    link: '#',
    type: 'Article'
  },
  {
    title: 'Pricing Your Freelance Services',
    description: 'How to price your services competitively while ensuring profitability.',
    link: '#',
    type: 'Guide'
  },
  {
    title: 'Effective Client Communication',
    description: 'Templates and scripts for clear, professional client communication.',
    link: '#',
    type: 'Templates'
  },
  {
    title: 'Legal Essentials for Freelancers',
    description: 'Contract templates and legal requirements for freelance businesses.',
    link: '#',
    type: 'Templates'
  },
  {
    title: 'Tax Planning for Freelancers',
    description: 'Understanding your tax obligations and optimizing your finances.',
    link: '#',
    type: 'Guide'
  }
];

export default function Resources() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Resources</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Freelance Business Resources
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Guides, templates, and resources to help you start and grow your freelance business.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
            <div key={index} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    {resource.type}
                  </p>
                  <a href={resource.link} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">{resource.title}</p>
                    <p className="mt-3 text-base text-gray-500">{resource.description}</p>
                  </a>
                </div>
                <div className="mt-6">
                  <a 
                    href={resource.link} 
                    className="text-base font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                  >
                    Read more →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
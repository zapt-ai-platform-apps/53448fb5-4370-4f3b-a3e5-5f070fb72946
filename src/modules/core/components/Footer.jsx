import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img
              src="https://supabase.zapt.ai/storage/v1/render/image/public/icons/c7bd5333-787f-461f-ae9b-22acbc0ed4b0/55145115-0624-472f-96b9-d5d88aae355f.png?width=64&height=64"
              alt="Business in a Box Logo"
              className="h-10 w-auto"
            />
            <p className="mt-2 text-sm text-gray-500">
              Everything you need to launch your freelance business successfully.
            </p>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Features
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/niches" className="text-base text-gray-500 hover:text-gray-900">
                    Business Templates
                  </Link>
                </li>
                <li>
                  <Link to="/website-builder" className="text-base text-gray-500 hover:text-gray-900">
                    Website Builder
                  </Link>
                </li>
                <li>
                  <Link to="/branding" className="text-base text-gray-500 hover:text-gray-900">
                    Branding Tools
                  </Link>
                </li>
                <li>
                  <Link to="/client-pipeline" className="text-base text-gray-500 hover:text-gray-900">
                    Client Pipeline
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Support
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <Link to="/resources" className="text-base text-gray-500 hover:text-gray-900">
                    Resources
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
                Legal
              </h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-base text-gray-500 hover:text-gray-900">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} Business in a Box. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
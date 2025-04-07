import React, { useState, useEffect } from 'react';
import LogoGenerator from './LogoGenerator';
import ColorPaletteSelector from './ColorPaletteSelector';
import FontPairingSelector from './FontPairingSelector';
import { api as brandingApi } from '../api';

export default function BrandingTools() {
  const [selectedTab, setSelectedTab] = useState('logos');
  const [colorPalettes, setColorPalettes] = useState([]);
  const [fontPairings, setFontPairings] = useState([]);
  
  useEffect(() => {
    // Get data from the branding module API
    setColorPalettes(brandingApi.getColorPalettes());
    setFontPairings(brandingApi.getFontPairings());
  }, []);
  
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Branding Tools</h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Create Your Professional Brand
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Develop a consistent, memorable brand with our comprehensive branding tools for freelancers.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex justify-center space-x-8">
              <button
                className={`cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md ${
                  selectedTab === 'logos'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setSelectedTab('logos')}
              >
                Logo Generator
              </button>
              <button
                className={`cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md ${
                  selectedTab === 'colors'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setSelectedTab('colors')}
              >
                Color Palettes
              </button>
              <button
                className={`cursor-pointer whitespace-nowrap py-4 px-1 border-b-2 font-medium text-md ${
                  selectedTab === 'fonts'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
                onClick={() => setSelectedTab('fonts')}
              >
                Typography
              </button>
            </nav>
          </div>
          
          {/* Tab content */}
          <div className="py-8">
            {selectedTab === 'logos' && <LogoGenerator />}
            {selectedTab === 'colors' && <ColorPaletteSelector palettes={colorPalettes} />}
            {selectedTab === 'fonts' && <FontPairingSelector pairings={fontPairings} />}
          </div>
        </div>
        
        {/* Branding Tips */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Branding Tips for Freelancers</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Consistency is Key</h4>
              <p className="text-gray-600">
                Use your brand colors, fonts, and logo consistently across your website, social media, 
                business cards, and all client communications. Consistency builds recognition and trust.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Keep it Simple</h4>
              <p className="text-gray-600">
                A simple, clean brand is more memorable and professional. Avoid using too many colors, 
                fonts, or complex design elements that can confuse your audience.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Consider Your Niche</h4>
              <p className="text-gray-600">
                Your brand should reflect the expectations of your industry. A graphic designer needs 
                a different brand feel than a virtual assistant or dog groomer.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Think Long-Term</h4>
              <p className="text-gray-600">
                Choose brand elements that will stand the test of time, not just follow current trends. 
                Your brand should remain relevant and professional for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
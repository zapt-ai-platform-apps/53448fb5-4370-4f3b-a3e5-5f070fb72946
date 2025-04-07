import React, { useState } from 'react';
import { eventBus } from '@/modules/core/events';
import { events } from '../events';

export default function FontPairingSelector({ pairings }) {
  const [selectedPairing, setSelectedPairing] = useState(null);
  
  // Handler for selecting a font pairing
  const handleSelectPairing = (pairing) => {
    setSelectedPairing(pairing);
    
    // Publish event for other modules to respond to
    eventBus.publish(events.FONT_PAIRING_SELECTED, pairing);
  };
  
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Font Pairings</h3>
      <p className="text-gray-600 mb-8">
        Choose the perfect font combination for your brand. Each pairing includes a header font and a body text font that work well together.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pairings.map((pairing) => (
          <div
            key={pairing.id}
            className={`border-2 rounded-lg p-6 cursor-pointer hover:shadow-md transition-shadow ${
              selectedPairing?.id === pairing.id ? 'border-indigo-500' : 'border-gray-200'
            }`}
            onClick={() => handleSelectPairing(pairing)}
          >
            <h4 className="text-xl font-semibold text-gray-900 mb-2" style={{ fontFamily: pairing.headingFont }}>
              {pairing.name}
            </h4>
            <p className="text-gray-600 mb-4" style={{ fontFamily: pairing.bodyFont }}>
              {pairing.description}
            </p>
            <div className="text-sm text-gray-500">
              <p>Heading: <span className="font-medium">{pairing.headingFont}</span></p>
              <p>Body: <span className="font-medium">{pairing.bodyFont}</span></p>
            </div>
          </div>
        ))}
      </div>
      
      {selectedPairing && (
        <div className="mt-10 border rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Selected Font Pairing: {selectedPairing.name}
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-md font-medium text-gray-900 mb-3">Preview</h5>
                <div className="p-6 bg-gray-50 rounded-md">
                  <h1 
                    className="text-3xl font-bold text-gray-900 mb-4" 
                    style={{ fontFamily: selectedPairing.headingFont }}
                  >
                    Your Business Name
                  </h1>
                  <h2 
                    className="text-xl font-semibold text-gray-700 mb-4" 
                    style={{ fontFamily: selectedPairing.headingFont }}
                  >
                    Professional Services
                  </h2>
                  <p 
                    className="text-base text-gray-600" 
                    style={{ fontFamily: selectedPairing.bodyFont }}
                  >
                    This is how your body text will appear on your website and marketing materials. 
                    A good font pairing ensures readability while maintaining a consistent brand look.
                  </p>
                </div>
              </div>
              
              <div>
                <h5 className="text-md font-medium text-gray-900 mb-3">Typography Guidelines</h5>
                <div className="space-y-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">Heading Font</p>
                    <p>{selectedPairing.headingFont}</p>
                    <p className="mt-1 text-xs text-gray-500">Use for main headings, page titles, and important sections</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Body Font</p>
                    <p>{selectedPairing.bodyFont}</p>
                    <p className="mt-1 text-xs text-gray-500">Use for paragraphs, descriptions, and general content</p>
                  </div>
                  
                  <div>
                    <p className="font-medium">Suggested Sizes</p>
                    <ul className="mt-1 space-y-1 list-disc pl-5">
                      <li>Main Headings: 32-40px</li>
                      <li>Subheadings: 20-24px</li>
                      <li>Body Text: 16-18px</li>
                      <li>Caption/Small Text: 12-14px</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    Use This Pairing
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    See Web Font Links
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
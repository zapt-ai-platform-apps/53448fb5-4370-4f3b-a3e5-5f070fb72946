import React, { useState } from 'react';
import { logoTemplates } from '../data/logoTemplates';

export default function LogoGenerator() {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [generatedLogo, setGeneratedLogo] = useState(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!businessName || !businessType || !selectedTemplate) {
      return;
    }
    
    // In a real app, this would call an API to generate a custom logo
    // For now, we'll just simulate a logo generation
    setTimeout(() => {
      setGeneratedLogo({
        ...selectedTemplate,
        name: businessName,
        type: businessType
      });
    }, 1000);
  };
  
  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Logo Generator</h3>
        
        <div className="mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="business-name" className="block text-sm font-medium text-gray-700">
                Business Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="business-name"
                  id="business-name"
                  className="box-border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="Enter your business name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="business-type" className="block text-sm font-medium text-gray-700">
                Business Type
              </label>
              <div className="mt-1">
                <select
                  id="business-type"
                  name="business-type"
                  className="box-border shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  value={businessType}
                  onChange={(e) => setBusinessType(e.target.value)}
                >
                  <option value="">Select your business type</option>
                  <option value="Virtual Assistant">Virtual Assistant</option>
                  <option value="Dog Groomer">Dog Groomer</option>
                  <option value="Travel Agent">Travel Agent</option>
                  <option value="Copywriter">Copywriter</option>
                  <option value="Personal Trainer">Personal Trainer</option>
                  <option value="Web Developer">Web Developer</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Select a Logo Style
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {logoTemplates.map((template) => (
                  <div 
                    key={template.id}
                    className={`relative border-2 rounded-md overflow-hidden cursor-pointer ${
                      selectedTemplate?.id === template.id 
                        ? 'border-indigo-500' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTemplate(template)}
                  >
                    <img 
                      src={template.imageUrl} 
                      alt={template.name} 
                      className="w-full h-24 object-cover"
                    />
                    <div className="p-2 text-center text-sm text-gray-600">{template.name}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                disabled={!businessName || !businessType || !selectedTemplate}
              >
                Generate Logo
              </button>
            </div>
          </form>
        </div>
        
        {generatedLogo && (
          <div className="mt-8 border rounded-lg overflow-hidden shadow-lg">
            <div className="p-6 bg-white">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Your Generated Logo</h4>
              <div className="bg-gray-50 p-8 rounded-md flex justify-center">
                <div className="w-64 h-64 flex items-center justify-center">
                  <img 
                    src={generatedLogo.imageUrl} 
                    alt="Generated Logo" 
                    className="max-w-full max-h-full"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-xl font-medium text-gray-900">{generatedLogo.name}</p>
                <p className="text-sm text-gray-500">{generatedLogo.type}</p>
              </div>
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                >
                  Download Logo
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                >
                  Customize Further
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
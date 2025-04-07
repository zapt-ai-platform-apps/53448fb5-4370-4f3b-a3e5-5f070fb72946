import React, { useState } from 'react';

export default function ColorPaletteSelector({ palettes }) {
  const [selectedPalette, setSelectedPalette] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const filteredPalettes = selectedCategory === 'all'
    ? palettes
    : palettes.filter(palette => palette.category === selectedCategory);
  
  return (
    <div>
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Color Palettes</h3>
      
      {/* Filter buttons */}
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md ${
            selectedCategory === 'all'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
          } cursor-pointer`}
          onClick={() => setSelectedCategory('all')}
        >
          All Palettes
        </button>
        {['Professional', 'Creative', 'Friendly', 'Elegant', 'Bold'].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
            } cursor-pointer`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Color palettes grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPalettes.map((palette) => (
          <div
            key={palette.id}
            className={`border-2 rounded-lg overflow-hidden cursor-pointer transition-shadow hover:shadow-md ${
              selectedPalette?.id === palette.id ? 'border-indigo-500' : 'border-gray-200'
            }`}
            onClick={() => setSelectedPalette(palette)}
          >
            <div className="p-4">
              <h4 className="font-medium text-gray-900">{palette.name}</h4>
              <p className="text-sm text-gray-500">{palette.category}</p>
            </div>
            <div className="flex h-24">
              {palette.colors.map((color, index) => (
                <div
                  key={index}
                  className="flex-1"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Selected palette display */}
      {selectedPalette && (
        <div className="mt-10 border rounded-lg overflow-hidden shadow-lg">
          <div className="p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Selected Color Palette: {selectedPalette.name}</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex h-24 rounded-md overflow-hidden shadow">
                  {selectedPalette.colors.map((color, index) => (
                    <div
                      key={index}
                      className="flex-1"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {selectedPalette.colors.map((color, index) => (
                    <div key={index} className="text-center">
                      <div
                        className="h-12 w-full rounded-md shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                      <p className="mt-1 text-xs text-gray-500">{color}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h5 className="text-md font-medium text-gray-900 mb-3">Usage Guidelines</h5>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Primary Color: <span style={{ color: selectedPalette.colors[0] }}>{selectedPalette.colors[0]}</span></li>
                  <li>Secondary Color: <span style={{ color: selectedPalette.colors[1] }}>{selectedPalette.colors[1]}</span></li>
                  <li>Accent Color: <span style={{ color: selectedPalette.colors[2] }}>{selectedPalette.colors[2]}</span></li>
                  <li>Background Color: <span style={{ color: selectedPalette.colors[3] }}>{selectedPalette.colors[3]}</span></li>
                  <li>Text Color: <span style={{ color: selectedPalette.colors[4] }}>{selectedPalette.colors[4]}</span></li>
                </ul>
                
                <div className="mt-4 flex space-x-2">
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    Use This Palette
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
                  >
                    Download Palette
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
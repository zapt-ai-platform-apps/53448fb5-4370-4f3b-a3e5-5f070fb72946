import React from 'react';
import { Link } from 'react-router-dom';
import { 
  DocumentTextIcon, 
  GlobeAltIcon, 
  PaintBrushIcon, 
  UsersIcon 
} from '@heroicons/react/24/outline';

const iconMap = {
  'document-text': DocumentTextIcon,
  'globe-alt': GlobeAltIcon,
  'paint-brush': PaintBrushIcon,
  'users': UsersIcon,
};

export default function FeatureCard({ feature }) {
  const Icon = iconMap[feature.icon];
  
  return (
    <Link to={feature.link} className="block group hover:bg-gray-50 rounded-lg p-6 transition-colors">
      <div className="flex flex-col items-center text-center">
        <div>
          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white group-hover:bg-indigo-600 transition-colors">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
            {feature.title}
          </h3>
          <p className="mt-2 text-base text-gray-500">
            {feature.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
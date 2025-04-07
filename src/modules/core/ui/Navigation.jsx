import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'Business Templates', to: '/niches' },
  { name: 'Website Builder', to: '/website-builder' },
  { name: 'Branding Tools', to: '/branding' },
  { name: 'Client Pipeline', to: '/client-pipeline' },
  { name: 'Resources', to: '/resources' },
];

export default function Navigation({ mobile = false, closeMobileMenu = () => {} }) {
  return (
    <nav className={clsx(mobile ? 'flex flex-col space-y-2' : 'flex space-x-6')}>
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          onClick={mobile ? closeMobileMenu : undefined}
          className={({ isActive }) =>
            clsx(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              mobile ? 'block' : 'inline-block',
              isActive
                ? 'bg-indigo-50 text-indigo-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            )
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}
import React from 'react';

export const Logo = () => (
  <div className="flex items-center space-x-2">
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 5C17.088 5 5 17.088 5 32C5 46.912 17.088 59 32 59C46.912 59 59 46.912 59 32C59 17.088 46.912 5 32 5Z" fill="#87CEEB"/>
        <path d="M32 13C22.612 13 15 20.612 15 30C15 34.028 16.58 37.668 19 40.344V49L27.438 43.812C28.916 44.136 30.444 44.312 32 44.312C41.388 44.312 49 36.7 49 27.312C49 17.924 41.388 13 32 13Z" fill="white" fillOpacity="0.8"/>
    </svg>
    <span className="font-bold text-xl text-gray-800">Open Revolution</span>
  </div>
);

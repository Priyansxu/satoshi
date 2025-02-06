import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Earn() {
  return (
    <div className="p-4 flex justify-center items-center">
      <div className="w-full max-w-md backdrop-blur-lg bg-[#AB9FF1] bg-opacity-70 overflow-hidden outline-dashed outline-2 outline-offset-2 outline-[#AB9FF1]/60 rounded-2xl">
        <div className="p-8">
          <h1 className="text-4xl font-bold font-mono text-white mb-8">Earn Bitcoin</h1>
          
          <div className="mb-6 bg-white bg-opacity-10 p-6 rounded-lg font-mono">
            <p className="text-white text-sm mb-6">
              Start earning Bitcoin rewards for every spin with The Bitcoin App
            </p>
            
            <a 
              href="https://bitcoinapp.page.link/wcDmEAdEVP8eWaHS9"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-white bg-opacity-15 hover:bg-opacity-30 text-white font-sans p-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
            >
              <span className="font-bold">Join with my invite link</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

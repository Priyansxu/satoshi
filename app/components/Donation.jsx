"use client";

import { useState } from "react";
import { Copy } from "lucide-react";

const SpeedLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="w-6 h-6" fill="#ffffff">
    <path d="M192 177.3c0-.4-9.4-10.2-21-21.8l-21-21 21.8.3 21.7.3-36.5-36.6-36.5-36.5H84l-36.5 36.5 21.5 21.5 21.5 21.5h-21.5-21.5l36.5 36.5 36.5 36.5h35.7c19.7 0 35.8-.3 35.8-.7z" />
  </svg>
);

const ZBDLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" className="w-6 h-6" fill="#ffffff">
    <path d="M290.5 68c3.4-7.2 4.3-8.1 12.5-12.4l6.3-3.4-6-3c-6.7-3.4-10.9-7.7-13.7-14-1-2.3-2.3-4.2-2.7-4.2-.5 0-2.1 2.4-3.5 5.3-3.5 7-4.8 8.2-12.1 12.4-3.5 1.9-6.3 3.6-6.3 3.8 0 .2 2.4 1.6 5.3 3 6.7 3.4 9.5 6.2 13.2 13 1.7 3 3.3 5.5 3.6 5.5.3 0 1.8-2.7 3.4-6zM340 11c3.9-6 9.9-11.2 16.4-14.1l4.8-2.1-4.9-2.3c-9.9-4.6-16.8-12.7-20.6-24.5l-2.3-7.2-2.4 6.3c-5 13.7-11.9 21-24.5 25.9l-3 1.2 5.2 1.9c10.6 4 19.1 15.1 22.3 28.8l1.3 5.4 2.2-7.2c1.3-3.9 3.7-9.4 5.5-12.1z" />
  </svg>
);

export default function Donation() {
  const [copiedAddress, setCopiedAddress] = useState(null);

  const copyToClipboard = (text, addressType) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedAddress(addressType);
      setTimeout(() => setCopiedAddress(null), 2000);
    });
  };

  return (
    <div className="p-4 flex justify-center items-center">
      <div className="w-full max-w-md backdrop-blur-lg bg-[#AB9FF1] bg-opacity-70 overflow-hidden outline-dashed outline-2 outline-offset-2 outline-[#AB9FF1]/60 rounded-2xl">
        <div className="p-8">
          <h1 className="text-4xl font-bold font-mono text-white mb-8">Donate LNBTC or BTC to the developer</h1>
          <div className="space-y-6">
            <div className="relative">
              <div className="flex items-center space-x-4 mb-2">
                <SpeedLogo />
                <span className="text-white font-mono">Speed</span>
              </div>
              <input
                type="text"
                value="priyansxu@speed.app"
                readOnly
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200"
              />
              <button
                onClick={() => copyToClipboard("priyansxu@speed.app", "speed")}
                className="absolute right-3 top-3 text-white opacity-50 hover:opacity-100 transition duration-200"
              >
                <Copy size={20} />
              </button>
            </div>
            <div className="relative">
              <div className="flex items-center space-x-4 mb-2">
                <ZBDLogo />
                <span className="text-white font-mono">ZBD</span>
              </div>
              <input
                type="text"
                value="priyansxu@zbd.gg"
                readOnly
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200"
              />
              <button
                onClick={() => copyToClipboard("priyansxu@zbd.gg", "zbd")}
                className="absolute right-3 top-3 text-white opacity-50 hover:opacity-100 transition duration-200"
              >
                <Copy size={20} />
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold font-mono text-white mb-4">Bitcoin Address</h2>
            <div className="relative">
              <input
                type="text"
                value="1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
                readOnly
                className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition duration-200 font-mono"
              />
              <button
                onClick={() => copyToClipboard("1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2", "btc")}
                className="absolute right-3 top-3 text-white opacity-50 hover:opacity-100 transition duration-200"
              >
                <Copy size={20} />
              </button>
            </div>
          </div>
          {copiedAddress && (
            <div className="mt-4 text-white text-center bg-white bg-opacity-20 py-2 rounded-lg">
              Copied {copiedAddress} address!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

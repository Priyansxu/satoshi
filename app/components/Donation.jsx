import React, { useState } from 'react';
import { Copy, Bitcoin } from 'lucide-react';

export default function DonationComponent() {
  const [copiedSpeed, setCopiedSpeed] = useState(false);
  const [copiedZbd, setCopiedZbd] = useState(false);
  const [copiedBitcoin, setCopiedBitcoin] = useState(false);

  const speedWallet = 'priyansxu@speed.app';
  const bitcoinAddress = 'bc1qgzxc7u9eja6zse5nqzg43c8rx2j8ylp8e78xhr';

  const handleCopy = (type) => {
    let addressToCopy = '';
    let setCopiedFunction = null;

    switch(type) {
      case 'speed':
        addressToCopy = speedWallet;
        setCopiedFunction = setCopiedSpeed;
        break;
      case 'bitcoin':
        addressToCopy = bitcoinAddress;
        setCopiedFunction = setCopiedBitcoin;
        break;
    }

    navigator.clipboard.writeText(addressToCopy);
    setCopiedFunction(true);
    setTimeout(() => setCopiedFunction(false), 2000);
  };

  const WalletAddressBlock = ({ address, copiedState, type }) => (
    <div className="mb-4 relative">
      <div className="w-full px-4 py-3 rounded-lg bg-[#ab9ff1]/20 text-white flex items-center justify-between backdrop-blur-md overflow-x-auto">
        <span className="font-mono text-sm text-[#ab9ff1] break-all">{address}</span>
        <button 
          onClick={() => handleCopy(type)}
          className="focus:outline-none"
        >
          <Copy 
            className="opacity-50 hover:opacity-100 transition-opacity" 
            color="#ab9ff1" 
            size={20} 
          />
        </button>
      </div>
      {copiedState && (
        <div className="absolute inset-x-0 bottom-[-25px] text-center">
          <span 
            className="text-xs px-2 py-1 rounded-full text-[#ab9ff1] bg-[#ab9ff1]/20"
          >
            Copied!
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4 flex justify-center items-center">
      <div className="w-full max-w-md backdrop-blur-lg overflow-hidden outline-dashed outline-2 outline-offset-2 rounded-2xl space-y-4 bg-[#f4f2ff] border-[#ab9ff1] outline-[#ab9ff1]/60">
        <div className="p-8 pb-0">
          <h1 className="text-4xl font-bold font-mono mb-8 text-left text-[#ab9ff1]">
            Donate Bitcoin
          </h1>

          <div className="rounded-2xl p-4 bg-[#ab9ff1]/10 border border-[#ab9ff1]/30">
            <h2 className="text-lg font-semibold mb-4 text-center text-[#ab9ff1]">
              Lightning Address
            </h2>
            <WalletAddressBlock 
              address={speedWallet} 
              copiedState={copiedSpeed} 
              type="speed"
            />
          </div>

          <div className="p-8 pt-4">
            <div className="mb-4 text-center text-[#ab9ff1]">
              <h2 className="text-2xl font-bold tracking-wider uppercase">
                Mainnet
              </h2>
            </div>
            <WalletAddressBlock 
              address={bitcoinAddress} 
              copiedState={copiedBitcoin} 
              type="bitcoin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
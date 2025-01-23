import React, { useState } from 'react';
import { Copy } from 'lucide-react';

export default function Donation() {
  const [copied, setCopied] = useState({ speed: false, zbd: false, bitcoin: false });

  const wallets = {
    speed: 'priyansxu@speed.app',
    zbd: 'priyansxu@zbd.gg',
    bitcoin: 'bc1qexample123456789'
  };

  const handleCopy = (type) => {
    navigator.clipboard.writeText(wallets[type]);
    setCopied((prev) => ({ ...prev, [type]: true }));
    setTimeout(() => setCopied((prev) => ({ ...prev, [type]: false })), 2000);
  };

  const WalletBlock = ({ address, copiedState, type }) => (
    <div className="relative mb-4">
      <div className="w-full px-4 py-3 rounded-lg bg-purple-100/20 text-purple-400 flex items-center justify-between">
        <span className="font-mono text-sm">{address}</span>
        <button onClick={() => handleCopy(type)} className="focus:outline-none">
          <Copy className="opacity-50 hover:opacity-100 transition-opacity" size={20} />
        </button>
      </div>
      {copiedState && (
        <div className="absolute inset-x-0 bottom-[-22px] text-center">
          <span className="text-xs px-2 py-1 rounded-full bg-purple-100/20 text-purple-400">
            Copied!
          </span>
        </div>
      )}
    </div>
  );

  return (
    <div className="p-4 flex justify-center items-center">
      <div className="w-full max-w-md backdrop-blur-lg overflow-hidden outline-dashed outline-2 outline-offset-2 rounded-2xl space-y-4 bg-purple-50 border-purple-400 outline-purple-400">
        <div className="p-8 pb-0">
          <h1 className="text-4xl font-bold font-mono mb-8 text-center text-purple-400">
            Donate Bitcoin
          </h1>

          <div className="rounded-2xl p-4 bg-purple-100/10 border border-purple-100/30">
            <h2 className="text-lg font-semibold mb-4 text-center text-purple-400">
              Lightning Wallets
            </h2>
            <WalletBlock address={wallets.speed} copiedState={copied.speed} type="speed" />
            <WalletBlock address={wallets.zbd} copiedState={copied.zbd} type="zbd" />
          </div>

          <div className="p-8 pt-4">
            <div className="mb-4 text-center text-purple-400">
              <h3 className="text-2xl font-bold tracking-wider uppercase">Mainnet</h3>
              <p className="text-xs font-mono opacity-70 tracking-widest">
                Bitcoin Native Segwit Address
              </p>
            </div>
            <WalletBlock address={wallets.bitcoin} copiedState={copied.bitcoin} type="bitcoin" />
          </div>
        </div>
      </div>
    </div>
  );
}
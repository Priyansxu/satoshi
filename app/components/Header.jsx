import { Bitcoin } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/30 outline outline-b outline-6 outline-[#ab9ff1]/30">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bitcoin className="w-8 h-8 text-[#AB9FF1]" />
          <span className="text-2xl font-bold text-gray-800">Satoshi</span>
        </div>
      </div>
    </header>
  );
}
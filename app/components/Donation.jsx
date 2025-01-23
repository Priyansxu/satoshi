export default function Donation() {
  return (
    <div className="p-4 flex justify-center items-center">
      <div className="w-full max-w-md backdrop-blur-lg bg-[#AB9FF1] bg-opacity-70 overflow-hidden outline-dashed outline-2 outline-offset-2 outline-[#AB9FF1]/60 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4 text-[#ab9ff1]">Donate to the developer</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img src="/speed.svg" alt="Speed" className="w-6 h-6" />
            <span className="text-gray-700">priyansxu@speed.app</span>
          </div>
          <div className="flex items-center space-x-4">
            <img src="/zbd.svg" alt="ZBD" className="w-6 h-6" />
            <span className="text-gray-700">priyansxu@zbd.gg</span>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-[#ab9ff1]">Bitcoin Address</h3>
          <code className="block bg-white p-3 rounded border border-[#ab9ff1] text-sm break-all">
            1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2
          </code>
        </div>
      </div>
    </div>
  );
}
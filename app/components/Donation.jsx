import Image from "next/image"

export default function Donation() {
  return (
     <div className="p-4 flex justify-center items-center">
      <h2 className="text-2xl font-bold mb-4 text-[#ab9ff1]">Donate to the developer</h2>
      <div className="space-y-4">
        <div className="flex items-center space-x-4">
          <Image src="/speed.svg" alt="Speed Logo" width={24} height={24} />
          <span className="text-gray-700">priyansxu@speed.app</span>
        </div>
        <div className="flex items-center space-x-4">
          <Image src="/zbd.svg" alt="ZBD Logo" width={24} height={24} />
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
  )
}
import Image from 'next/image'
import speedLogo from '../public/speed.svg'
import zbdLogo from '../public/zbd.svg'

export default function Donation() {
  return (
    <div className="p-4 flex justify-center items-center">
      <div className="w-full max-w-md backdrop-blur-lg bg-[#AB9FF1] bg-opacity-70 overflow-hidden outline-dashed outline-2 outline-offset-2 outline-[#AB9FF1]/60 rounded-2xl">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Image 
              src={speedLogo} 
              alt="Speed Logo" 
              width={24} 
              height={24} 
            />
            <span className="text-gray-700">priyansxu@speed.app</span>
          </div>
          <div className="flex items-center space-x-4">
            <Image 
              src={zbdLogo} 
              alt="ZBD Logo" 
              width={24} 
              height={24} 
            />
            <span className="text-gray-700">priyansxu@zbd.gg</span>
          </div>
        </div>
        {/* Rest of your code */}
      </div>
    </div>
  )
}
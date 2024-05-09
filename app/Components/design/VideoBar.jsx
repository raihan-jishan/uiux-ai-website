import { play } from '@/public';
import Image from 'next/image';

const VideoBar = () => {
    return (
        <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
          <Image
            src={play}
            width={24}
            height={24}
            className="object-contain mr-3"
            alt="play image not found!"
          />
    
          <div className="flex-1 bg-[#D9D9D9]">
            <div className="w-1/2 h-0.5 bg-color-1"></div>
          </div>
        </div>
      );
}

export default VideoBar;
import { lines } from "@/public";
import Image from "next/image";

// leftLines 
export const LeftLines = () => {
    <div className="hidden lg:block absolute top-1/2 right-full w-[11.0625rem] -translate-y-1/2 pointer-events-none">
        <Image 
        className="w-full"
        src={lines}
        width={1400}
        height={177}
        alt="lines image not found!"
        />
    </div>
}

// rightLines 
export const RightLine = () => {
    return(
        <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
            <Image 
            className="w-full"
            src={lines}
            width={1400}
            height={177}
            alt="lines image not found!"
            />
        </div>
    )
}
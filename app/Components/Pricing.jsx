"use client"

import { smallSphere, stars } from "@/public";
import Image from "next/image";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLines, RightLine } from "./design/Pricing";
 

const Pricing = () => {
  return (
    <Section className="overflow-hidden " id="pricing">
        <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
        <Image 
        src={smallSphere}
        className="relative z-1"
        width={255}
        height={255}
        alt="sphere image not found!"
        />

        <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-y-1/2 pointer-events-none">
            <Image 
            src={stars}
            className="w-full"
            width={950}
            height={400}
            alt="stars image not found!"
            />
        </div>
        </div>

        <Heading 
        tag={'Get started with sourceAi'}
        title={'Pay once , use forever'}
        />

        <div className="relative">
            <PricingList />

            <RightLine />
            <LeftLines />

            <div className="flex justify-center mt-10">
        <a href="/pricing" className="text-xs font-code font-bold tracking-wider uppercase border-b">
            See the full details
        </a>
            </div>
        </div>
        </div>
    </Section>
  )
}

export default Pricing;
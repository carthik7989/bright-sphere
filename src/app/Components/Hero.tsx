"use client";
import Image from "next/image";
import Pill from "./Pill";
import { useRef } from "react";
import { useFloatingAnimation } from "../hooks/useFloatingAnimation";
import GlowEffect from "./GlowEffect";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);

    // Floating animation for AI icons
    useFloatingAnimation(containerRef, {
        selector: ".float-icon",
        yPercentRange: 20,
        duration: 1,
        ease: "power1.inOut",
    });


    return (
        <section className="relative flex flex-col gap-9 items-center fpx  pt-30 md:pt-35 max-container">
            <GlowEffect className="right-0 bottom-0" />
            {/* First Row */}
            <div className="flex flex-col items-center gap-3 lg:gap-9">
                {/* First Inner Row */}
                <div className="flex flex-col items-center justify-center gap-3 text-center">

                    <Pill wrapperClassName="lg:hidden" text="Real-world AI Skills" />
                    <h1 className="text-2xl mlg:text-3xl sm:text-4xl md:text-[40px] lg:text-[44px] xl:text-[52px] xxl:text-[64px] font-semibold font-general-sans text-text-dark"><span className="tm">AiMS</span> – <span className="gradient-text">AI For Mentoring Students</span></h1>
                    <p className="text-lg md:text-xl xl:text-2xl font-medium font-lato text-text-dark leading-tight">Live Online Skill Development Program for Grades 6–12</p>

                </div>
                {/* End of First Inner Row */}

                {/* Second Inner Row */}
                <div className="w-full lg:w-[55%] lg:hidden">
                    <p className="text-center ">A supportive, mentor-led space where children learn to use technology meaningfully, build confidence, and explore their potential through real-world AI skills.</p>
                </div>
                {/* End of Second Inner Row */}
            </div>
            {/* End of First Row */}

            {/* Second Row */}
            <div ref={containerRef} className="relative w-full flex justify-center">
                {/* Left  */}
                {/* Lovable */}
                <Image className="float-icon absolute top-0 left-3 md:top-10 lg:top-15 lg:left-35 xl:left-45 xxl:top-10 xxl:left-40 w-[22%] sm:w-[18%] lg:w-[13%] xl:w-[12%] xxl:w-[12%] " src="/icons/ai/lovable-text.svg" alt="Lovable" width={911} height={155} />

                {/* ChatGPT */}
                <Image className="float-icon absolute top-12 left-0 mlg:top-18 sm:left-10 lg:top-32 lg:left-43 xl:top-35 xl:left-55 md:top-35 md:left-10 xxl:top-30 xxl:left-65 w-[20%] sm:w-[18%] lg:w-[13%] xl:w-[12%] xxl:w-[12%]" src="/icons/ai/chatgpt-text.svg" alt="ChatGPT" width={529} height={127} />
                {/* Copilot */}
                <Image className="float-icon absolute top-23 -left-3 mlg:top-33 sm:top-37 lg:top-45 lg:left-20 md:top-60 xl:left-25 xl:top-50 xxl:top-50 xxl:left-25 w-[20%] sm:w-[17%] lg:w-[13%] xl:w-[12%] xxl:w-[12%]" src="/icons/ai/copilot-text.svg" alt="Copilot" width={229} height={64} />
                {/* Loom */}
                <Image className="float-icon absolute bottom-10 left-0 sm:left-10 lg:left-50 xl:bottom-15 xl:left-65 xxl:bottom-15 xxl:left-60 w-[18%] sm:w-[14%] lg:w-[10%] xl:w-[9%] xxl:w-[10%]" src="/icons/ai/loom-text.svg" alt="Loom" width={117} height={48} />
                {/* End of Left */}

                {/* Right  */}
                {/* Leonardo */}
                <Image className="float-icon absolute -top-3 right-7 md:top-0 md:right-18 lg:top-10 lg:right-50 xl:right-65 xxl:top-10 xxl:right-70 w-[12%] sm:w-[10%] lg:w-[6%]  xxl:w-[6%]" src="/icons/ai/leonardo.svg" alt="Leonardo" width={70} height={68} />
                {/* Gemini */}
                <Image className="float-icon absolute top-13 right-0 mlg:top-18 sm:right-10 md:top-30 lg:right-50 xl:top-35 xl:right-55 xxl:top-40 xxl:right-65 w-[18%] sm:w-[15%] lg:w-[10%] xl:w-[10%] xxl:w-[12%]" src="/icons/ai/gemini-text.svg" alt="Gemini" width={249} height={59} />
                {/* Bard */}
                <Image className="float-icon absolute top-23 right-0 mlg:top-35 md:top-55 lg:top-40 lg:right-20 xl:top-50 xl:right-25 xxl:top-50 xxl:right-25 w-[16%] sm:w-[14%] lg:w-[10%] xl:w-[9%] xxl:w-[10%]" src="/icons/ai/bard-text.svg" alt="Bard" width={362} height={127} />

                {/* Gamma */}
                <Image className="float-icon absolute bottom-15 right-3 sm:right-15 lg:bottom-20 lg:right-50 xl:right-60 xxl:bottom-20 xxl:right-60 w-[16%] sm:w-[14%] lg:w-[11%] xxl:w-[10%]" src="/icons/ai/gamma.svg" alt="Gamma" width={1111} height={192} />
                {/* End of Right */}

                <Image className="w-[60%] mlg:w-[63%] sm:w-[50%] lg:w-[30%] xl:w-[28%]" src="/images/robot.webp" alt="Robot" width={356} height={411} />

            </div>
            {/* End of Second Row */}
        </section>
    );
}
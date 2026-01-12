'use client'
import Pill from "./Pill";
import CheckListItem from "./CheckListItem";
import Image from "next/image";
import GlowEffect from "./GlowEffect";
import { useState, useEffect, useRef } from "react";

const useCounter = (end: number, shouldStart: boolean, duration: number = 2000, decimals: number = 0) => {
    const [count, setCount] = useState(0);
    const hasAnimated = useRef(false);

    useEffect(() => {
        if (!shouldStart || hasAnimated.current) return;

        hasAnimated.current = true;
        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - percentage, 4);

            const value = end * ease;
            setCount(decimals > 0 ? parseFloat(value.toFixed(decimals)) : Math.floor(value));

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            }
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [end, duration, shouldStart, decimals]);

    return count;
};

export default function Learn() {

    const [isVisible, setIsVisible] = useState(false);
    const statsRef = useRef<HTMLUListElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only trigger once
                }
            },
            {
                threshold: 0.6, // Trigger when 60% visible
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Call hooks at component top level (React rule)
    const ratingsCount = useCounter(4.7, isVisible, 2000, 1);
    const impactCount = useCounter(95, isVisible, 2000);
    const communityCount = useCounter(5, isVisible, 2000);
    const expertiseCount = useCounter(5, isVisible, 2000);

    const pills = [
        {
            title: "8 Live Sessions",
            icon: "/icons/video.svg",
        },
        {
            title: "4 Weekends",
            icon: "/icons/calendar.svg",

        },
        {
            title: "Hands-on Projects",
            icon: "/icons/calendar.svg",

        }
    ]
    const statistics = [
        {
            title: "Ratings",
            value: ratingsCount,
            icon: "/icons/star.svg",
            subtitle: ""
        },
        {
            title: "Impact",
            value: `${impactCount}%`,
            icon: "",
            subtitle: "saw improvement in learning"

        },
        {
            title: "Community",
            value: `${communityCount}k+`,
            icon: "",
            subtitle: "Learners"

        },
        {
            title: "Expertise",
            value: `${expertiseCount}+`,
            icon: "",
            subtitle: "Years"

        }
    ]

    const checkListItems = [
        "Understand AI basics",
        "Use AI for schoolwork & academics",
        "Build their own AI Study Tutor",
        "Build simple websites & games (no-code)",
        "Improve public speaking with AI",
        "Use AI tools for better study habits",
        "Stay safe online"
    ]



    return (
        <section className="relative w-full bg-white overflow-y-hidden">
            <GlowEffect width="w-[200px]" height="h-[200px]" opacity="opacity-30" className="left-0 top-0" />
            <div className="relative w-full flex flex-col gap-12 md:gap-15 fp  max-container">
                <Image className="block md:hidden xl:block absolute bottom-0 left-1/2  md:left-0 -translate-x-1/2 md:translate-x-0 w-[50%] xl:w-[30%] xxl:w-[437px] xxl:h-[541px]" src="/images/girl.webp" alt="Girl" width={437} height={541} />
                {/* First Row */}
                <div className="flex flex-col gap-7">
                    <h2 className="text-center text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-semibold font-general-sans leading-tight">What Students <span className="gradient-text">Will Learn</span></h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {pills.map((pill, index) => (
                            <Pill key={index} icon={pill.icon} textClassName="text-xxs mlg:text-xs" text={pill.title} />
                        ))}
                    </div>
                </div>
                {/* End of First Row */}

                {/* Second Row */}

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-16">

                    {/* First Column */}
                    <div className="w-full md:hidden xl:flex xl:w-[25%] h-[150px] mmd:h-[180px] mlg:h-[220px] sm:h-[340px] md:h-auto  order-3 md:order-1"></div>
                    {/* End of First Column */}

                    {/* Second Column */}
                    <div className="w-full md:w-[50%] xl:w-[40%] flex flex-col gap-5 md:gap-8 rounded-[20px] p-5 md:p-7 lg:p-9 shadow-2xl order-1 md:order-2">
                        <h3 className="text-xl md:text-2xl  xxl:text-[34px] font-lato font-medium text-text-dark">Students learn to:</h3>
                        <ul className="flex flex-col gap-3 md:gap-4">
                            {checkListItems.map((item, index) => (
                                <CheckListItem key={index}>{item}</CheckListItem>
                            ))}
                        </ul>
                    </div>
                    {/* End of Second Column */}

                    {/* Third Column */}
                    <div className="w-full md:w-[50%] xl:w-[35%] flex flex-col justify-center gap-6 xxl:gap-11 order-2 md:order-3">
                        <div className="text-sm sm:text-base xxl:text-xl font-open-sans font-semibold text-text-dark text-center md:text-left">Every student completes a project they can proudly showcase.</div>

                        {/* Added ref={statsRef} here so IntersectionObserver can detect it */}
                        <ul ref={statsRef} className="grid grid-cols-2 grid-rows-2 gap-5 text-white text-center">
                            {statistics.map((statistic, index) => (
                                <li key={index} className="flex flex-col gap-2 xxl:gap-4  items-center p-4 primary rounded-[10px]">
                                    <div className="text-sm sm:text-base xxl:text-lg font-open-sans font-bold">{statistic.title}</div>
                                    <div className="flex items-center gap-2">
                                        {statistic.icon && (
                                            <Image className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] xxl:w-[32px] xxl:h-[32px]" src={statistic.icon} alt="Star" width={27} height={27} />
                                        )}
                                        <div className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xxl:text-[42px] font-general-sans font-semibold leading-none">{statistic.value}</div>
                                    </div>
                                    {statistic.subtitle && (
                                        <div className="text-xxs sm:text-xs lg:text-sm font-open-sans font-normal leading-tight ">{statistic.subtitle}</div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* End of Third Column */}
                </div>

                {/* End of Second Row */}
            </div>
        </section>
    )
}
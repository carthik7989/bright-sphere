"use client";
import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import { useEffect, useState } from "react";

export default function StickyBar() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const thirdSection = document.getElementById("third-section");
            if (thirdSection) {
                const rect = thirdSection.getBoundingClientRect();

                if (rect.top <= window.innerHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <section className="w-full fixed bottom-5 left-0 right-0 z-10 animate-fade-in-up">
            <div className="w-full flex fpx max-container">
                <div className="w-full grid grid-cols-1 grid-rows-repeat[3,auto] xl:grid-cols-2 xl:grid-rows-repeat[2,auto] gap-1 p-5 lg:p-7 xxl:p-8 bg-white rounded-[15px] shadow-2xl">
                    <div className="order-1 flex items-center gap-2 md:gap-5">
                        <Image className="w-[25px] h-[25px] md:w-[30px] md:h-[30px] lg:w-[40px] lg:h-[40px] xxl:w-[55px] xxl:h-[55px]" src="/icons/offer.svg" alt="Offer" width={55} height={55} />
                        <div className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-[27px] xxl:text-3xl font-general-sans font-semibold">(Launch Offer – Limited Seats)</div>
                    </div>
                    <div className="order-3 xl:order-2 flex items-center justify-between xl:justify-end gap-2 md:gap-8">
                        <div className="flex items-center gap-2 md:gap-4">
                            <div className="relative text-xs sm:text-base md:text-xl xl:text-2xl text-gray-400 font-lato font-medium after:content-[''] after:w-full after:h-px after:bg-gray-400 after:absolute after:left-0 after:top-1/2 after:rotate-10 ">₹11,999</div>
                            <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-general-sans font-semibold gradient-text">₹4,999</div>
                        </div>
                        <PrimaryButton>Book Now</PrimaryButton>
                    </div>

                    <div className="order-2 xl:order-3 text-xs md:text-sm lg:text-base xxl:text-lg font-open-sans font-regular">
                        <span className="font-semibold gradient-text">For institutions: </span> Contact our team for bulk subscriptions.
                    </div>
                </div>
            </div>
        </section>
    )
}
"use client";

import { useState, useRef, useEffect } from "react";
import Pill from "./Pill";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Testimonials() {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [rotationIndex, setRotationIndex] = useState(0);
    const [angleStep, setAngleStep] = useState(25);
    const prevRealIndex = useRef(0);

    const testimonials = [
        {
            name: "Ashwini, Grade 7",
            quote:
                "My daughter became confident after presenting her AI project. Her first website meant everything to her.",
            image: "/images/testimonials/testimonial-girl-1.webp",
        },
        {
            name: "Pooja Shetty, Grade 6",
            quote:
                "The interactive sessions were amazing. He learned so much about AI tools safely.",
            image: "/images/testimonials/testimonial-parents-1.webp",
        },
        {
            name: "Hemanth, Grade 8",
            quote:
                "Finally a course that focuses on creativity and not just coding syntax. Highly recommended!",
            image: "/images/testimonials/testimonial-boy-1.webp",
        },
        {
            name: "Mohan Das, Grade 5",
            quote: "She built her own chatbot! The confidence boost is real.",
            image: "/images/testimonials/testimonial-parents-2.webp",
        },
        {
            name: "Harshitha, Grade 9",
            quote: "Practical skills that help with school projects immediately.",
            image: "/images/testimonials/testimonial-girl-2.webp",
        },
    ];

    // Responsive Angle Step
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setAngleStep(15); // Tighter spacing on mobile
            } else if (window.innerWidth < 1024) {
                setAngleStep(20); // Tighter spacing on mobile
            } else {
                setAngleStep(25); // Original spacing on desktop
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Handle slide change to drive rotation
    const handleSlideChange = (swiper: any) => {
        const currentRealIndex = swiper.realIndex;
        const prev = prevRealIndex.current;
        const total = testimonials.length;

        let diff = currentRealIndex - prev;

        // Detect Wrap-around for infinite loop
        if (diff > total / 2) {
            diff -= total;
        } else if (diff < -total / 2) {
            diff += total;
        }

        setRotationIndex(prevRot => prevRot + diff);
        setActiveIndex(currentRealIndex);
        prevRealIndex.current = currentRealIndex;
    };

    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative w-full flex flex-col items-center gap-38 md:gap-56 fp max-container">

                {/* 
                  Container for the white circle arc. 
                  - w-[150%] makes it wider than the screen (flatter arc).
                  - left-1/2 -translate-x-1/2 centers it horizontally.
                  - top values adjust vertical visual position.
                */}
                <div className="absolute -top-1/7 sm:-top-1/3 md:-top-1/2 left-1/2 -translate-x-1/2 w-[150%] sm:w-[105%] md:w-[120%] lg:w-full bg-white h-[240px]  sm:h-[360px] md:h-[600px] lg:h-[620px] xl:h-[640px] xxl:h-[660px] rounded-[100%]">
                    {testimonials.map((testimonial, index) => {
                        // Rotation Logic
                        const total = testimonials.length;

                        // Smart wrapping for shortest path
                        let virtualIndex = index;
                        while (virtualIndex - rotationIndex > total / 2) virtualIndex -= total;
                        while (virtualIndex - rotationIndex < -total / 2) virtualIndex += total;

                        const diff = virtualIndex - rotationIndex;

                        // Use angleStep state for responsive spacing
                        const angleDeg = 90 + (diff * angleStep);
                        const angleRad = (angleDeg * Math.PI) / 180;

                        const left = 50 + 50 * Math.cos(angleRad);
                        const top = 50 + 50 * Math.sin(angleRad);

                        const isActive = index === activeIndex;

                        return (
                            <div
                                key={index}
                                className={`absolute rounded-full overflow-hidden border-2 md:border-4 transition-all duration-500 ease-out cursor-pointer primary ${isActive ? 'w-10 h-10 mlg:w-13 mlg:h-13 md:w-18 md:h-18 xl:w-22 xl:h-22 xxl:w-24 xxl:h-24 border-secondary shadow-[0_0_20px_rgba(34,113,255,0.4)] z-20 scale-110' : 'w-7 h-7 mlg:w-10 mlg:h-10 md:w-14 md:h-14 xl:w-18 xl:h-18 xxl:w-20 xxl:h-20 border-white grayscale opacity-70 z-10 hover:opacity-100 hover:grayscale-0'}`}
                                style={{
                                    left: `${left}%`,
                                    top: `${top}%`,
                                    transform: 'translate(-50%, -50%)',
                                }}
                                onClick={() => {
                                    swiperRef.current?.slideToLoop(index);
                                }}
                            >
                                <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                            </div>
                        );
                    })}
                </div>
                {/* First Row */}
                <div className="flex flex-col items-center gap-2 sm:gap-4 md:gap-5">
                    <Pill text="Testimonials" />
                    <h2 className="text-xl mlg:text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-general-sans font-semibold text-text-dark z-1">Parent <span className="gradient-text">Testimonials</span></h2>
                </div>
                {/* End of First Row  */}

                {/* Second Row */}
                <div className="relative w-full lg:max-w-[70%] xl:max-w-[60%] h-full">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 1,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 1,
                                spaceBetween: 50,
                            },
                        }}
                        className="w-full h-full [&_.swiper-wrapper]:items-stretch"
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={handleSlideChange}
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="flex h-auto">
                                <div className="flex flex-col flex-1 h-full gap-3 md:gap-8 bg-white rounded-t-[30px] rounded-br-[30px] px-7 sm:px-10 md:px-18 pt-10 sm:pt-12 md:pt-22 pb-5 md:pb-8">
                                    <div className="text-sm sm:text-base md:text-lg font-open-sans italic">“{testimonial.quote}”</div>
                                    <div className="flex flex-col items-end gap-1 text-secondary italic">
                                        <div className="text-xs sm:text-sm md:text-base font-open-sans">Parent of</div>
                                        <div className="mt-auto text-base sm:text-lg md:text-[22px] font-lato font-medium text-text-dark ">
                                            — {testimonial.name}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* End of Testimonial Content */}


                    {/* Quote Icon */}
                    <Image className="absolute -top-4 md:-top-6 left-2 z-1 w-[58px] h-[37.86px] md:w-[70px] md:h-[45.66px] " src="/icons/quote.svg" alt="quote" width={70} height={45.66} />
                    {/* End of Quote Icon */}

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 md:-left-6 md:-right-6 flex justify-between pointer-events-none z-1">
                        <button onClick={() => swiperRef.current?.slidePrev()}

                            className="w-8 h-8 md:w-12 md:h-12 rounded-full primary flex items-center justify-center text-white cursor-pointer pointer-events-auto shadow-lg hover:scale-110 transition-transform disabled:opacity-50"
                        >
                            <svg
                                className="w-4 h-4 md:w-6 md:h-6 rotate-180"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 18L15 12L9 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>

                        <button onClick={() => swiperRef.current?.slideNext()}

                            className="w-8 h-8 md:w-12 md:h-12 rounded-full primary flex items-center justify-center text-white cursor-pointer pointer-events-auto shadow-lg hover:scale-110 transition-transform disabled:opacity-50"
                        >
                            <svg
                                className="w-4 h-4 md:w-6 md:h-6"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9 18L15 12L9 6"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* End of Navigation Buttons */}
                </div>
                {/* End of Second Row */}
            </div>
        </section>
    )
}
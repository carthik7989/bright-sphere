import Pill from "./Pill";
import CheckListItem from "./CheckListItem";
import Image from "next/image";

export default function Learn() {
    return (
        <section className="relative w-full flex flex-col gap-15 fp bg-white max-container">
            <Image className="absolute bottom-0 left-0" src="/images/girl.webp" alt="Girl" width={437} height={541} />
            {/* First Row */}
            <div className="flex flex-col gap-7">
                <h2 className="text-center text-[42px] font-semibold font-general-sans">What Students <span className="gradient-text">Will Learn</span></h2>
                <div className="flex justify-center gap-4">
                    <Pill icon="/icons/video.svg" text="8 Live Sessions" />
                    <Pill icon="/icons/video.svg" text="4 Weekends" />
                    <Pill icon="/icons/video.svg" text="Hands-on Projects" />
                </div>
            </div>
            {/* End of First Row */}

            {/* Second Row */}

            <div className="flex gap-16">

                {/* First Column */}
                <div className="w-[25%]"></div>
                {/* End of First Column */}

                {/* Second Column */}
                <div className="w-[40%] flex flex-col gap-8 rounded-[20px] p-9 shadow-2xl">
                    <h3 className="text-[34px] font-lato font-medium text-text-dark">Students learn to:</h3>
                    <div className="flex flex-col gap-4">
                        <CheckListItem>Understand AI basics</CheckListItem>
                        <CheckListItem>Use AI for schoolwork & academics</CheckListItem>
                        <CheckListItem>Build their own AI Study Tutor</CheckListItem>
                        <CheckListItem>Build simple websites & games (no-code)</CheckListItem>
                        <CheckListItem>Improve public speaking with AI</CheckListItem>
                        <CheckListItem>Use AI tools for better study habits</CheckListItem>
                        <CheckListItem>Stay safe online</CheckListItem>
                    </div>
                </div>
                {/* End of Second Column */}

                {/* Third Column */}
                <div className="w-[35%] flex flex-col justify-center gap-11">
                    <div className="text-xl font-open-sans font-semibold text-text-dark">Every student completes a project they can proudly showcase.</div>

                    <div className="grid grid-cols-2 grid-rows-2 gap-5 text-white text-center">
                        <div className="flex flex-col gap-4  items-center p-4 primary rounded-[10px]">
                            <div className="text-lg font-open-sans font-bold">Ratings</div>
                            <div className="flex gap-2">
                                <Image src="/icons/star.svg" alt="Star" width={27} height={27} />
                                <div className="text-[42px] font-general-sans font-semibold leading-none">4.7</div>
                            </div>

                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center p-4 primary rounded-[10px]">
                            <div className="text-lg font-open-sans font-bold">Impact</div>
                            <div className="text-[42px] font-general-sans font-semibold leading-none">95%</div>
                            <div className="text-sm font-open-sans font-normal ">saw improvement in learning</div>


                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center p-4 primary rounded-[10px]">
                            <div className="text-lg font-open-sans font-bold">Community</div>
                            <div className="text-[42px] font-general-sans font-semibold leading-none">5k+</div>
                            <div className="text-sm font-open-sans font-normal ">Learners</div>


                        </div>
                        <div className="flex flex-col gap-4 justify-center items-center p-4 primary rounded-[10px]">
                            <div className="text-lg font-open-sans font-bold">Expertise</div>
                            <div className="text-[42px] font-general-sans font-semibold leading-none">5+</div>
                            <div className="text-sm font-open-sans font-normal ">Years</div>


                        </div>
                    </div>
                </div>
                {/* End of Third Column */}
            </div>

            {/* End of Second Row */}
        </section>
    )
}
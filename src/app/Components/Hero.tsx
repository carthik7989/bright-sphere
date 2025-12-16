import Image from "next/image";
import Pill from "./Pill";
export default function Hero() {
    return (
        <section className="flex flex-col gap-9 items-center fpx  pt-35 min-h-screen max-container">
            {/* First Row */}
            <div className="flex flex-col items-center gap-9">
                {/* First Inner Row */}
                <div className="flex flex-col items-center gap-3">

                    {/* <Pill text="Real-world AI Skills" /> */}
                    <h1 className="text-[64px] font-semibold font-general-sans text-text-dark">AiMS – <span className="gradient-text">AI For Mentoring Students</span></h1>
                    <h4 className="text-2xl font-medium font-lato text-text-dark">Live Online Skill Development Program for Grades 6–12</h4>

                </div>
                {/* End of First Inner Row */}

                {/* Second Inner Row */}
                {/* <div className="w-[55%]">
                    <p className="text-center ">A supportive, mentor-led space where children learn to use technology meaningfully, build confidence, and explore their potential through real-world AI skills.</p>
                </div> */}
                {/* End of Second Inner Row */}
            </div>
            {/* End of First Row */}

            {/* Second Row */}
            <div className="relative w-full flex justify-center">
                {/* Left  */}
                <Image className="absolute top-20 left-50" src="/icons/lovable.webp" alt="Lovable" width={142} height={27} />
                <Image className="absolute top-50 left-25" src="/icons/copilot.webp" alt="Copilot" width={64} height={58} />

                <Image className="absolute bottom-15 left-40" src="/icons/loom.webp" alt="Loom" width={109} height={33} />
                {/* End of Left */}

                {/* Right  */}
                <Image className="absolute top-10 right-70" src="/icons/leonardo.webp" alt="Leonardo" width={66} height={66} />
                <Image className="absolute top-40 right-25" src="/icons/bard.webp" alt="Bard" width={172} height={59} />

                <Image className="absolute bottom-15 right-40" src="/icons/gamma.webp" alt="Gamma" width={113} height={34} />
                {/* End of Right */}

                <Image src="/images/robot.webp" alt="Robot" width={356} height={411} />

            </div>
            {/* End of Second Row */}
        </section>
    );
}
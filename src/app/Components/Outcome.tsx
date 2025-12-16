import Image from "next/image";

export default function Outcome() {
    return (
        <section className="w-full flex flex-col items-center gap-28 fpx fpt  bg-white  max-container  ">
            <h2 className="text-center text-[42px] font-semibold font-general-sans">Real   <span className="gradient-text">Outcomes Parents </span> Notice</h2>

            <div className="w-full flex justify-center relative text-xl text-white font-open-sans font-semibold">
                {/* Left Side */}
                <div className="absolute left-10 top-0 bg-secondary px-5 py-2 rounded-[22px]">Confident in speaking and presenting</div>
                <div className="absolute -left-10 top-50 bg-secondary px-5 py-2 rounded-[22px]">Independent in building digital projects</div>
                <div className="absolute left-15 top-90 bg-secondary px-5 py-2 rounded-[22px]">Responsible in using AI for school</div>

                {/* End of Left Side */}

                {/* Right side */}
                <div className="absolute right-20 top-30 bg-secondary px-5 py-2 rounded-[22px]">Purposeful in using technology</div>
                <div className="absolute right-50 top-60 bg-secondary px-5 py-2 rounded-[22px]">Curious and creative</div>
                <div className="absolute right-25 top-100 bg-secondary px-5 py-2 rounded-[22px]">Productive rather than <br /> passive online consumers</div>

                {/* End of Right Side */}
                <Image src="/images/girl-2.webp" alt="Girl" width={350} height={599} />
            </div>
        </section>
    );
}
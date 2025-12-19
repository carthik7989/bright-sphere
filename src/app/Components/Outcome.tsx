import Image from "next/image";

export default function Outcome() {
    const outcomes = [
        {
            title: "Confident in speaking and presenting",
            className: "-left-5 -top-17 lg:left-5 lg:-top-5 xl:left-10 xl:top-0"

        },
        {
            title: "Independent in building digital projects",
            className: "-left-5 top-0 lg:-left-10 lg:top-40 xl:-left-10 xl:top-50  self-end"

        },
        {
            title: "Responsible in using AI for school",
            className: "-left-5 top-20 lg:left-0 lg:top-80 xl:left-15 xl:top-90 "

        },
        {
            title: "Purposeful in using technology",
            className: "right-10 -top-12 lg:right-20 lg:top-5 xl:right-20 xl:top-30 self-end"

        },
        {
            title: "Curious and creative",
            className: "right-25 top-5 lg:right-25 lg:top-40 xl:right-50 xl:top-60"

        },
        {
            title: "Productive rather than passive\nonline consumers",
            className: "right-0 top-30 lg:right-5 lg:top-70 xl:right-25 xl:top-100 self-end  "

        },
    ];
    return (
        <section className="w-full bg-white">
            <div className="w-full flex flex-col items-center  gap-8 md:gap-28 fpx fpt  max-container  ">
                <h2 className="text-center text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-semibold font-general-sans">Real<span className="gradient-text"> Outcomes Parents </span> Notice</h2>


                <div className="w-full flex flex-col md:flex-row gap-5 justify-center relative text-xs mlg:text-sm lg:text-base xxl:text-xl text-white font-open-sans font-semibold">
                    {outcomes.map((item, index) => (
                        <div key={index} className={` ${item.className} md:absolute  bg-secondary px-5 py-2 rounded-[22px] w-max whitespace-pre-wrap `}>
                            {item.title}
                        </div>
                    ))}
                    <Image className="w-[60%] sm:w-[50%] md:w-[25%] lg:w-[30%] xl:w-[28%] xxl:w-[350px] xxl:h-[599px] self-center" src="/images/girl-2.webp" alt="Girl" width={350} height={599} />
                </div>
            </div>
        </section>
    );
}
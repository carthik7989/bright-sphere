import Pill from "./Pill";
import CheckListItem from "./CheckListItem";
import Image from "next/image";
import { isContext } from "vm";

export default function Learn() {

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
            value: "4.7",
            icon: "/icons/star.svg",
            subtitle: ""
        },
        {
            title: "Impact",
            value: "95%",
            icon: "",
            subtitle: "saw improvement in learning"

        },
        {
            title: "Community",
            value: "5k+",
            icon: "",
            subtitle: "Learners"

        },
        {
            title: "Expertise",
            value: "5+",
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
        <section className="w-full bg-white">
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
                        <div className="flex flex-col gap-3 md:gap-4">
                            {checkListItems.map((item, index) => (
                                <CheckListItem key={index}>{item}</CheckListItem>
                            ))}
                        </div>
                    </div>
                    {/* End of Second Column */}

                    {/* Third Column */}
                    <div className="w-full md:w-[50%] xl:w-[35%] flex flex-col justify-center gap-6 xxl:gap-11 order-2 md:order-3">
                        <div className="text-sm sm:text-base xxl:text-xl font-open-sans font-semibold text-text-dark text-center md:text-left">Every student completes a project they can proudly showcase.</div>

                        <div className="grid grid-cols-2 grid-rows-2 gap-5 text-white text-center">
                            {statistics.map((statistic, index) => (
                                <div key={index} className="flex flex-col gap-2 xxl:gap-4  items-center p-4 primary rounded-[10px]">
                                    <div className="text-sm sm:text-base xxl:text-lg font-open-sans font-bold">{statistic.title}</div>
                                    <div className="flex items-center gap-2">
                                        {statistic.icon && (
                                            <Image className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] xxl:w-[42px] xxl:h-[42px]" src={statistic.icon} alt="Star" width={27} height={27} />
                                        )}
                                        <div className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xxl:text-[42px] font-general-sans font-semibold leading-none">{statistic.value}</div>
                                    </div>
                                    {statistic.subtitle && (
                                        <div className="text-xxs sm:text-xs lg:text-sm font-open-sans font-normal leading-tight ">{statistic.subtitle}</div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* End of Third Column */}
                </div>

                {/* End of Second Row */}
            </div>
        </section>
    )
}
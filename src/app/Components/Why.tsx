import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import { getWhatsAppLink } from "../lib/whatsapp";
import FadeAnimation from "./FadeAnimation";


export default function Why() {
    const whyData = [
        {
            icon: "/icons/live.svg",
            iconClass: "w-[13%] mmd:w-[11%] sm:w-[14%] lg:w-[18%]  xl:w-[50px] xl:h-[47px]",
            title: "Live Online Sessions",
            description: "Join our live online session to learn, interact, and get your questions answered in real time; this is not a recorded session."
        },
        {
            icon: "/icons/trophy.svg",
            iconClass: "w-[13%] mmd:w-[11%] sm:w-[14%] lg:w-[18%] xl:w-[50px] xl:h-[50px]",
            title: "Prizes Worth ₹1,00,000",
            description: "Win exciting prizes worth ₹1,00,000 for creating the best AI-powered creative project."
        },
        {
            icon: "/icons/certificate.svg",
            iconClass: "w-[13%] mmd:w-[11%] sm:w-[14%] lg:w-[18%] xl:w-[50px] xl:h-[50px]",
            title: "Certificate from AiMS",
            description: "Receive an official certificate from AiMS upon successfully completing the program."
        },
        {
            icon: "/icons/indian-emblem.svg",
            iconClass: "w-[13%] mmd:w-[11%] sm:w-[14%] lg:w-[18%] xl:w-[38px] xl:h-[56px]",
            title: "Aligned with NEP 2020",
            description: "Our program is fully aligned with NEP 2020 to support modern, skill-based learning."
        },
        {
            icon: "/icons/learning.svg",
            iconClass: "w-[13%] mmd:w-[11%] sm:w-[14%] lg:w-[18%] xl:w-[50px] xl:h-[50px]",
            title: "Interactive Learning",
            description: "Get real-time guidance and support through our mentor-led, interactive learning sessions."
        },
        {
            icon: "/icons/live.svg",
            iconClass: "w-[13%] mmd:w-[11%] sm:w-[14%] lg:w-[18%] xl:w-[50px] xl:h-[47px]",
            title: "Small Batches & Personalised Guidance",
            description: "Learn in small batches with personalised guidance tailored to your pace and goals."
        },

    ]

    return (
        <section className="w-full  bg-white">
            <div className="w-full flex flex-col gap-10 xl:gap-18 fp items-center max-container">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-semibold font-general-sans text-text-dark">Why Join <span className="gradient-text">AiMS?</span></h2>

                <FadeAnimation
                    selector="li"
                    animation="fadeUp"
                    stagger={0.15}
                    className="w-full grid grid-cols-1 grid-rows-6 sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6 xl:gap-10 xxl:gap-15 text-center"
                >
                    {whyData.map((item, index) => (
                        <li key={index} className="relative list-none">
                            <div className="absolute inset-0 z-0 primary blur-3xl opacity-50"></div>
                            <article className="relative h-full z-1 flex flex-col items-center gap-3 md:gap-7  bg-white rounded-[15px] p-5 md:p-8   ">

                                <Image className={item.iconClass} src={item.icon} alt={item.title} width={50} height={50} />
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-xl xxl:text-2xl font-lato font-medium">{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>


                            </article>
                        </li>
                    ))}
                </FadeAnimation>

                <div className="w-full flex flex-col sm:flex-row gap-5 justify-center">
                    <SecondaryButton className="sm:w-1/2 lg:w-auto" ><a href={getWhatsAppLink("Hi I want to know more about AiMS")} target="_blank" rel="noopener noreferrer">Talk to a Program Advisor</a></SecondaryButton>
                    <PrimaryButton className="lg:px-23 sm:w-1/2 lg:w-auto">Enroll Now</PrimaryButton>
                </div>
            </div>


        </section>
    );
}
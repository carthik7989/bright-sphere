import Image from "next/image";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

export default function Why() {
    const whyData = [
        {
            icon: "/icons/live.svg",
            iconClass: "w-[50px] h-[47px]",
            title: "Live Online Sessions",
            description: "Join our live online session to learn, interact, and get your questions answered in real time; this is not a recorded session."
        },
        {
            icon: "/icons/trophy.svg",
            iconClass: "w-[50px] h-[50px]",
            title: "Prizes Worth ₹1,00,000",
            description: "Win exciting prizes worth ₹1,00,000 for creating the best AI-powered creative project."
        },
        {
            icon: "/icons/certificate.svg",
            iconClass: "w-[50px] h-[50px]",
            title: "Certificate from AiMS",
            description: "Receive an official certificate from AiMS upon successfully completing the program."
        },
        {
            icon: "/icons/indian-emblem.svg",
            iconClass: "w-[38px] h-[56px]",
            title: "Aligned with NEP 2020",
            description: "Our program is fully aligned with NEP 2020 to support modern, skill-based learning."
        },
        {
            icon: "/icons/learning.svg",
            iconClass: "w-[50px] h-[50px]",
            title: "Interactive Learning",
            description: "Get real-time guidance and support through our mentor-led, interactive learning sessions."
        },
        {
            icon: "/icons/live.svg",
            iconClass: "w-[50px] h-[47px]",
            title: "Small Batches & Personalised Guidance",
            description: "Learn in small batches with personalised guidance tailored to your pace and goals."
        },

    ]
    return (
        <section className="flex flex-col gap-18 items-center fp bg-white max-container">
            <h2 className="text-[42px] font-semibold font-general-sans text-text-dark">Why Join <span className="gradient-text">AiMS?</span></h2>

            <div className="w-full grid grid-cols-3 grid-rows-2 gap-15 text-center">
                {whyData.map((item, index) => (
                    <div className="relative">
                        <div className="absolute inset-0 z-0 primary blur-3xl opacity-50"></div>
                        <div className="relative h-full z-10 flex flex-col items-center gap-7  bg-white rounded-[15px] p-8   ">

                            <Image className={item.iconClass} src={item.icon} alt={item.title} width={50} height={50} />
                            <div className="flex flex-col gap-3">
                                <h4 className="text-2xl font-lato font-medium">{item.title}</h4>
                                <p>{item.description}</p>
                            </div>


                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full flex gap-5 justify-center">
                <SecondaryButton>Talk to a Program Advisor</SecondaryButton>
                <PrimaryButton className="px-23">Enroll Now</PrimaryButton>
            </div>


        </section>
    );
}
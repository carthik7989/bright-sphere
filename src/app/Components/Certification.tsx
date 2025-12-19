import Image from "next/image";

export default function Certification() {
    const certificationData = [
        {
            title: "Trusted Credential",
            description: "Backed by a leading EdTech platform",
            icon: "/icons/trusted-credential.svg",
        },
        {
            title: "Portfolio-Boosting",
            description: "Strengthens academic profile",
            icon: "/icons/portfolio-boosting.svg",
        },
        {
            title: "Skill Validation",
            description: "Shows real competence in AI tools",
            icon: "/icons/skill-validation.svg",
        },
        {
            title: "Digital Spotlight",
            description: "Selected students will be featured online",
            icon: "/icons/digital-spotlight.svg",
        }
    ]
    return (
        <section className="w-full flex flex-col items-center gap-11 fp bg-white  max-container  ">
            <h2 className="text-center text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-semibold font-general-sans"> <span className="gradient-text">Certification  </span> That Matters</h2>

            <div className="w-full grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 xl:grid-cols-4 xl:grid-rows-1 gap-6 xxl:gap-10 text-center">
                {certificationData.map((item, index) => (
                    <div className="relative">
                        <div className="absolute inset-0 z-0 primary blur-3xl opacity-50"></div>
                        <div className="relative h-full z-1 flex flex-col items-center gap-3 md:gap-5 lg:gap-7  bg-white rounded-[15px] p-5 md:p-8   ">

                            <Image className="w-[13%] mlg:w-[12%] sm:w-[14%] md:w-[15%] lg:w-[13%] xl:w-[20%]  xxl:w-[50px] xxl:h-[50px]" src={item.icon} alt={item.title} width={50} height={50} />
                            <div className="flex flex-col gap-3">
                                <h4 className="text-xl xxl:text-2xl font-lato font-medium">{item.title}</h4>
                                <p>{item.description}</p>
                            </div>


                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
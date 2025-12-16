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
        <section className="w-full flex flex-col items-center gap-11 fp  max-container  ">
            <h2 className="text-center text-[42px] font-semibold font-general-sans"> <span className="gradient-text">Certification  </span> That Matters</h2>

            <div className="w-full grid grid-cols-4 grid-rows-1 gap-10 text-center">
                {certificationData.map((item, index) => (
                    <div className="relative">
                        <div className="absolute inset-0 z-0 primary blur-3xl opacity-50"></div>
                        <div className="relative h-full z-10 flex flex-col items-center gap-7  bg-white rounded-[15px] p-8   ">

                            <Image src={item.icon} alt={item.title} width={50} height={50} />
                            <div className="flex flex-col gap-3">
                                <h4 className="text-2xl font-lato font-medium">{item.title}</h4>
                                <p>{item.description}</p>
                            </div>


                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
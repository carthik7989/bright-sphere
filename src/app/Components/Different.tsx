import FadeAnimation from "./FadeAnimation";

export default function Different() {
    const differentData = [
        {
            title: "Small, Interactive Groups",
            description: "Students learn in small, interactive groups."
        },
        {
            title: "Build, Create & Present Projects",
            description: "They build, create, and present real projects."
        },
        {
            title: "Progress Over Perfection",
            description: "Progress matters more than perfection."
        },
        {
            title: "Safe, Age-Appropriate AI Tools",
            description: "Safe, age-appropriate AI tools are used."
        },
        {
            title: "Parent Updates & Transparency",
            description: "Parents receive updates & full transparency."
        },
        {
            title: "Meaningful Learning, No False Promises",
            description: "No false promises-only meaningful learning & real improvement."
        }
    ];
    return (
        <section className="w-full flex flex-col gap-10 md:gap-15 fp  max-container ">
            {/* First Row */}
            <div className="flex flex-col items-center gap-4">
                <h2 className="text-center text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-semibold font-general-sans">What Makes  <span className="gradient-text">AiMS Different</span></h2>
                <p className="text-center">Not just another online class.<br /> AiMS is a human, live, mentorship-driven learning system designed for growing minds. At AiMS.</p>
            </div>
            {/* End of First Row */}

            <FadeAnimation
                selector="li"
                animation="fadeUp"
                stagger={0.12}
                className="w-full grid grid-cols-1 grid-rows-repeat[6,auto] sm:grid-cols-2 sm:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-6 md:gap-8 xl:gap-10 xxl:gap-18"
            >
                {differentData.map((item, index) => (
                    <li key={index} className="relative flex flex-col gap-3 md:gap-5 p-8 rounded-l-[50px] hover:rounded-l-[40px] hover:cursor-pointer bg-white overflow-hidden transition-[border-radius] duration-300 ease-in-out group list-none">
                        {/* Gradient overlay - fades in on hover */}
                        <div className="absolute inset-0 primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>

                        <div className="relative z-10 text-6xl mlg:text-7xl xxl:text-[100px] font-syne gradient-text group-hover:text-white leading-none -mt-5 transition-colors duration-300">0{index + 1}</div>
                        <h3 className="relative z-10 text-base mlg:text-lg md:text-xl xxl:text-2xl font-lato font-medium text-text-dark group-hover:text-white leading-tight transition-colors duration-300">{item.title}</h3>
                        <p className="relative z-10 group-hover:text-white transition-colors duration-300">{item.description}</p>
                    </li>
                ))}
            </FadeAnimation>

        </section>
    );
}
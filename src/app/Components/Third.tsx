import FadeAnimation from "./FadeAnimation";

export default function Third() {

    const data = [
        {
            title: "Future Ready",
            image: "/images/future-ready.webp",
        },
        {
            title: "AI Innovator",
            image: "/images/ai-innovator.webp",
        },
        {
            title: "Creative Maker",
            image: "/images/creative-maker.webp",
        },
        {
            title: "Confident\nCommunicator",
            image: "/images/confident.webp",
        },
    ]
    return (
        <FadeAnimation
            selector=".card"
            animation="scaleUp"
            stagger={0.12}
            className="grid grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 gap-5 md:gap-8 xl:gap-10 fp max-container text-accent text-2xl md:text-3xl xl:text-4xl xxl:text-[42px] font-semibold font-general-sans"
        >
            {data.map((item, index) => (
                <div key={index} className="card group relative flex items-center justify-center h-[200px] md:h-[250px] xl:h-[300px] bg-cover bg-center rounded-[20px] after:rounded-[20px] after:content-[''] after:absolute after:inset-0 after:overlay lg:after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100 hover:cursor-pointer whitespace-pre-wrap text-center leading-tight" style={{ backgroundImage: `url(${item.image})` }}>
                    <div className="lg:hidden z-10 relative lg:group-hover:block"> {item.title}</div>
                </div>
            ))}
        </FadeAnimation>
    );
}
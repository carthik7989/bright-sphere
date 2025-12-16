

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
            title: "Confident Communicator",
            image: "/images/confident.webp",
        },
    ]
    return (
        <section className="grid grid-cols-2 grid-row-2 gap-10 fp max-container text-accent text-[42px] font-semibold font-general-sans">
            {data.map((item, index) => (
                <div key={index} className="relative flex items-center justify-center min-h-[300px] bg-cover bg-center rounded-[20px] after:rounded-[20px] after:content-[''] after:absolute after:inset-0 after:overlay" style={{ backgroundImage: `url(${item.image})` }}>
                    <div className="hidden z-10 relative"> {item.title}</div>
                </div>
            ))}

        </section>
    );
}
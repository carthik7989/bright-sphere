import Pill from "./Pill";
import CheckListItem from "./CheckListItem";
export default function Trust() {
    const checkListItems = [
        "Live mentor-led classes",
        "Small batches",
        "Industry-trained instructors",
        "Child-safe AI tools",
        "Parent orientation & updates",
        "Limited seats for personalised attention"
    ]
    return (
        <section className="w-full fp bg-white">
            <div className="flex flex-col-reverse sm:flex-row gap-11 sm:gap-8 lg:gap-11 max-container">
                <div className="w-full md:w-1/2 h-[284px] sm:h-auto bg-[url('/images/trust.webp')] bg-cover bg-center bg-no-repeat rounded-bl-[30px] md:rounded-bl-[120px]"></div>
                <div className="w-full md:w-1/2 flex flex-col items-center sm:items-start gap-4">
                    <Pill text="Trust & Safety" icon="/icons/trust.svg"></Pill>
                    <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-semibold font-general-sans">Trust &  <span className="gradient-text">Safety</span> </h2>
                    <p className="text-center sm:text-left">We prioritize trust and safety to ensure a secure and reliable learning environment for every student.</p>

                    <div className="flex flex-col gap-4 self-start mt-6 sm:mt-0 lg:mt-6">
                        {checkListItems.map((item, index) => (
                            <CheckListItem key={index}>{item}</CheckListItem>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
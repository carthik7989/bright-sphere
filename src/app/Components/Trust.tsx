import Pill from "./Pill";
import CheckListItem from "./CheckListItem";
export default function Trust() {
    return (
        <section className="w-full fp bg-white">
            <div className="flex gap-11 max-container">
                <div className="w-1/2 bg-[url('/images/trust.webp')] bg-cover bg-center bg-no-repeat rounded-bl-[120px]"></div>
                <div className="w-1/2 flex flex-col items-start gap-4">
                    <Pill text="Trust & Safety" icon="/icons/trust.svg"></Pill>
                    <h2 className="text-[42px] font-semibold font-general-sans">Trust &  <span className="gradient-text">Safety</span> </h2>
                    <p className="">We prioritize trust and safety to ensure a secure and reliable learning environment for every student.</p>

                    <div className="flex flex-col gap-4 mt-6">
                        <CheckListItem>Live mentor-led classes</CheckListItem>
                        <CheckListItem>Small batches</CheckListItem>
                        <CheckListItem>Industry-trained instructors</CheckListItem>
                        <CheckListItem>Child-safe AI tools</CheckListItem>
                        <CheckListItem>Parent orientation & updates</CheckListItem>
                        <CheckListItem>Limited seats for personalised attention</CheckListItem>

                    </div>
                </div>
            </div>
        </section>
    );
}
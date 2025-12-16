import CheckListItem from "./CheckListItem";

export default function Who() {

    const checkListItems = [
        "Are curious about technology",
        "Want to use AI meaningfully",
        "Need structured guidance",
        "Want to build confidence in speaking",
        "Enjoy hands-on creative projects",
        "Want to learn from industry experts",
    ]
    return (
        <section className="w-full fp bg-[url('/images/girl-3.webp')] bg-cover bg-center bg-no-repeat">
            <div className="w-full flex flex-col gap-4 max-container text-white">
                <h2 className="text-[42px] font-semibold font-general-sans">Who This Program Is For</h2>
                <p className="text-white">Students who:</p>
                <div className="flex flex-col gap-4 mt-6">
                    {checkListItems.map((item, index) => (
                        <CheckListItem key={index} bgClass="bg-white" svgColor="#e1989f" textColor="text-white" >{item}</CheckListItem>
                    ))}

                </div>
            </div>
        </section>
    );
}
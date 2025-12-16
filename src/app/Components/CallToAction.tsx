import PrimaryButton from "./PrimaryButton";

export default function CallToAction() {
    return (
        <section className="w-full fp bg-[url('/images/call-to-action.webp')] bg-center bg-cover bg-no-repeat">
            <div className="flex flex-col items-center gap-8 max-container text-white">
                <h2 className="text-[64px] font-general-sans font-semibold leading-tight">₹1,00,000 for Best <br /> AI Creative Project</h2>
                <div className="w-[60%] text-2xl text-center">Awarded to students who create the most original, innovative, and impactful AI project.</div>
                <PrimaryButton className="px-19 mt-3">Enroll Now</PrimaryButton>
            </div>
        </section>
    );
}

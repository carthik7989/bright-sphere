import PrimaryButton from "./PrimaryButton";

export default function CallToAction() {
    return (
        <section className="w-full fp bg-[url('/images/call-to-action.webp')] bg-center bg-cover bg-no-repeat text-center">
            <div className="flex flex-col items-center gap-5 md:gap-8 max-container text-white">
                <h2 className="text-2xl sm:text-4xl md:text-[40px] lg:text-5xl xl:text-[52px] xxl:text-[64px] font-general-sans font-semibold leading-tight">₹1,00,000 for Best <br className="sm:hidden lg:block" /> AI Creative Project</h2>
                <div className="w-[85%] lg:w-[60%] text-base md:text-xl xl:text-[22px] xxl:text-2xl text-center leading-tight">Awarded to students who create the most original, innovative, and impactful AI project.</div>
                <PrimaryButton className="px-19 mt-5 md:mt-3">Enroll Now</PrimaryButton>
            </div>
        </section>
    );
}

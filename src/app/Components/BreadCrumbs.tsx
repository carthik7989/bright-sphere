import Link from "next/link";
interface BreadCrumbsProps {
    title: string;
}

export default function BreadCrumbs({ title }: BreadCrumbsProps) {
    return (
        <section className="w-full flex flex-col gap-4 sm:gap-6 xl:gap-8 items-center justify-center fpx fpb pt-30 md:pt-35  primary transition-none">
            <h2 className="text-2xl mlg:text-3xl sm:text-4xl md:text-5xl xl:text-6xl xxl:text-7xl font-semibold font-general-sans text-white">{title}</h2>
            <Link href="/" className="text-xs sm:text-sm xl:text-base font-medium bg-white rounded-full px-6 py-2 text-secondary">Home</Link>

        </section>
    );
}
interface SecondaryButtonProps {
    children: React.ReactNode;
    className?: string;

}

export default function SecondaryButton({ children, className }: SecondaryButtonProps) {
    return (
        <button className={`${className} px-5 py-3 md:px-11 md:py-4 text-text-dark text-sm sm:text-base xl:text-lg font-open-sans font-semibold rounded-full border border-text-dark cursor-pointer`}>{children}</button>
    );
}

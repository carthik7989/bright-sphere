interface SecondaryButtonProps {
    children: React.ReactNode;
    className?: string;
}

export default function SecondaryButton({ children, className }: SecondaryButtonProps) {
    return (
        <button className={`${className} px-11 py-4 text-text-dark text-lg font-open-sans font-semibold rounded-full border border-text-dark`}>{children}</button>
    );
}
interface PrimaryButtonProps {
    children: React.ReactNode;
    className?: string;
}

export default function PrimaryButton({ children, className }: PrimaryButtonProps) {

    return (
        <button className={`${className} px-11 py-4 text-white text-lg font-open-sans font-semibold rounded-full primary`}>{children}</button>
    );
}   
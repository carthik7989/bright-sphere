import Image from "next/image";

interface PillProps {
    icon?: string;
    text: string;
    alt?: string;
    iconClassName?: string;
}

export default function Pill({ icon, text, alt, iconClassName }: PillProps) {
    return (

        <div className="relative inline-flex items-center justify-center">
            {/* Glow background */}
            <div className="absolute inset-0 rounded-full primary blur-xl opacity-70"></div>

            {/* Main pill */}
            <div className="relative flex gap-3 items-center bg-white rounded-full px-5 py-3 shadow-xl">
                {icon && <Image src={icon} alt={alt || ""} width={24} height={24} className={iconClassName} />}
                <div className="text-lg font-bold font-open-sans gradient-text  ">{text}</div>
            </div>
        </div>

    );
}
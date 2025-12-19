import Image from "next/image";

interface PillProps {
    icon?: string;
    text: string;
    alt?: string;
    iconClassName?: string;
    wrapperClassName?: string;
    textClassName?: string;
}

export default function Pill({ icon, text, alt, iconClassName, wrapperClassName, textClassName }: PillProps) {
    return (

        <div className={`${wrapperClassName} relative inline-flex items-center justify-center`}>
            {/* Glow background */}
            <div className="absolute inset-0 rounded-full primary blur-xl opacity-70"></div>

            {/* Main pill */}
            <div className="relative flex gap-2 md:gap-3 items-center bg-white rounded-full px-4 py-2 md:px-5 md:py-3 shadow-xl">
                {icon && <Image src={icon} alt={alt || ""} width={24} height={24} className={`w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[24px] lg:h-[24px] ${iconClassName}`} />}
                <div className={`text-xs sm:text-sm xl:text-base xxl:text-lg font-bold font-open-sans gradient-text ${textClassName}`}>{text}</div>
            </div>
        </div>

    );
}
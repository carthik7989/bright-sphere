interface CheckListItemProps {
    children: React.ReactNode;
    bgClass?: string;
    bgSize?: string;
    svgSize?: string;
    svgColor?: string;
    textColor?: string;
    gap?: string;
}

export default function CheckListItem({
    children,
    bgClass = "bg-[#32CC3F]",
    bgSize = "w-5 h-5 xxl:w-6 xxl:h-6",
    svgSize = "w-4 h-4",
    svgColor = "#fff",
    textColor = "text-text-dark ",
    gap = "gap-3",
}: CheckListItemProps) {
    return (
        <div className={`flex ${gap} items-center`}>
            <div className={`flex justify-center items-center ${bgSize} ${bgClass} rounded-full shrink-0`}>
                <svg className={svgSize} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 12L10.2426 16.2426L18.727 7.75732" stroke={svgColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className={` text-sm md:text-base xxl:text-xl text-${textColor} font-open-sans font-semibold leading-tight`}>{children}</div>
        </div>
    );
}

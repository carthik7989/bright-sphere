import Image from "next/image";

export default function Toolkit() {
    const toolkitData = [

        "Writing & Research tools",
        "Presentation helpers",
        "Brainstorming tools",
        "ChatGPT,Gemini, Perplexity",
        "And other safe, student-friendly AI platforms",
        "Helps students turn ideas into polished work."



    ]
    return (
        <section className="w-full ">
            <div className="w-full flex flex-col-reverse lg:flex-row gap-11 fp max-container">
                {/* Left Column */}
                <div className="w-full lg:w-1/2 h-[120px] mmd:h-[140px] mlg:h-[160px] md:h-[200px] lg:h-auto relative ">
                    {/* Leanardo AI */}
                    <Image className="absolute -top-5 left-2 xxl:top-20 xl:left-20 w-[15%] mlg:w-[13%] sm:w-[10%] lg:w-[20%] xl:w-[16%] " src="/icons/ai/leonardo.svg" alt="Leonardo AI" width={70} height={68} />
                    {/* Gemini AI */}
                    <Image className="absolute top-8 right-20 mmd:right-25 sm:top-12 sm:right-45 lg:top-0 lg:right-25 xl:top-5 xxl:top-25 xxl:right-40 w-[25%] mlg:w-[20%] sm:w-[17%] lg:w-[32%] xl:w-[25%] " src="/icons/ai/gemini-text.svg" alt="Gemini AI" width={249} height={59} />
                    {/* Bard AI */}
                    <Image className="absolute -top-5 left-25 sm:left-45 md:top-5 lg:top-30 lg:left-5  xxl:top-60 xxl:left-0 w-[20%] mlg:w-[16%] sm:w-[15%] lg:w-[27%] xl:w-[25%] " src="/icons/ai/bard-text.svg" alt="Bard AI" width={362} height={127} />
                    {/* ChatGPT AI */}
                    <Image className="absolute -top-2 right-0 lg:top-30  xxl:top-50 xxl:right-10 w-[20%] mlg:w-[17%] sm:w-[15%] md:w-[13%] lg:w-[27%] xl:w-[24%] " src="/icons/ai/chatgpt.svg" alt="ChatGPT AI" width={512} height={509} />
                    {/* Copilot AI */}
                    <Image className="absolute bottom-13 left-5 mmd:bottom-15 mlg:bottom-18 lg:bottom-80 xl:bottom-65  xxl:bottom-60 xxl:left-15 w-[27%] mlg:w-[23%] sm:w-[18%] lg:w-[42%] xl:w-[40%] xxl:w-[42%] " src="/icons/ai/copilot-text.svg" alt="Copilot AI" width={229} height={64} />
                    {/* Gamma AI */}
                    <Image className="absolute bottom-8 right-0 mlg:bottom-12 mlg:right-10 md:bottom-15 lg:bottom-60 xl:bottom-50 xxl:bottom-60 xxl:right-10 w-[25%] mlg:w-[22%] sm:w-[18%] lg:w-[45%] xl:w-[35%] xxl:w-[30%] " src="/icons/ai/gamma.svg" alt="Gamma AI" width={1111} height={192} />
                    {/* Lovable AI */}
                    <Image className="absolute -bottom-5 left-0 lg:bottom-10 xl:bottom-10  xxl:bottom-0 xxl:left-0 w-[28%] mlg:w-[25%] sm:w-[20%] lg:w-[35%] xl:w-[30%] " src="/icons/ai/lovable-text.svg" alt="Lovable AI" width={911} height={155} />
                    {/* Perplexity AI */}
                    <Image className="absolute bottom-3 left-15 mlg:bottom-5 sm:left-30 md:left-50 lg:left-0 lg:bottom-30 xl:bottom-35 xxl:bottom-30 xxl:left-0 w-[38%] mlg:w-[35%] sm:w-[28%] lg:w-[50%] xl:w-[40%] " src="/icons/ai/perplexity-text.svg" alt="Perplexity AI" width={1588} height={400} />
                    {/* Loom AI */}
                    <Image className="absolute -bottom-5 right-0 lg:bottom-20  xxl:bottom-20 xxl:right-20 w-[23%] mlg:w-[20%] sm:w-[17%] lg:w-[33%] xl:w-[25%] " src="/icons/ai/loom-text.svg" alt="Loom AI" width={117} height={48} />
                </div>
                {/* End of Left Column */}

                {/* Right Column */}
                <div className="w-full lg:w-1/2 flex flex-col gap-11 items-center ">
                    <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-general-sans font-semibold text-text-dark"><span className="gradient-text">AI Toolkit </span>Students Use</h2>


                    <div className="grid grid-cols-2 grid-rows-repeat[3,auto] sm:grid-cols-3 sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-3 gap-3 md:gap-5 text-center">
                        {toolkitData.map((item, index) => (
                            <div className="flex flex-col justify-center items-center gap-3 bg-white rounded-[15px] p-3 md:p-6">
                                <div className="text-4xl md:text-[42px]  xxl:text-[64px] font-general-sans font-semibold gradient-text leading-none">0{index + 1}</div>
                                <div className="text-sm md:text-base  xxl:text-[22px] font-lato font-medium leading-tight">{item}</div>
                            </div>
                        ))}

                    </div>
                </div>
                {/* End of Right Column */}
            </div>
        </section>
    )
}
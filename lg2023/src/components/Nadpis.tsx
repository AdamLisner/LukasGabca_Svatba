import Image from 'next/image';
import hearts_gold from '../pages/assets/hearts_gold.png';
import { Kaushan_Script, Cinzel } from "next/font/google";
const cinzel = Cinzel({subsets: ["latin"], weight: "400"})
const kaushan = Kaushan_Script({ subsets: ["latin"], weight: "400" });

interface StorySectionProps {
  headingText: string;
}

export function Nadpis({ headingText }: StorySectionProps) {
  return (
    <div className="flex flex-row gap-6 mb-16 mx-auto text-center justify-center items-center max-w-[95vw]">
      <Image
        src={hearts_gold}
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <h1 className={`${cinzel.className} flex items-center text-center text-4xl font-semibold text-gray-900`}>
        {headingText}
      </h1>
      <Image
        src={hearts_gold}
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </div>
  );
}

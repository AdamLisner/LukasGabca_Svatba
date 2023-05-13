import Image from 'next/image';
import hearts_gold from '../pages/assets/hearts_gold.png';

interface StorySectionProps {
  headingText: string;
}

export function Nadpis({ headingText }: StorySectionProps) {
  return (
    <div className="flex flex-row gap-6 mb-16">
      <Image
        src={hearts_gold}
        width={50}
        height={50}
        alt="Picture of the author"
      />
      <h1 className="flex items-center text-2xl font-semibold text-gray-900">
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

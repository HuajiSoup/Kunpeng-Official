import Image, { StaticImageData } from "next/image";

interface PageSectionTitleProps {
  img: StaticImageData;
};

export default function ShadowBackground({
  img
}: PageSectionTitleProps) {
  return (
    <div className="absolute inset-0 w-full h-max max-h-[55vh] pointer-events-none z-0">
      <Image src={img} alt="Background Image" 
        objectFit="contain" 
        className="opacity-30 w-[95%] h-auto mx-auto rounded-xl" 
      />
      <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-white to-transparent z-0" />
    </div>
  );
}
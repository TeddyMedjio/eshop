import Image from "next/image";

export default function SliderLogos() {
  return (
    <div className="bg-black h-[92px] md:h-[100px] w-full flex items-center justify-center">
      <div className="slider">
        <div className="slide-track">
          {/* w-full flex items-center justify-center gap-10 */}
          <div className="relative  h-[38px] slide ">
            <Image
              src="/images/versace.svg"
              alt="logo"
              fill={true}
              draggable={false}
              className="absolute object-contain"
            />
          </div>
          <div className="relative  h-[33px] slide">
            <Image
              src="/images/zara.svg"
              alt="logo"
              fill={true}
              draggable={false}
              className="absolute object-contain"
            />
          </div>
          <div className="relative h-[33px] slide ">
            <Image
              src="/images/gucci.svg"
              alt="logo"
              fill={true}
              draggable={false}
              className="absolute object-contain"
            />
          </div>
          <div className="relative  h-[33px] slide ">
            <Image
              src="/images/prada.svg"
              alt="logo"
              fill={true}
              draggable={false}
              className="absolute object-contain"
            />
          </div>
          <div className="relative  h-[33px] slide ">
            <Image
              src="/images/calvinklein.svg"
              alt="logo"
              fill={true}
              draggable={false}
              className="absolute object-contain"
            />
          </div>
          <div className="relative  h-[38px] slide">
            <Image
              src="/images/versace.svg"
              alt="logo"
              fill={true}
              draggable={false}
              className="absolute object-contain"
            />
          </div>
          <div className="relative  h-[33px] slide">
            <Image
              src="/images/zara.svg"
              alt="logo"
              fill={true}
              draggable={false}
              className="absolute object-contain"
            />
          </div>
          <div className="relative  h-[33px] slide">
            <Image
              src="/images/gucci.svg"
              alt="logo"
              fill={true}
              draggable={false}
              className="absolute object-contain"
            />
          </div>
          <div className="relative  h-[33px] slide">
            <Image
              src="/images/prada.svg"
              alt="logo"
              fill={true}
              draggable={false}
              className="absolute object-contain"
            />
          </div>
          <div className="relative  h-[33px] slide">
            <Image
              src="/images/calvinklein.svg"
              alt="logo"
              fill={true}
              draggable={false}
              className="absolute object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

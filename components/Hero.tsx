import Link from "next/link";
import Image from "next/image";
import Stats from "./Stats";

export default function Hero() {
  return (
    <div className="bg-[#F2F0F1] md:h-[1263px] lg:h-[663px] w-full ">
      <div className="md:mx-auto md:container lg:pt-0 md:px-4 flex flex-col lg:flex-row items-center lg:justify-start h-full">
        <div className=" w-full lg:max-w-[577px] flex flex-col gap-8 py-12 lg:py-0 px-4 md:px-0">
          {/* title */}
          <h1 className="font-[family-name:var(--integralcf-)] text-black text-[36px] leading-[34px] md:text-[64px] md:leading-[64px]">
            find clothes that matches your style
          </h1>
          <p className="text-black/80 text-sm md:text-base font-[family-name:var(--satoshi-)]">
            Parcourez notre gamme diversifiée de vêtements méticuleusement
            confectionnés, conçus pour faire ressortir votre individualité et
            répondre à votre sens du style.
          </p>

          {/* button */}
          <button className=" w-full md:w-fit font-[family-name:var(--satoshi-)] px-14 py-4 bg-black text-white duration-300  hover:scale-95 rounded-xl">
            <Link href="/">Découvrir Plus</Link>
          </button>
          {/* statistiques */}
          <Stats />
        </div>

        <div className="relative mt-20 md:mt-0 w-full py-44 md:py-0 h-[548px] lg:w-0 lg:h-full flex-1 bg-[url('/images/backgroundzara.jpg')] bg-no-repeat bg-cover md:bg-cover bg-center">
          <div className="absolute top-10 md:top-20 right-0 animate-pulse">
            <Image
              src="/images/star.svg"
              width={104}
              height={104}
              alt="image etoile"
            />
          </div>
          <div className="absolute top-1/2 left-0 animate-pulse-two">
            <Image
              src="/images/star.svg"
              width={56}
              height={56}
              alt="image etoile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

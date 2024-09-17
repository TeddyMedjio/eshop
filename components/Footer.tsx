import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";

const link = [
  { id: 1, href: "#", text: "A propos" },
  { id: 2, href: "#", text: "Caracteristiques" },
  { id: 3, href: "#", text: "Travaux" },
  { id: 4, href: "#", text: "Carrière" },
];
const help = [
  { id: 1, href: "#", text: "Service Client" },
  { id: 2, href: "#", text: "Details de Livraison" },
  { id: 3, href: "#", text: "Termes et Conditions" },
  { id: 4, href: "#", text: "politique de confidentialité" },
];
const faq = [
  { id: 1, href: "#", text: "Compte" },
  { id: 2, href: "#", text: "Livraisons" },
  { id: 3, href: "#", text: "Commandes" },
  { id: 4, href: "#", text: "Paiement" },
];
const ressources = [
  { id: 1, href: "#", text: "eBooks Gratuits" },
  { id: 2, href: "#", text: "Developpement" },
  { id: 3, href: "#", text: "Blog" },
  { id: 4, href: "#", text: "Youtube" },
];

export default function Footer() {
  return (
    <div className="bg-gris flex flex-col items-center justify-center pt-52 md:pt-56 lg:pt-32 relative">
      <Newsletter />
      <div className="mx-auto container px-4 flex flex-col items-center justify-center">
        <div className="grid grid-cols-2 md:grid-cols-5 space-y-10 md:space-y-0 md:space-x-10 mt-20 w-full border-b pb-10">
          {/* Logo */}
          <div className=" col-span-2 md:col-span-1">
            <Link href="/">
              <Image
                src="/images/logoeshop.svg"
                width={148}
                height={27}
                alt="logo"
              />
            </Link>
            <p className="text-black/50 text-sm font-[family-name:var(--satoshi-)] my-5">
              Nous avons des vêtements qui correspondent à votre style et que
              vous êtes fier de porter. Des hommes, femmes et enfants.
            </p>
            <ul className="flex items-center gap-2">
              <li className="group transition-all duration-300 hover:bg-black h-10 w-10 border border-black/20 bg-white rounded-full flex items-center justify-center">
                <Link
                  href="/"
                  className="h-full w-full flex items-center justify-center"
                >
                  <Image
                    src="/images/twitter.svg"
                    width={18}
                    height={14}
                    alt="logo"
                    className=" group-hover:invert"
                  />
                </Link>
              </li>
              <li className="group transition-all duration-300 hover:bg-black h-10 w-10 border border-black/20 bg-white rounded-full flex items-center justify-center">
                <Link
                  href="/"
                  className="h-full w-full flex items-center justify-center"
                >
                  <Image
                    src="/images/facebook.svg"
                    width={12}
                    height={8}
                    alt="logo"
                    className=" group-hover:invert"
                  />
                </Link>
              </li>

              <li className="group transition-all duration-300 hover:bg-black h-10 w-10 border border-black/20 bg-white rounded-full flex items-center justify-center">
                <Link
                  href="/"
                  className="h-full w-full flex items-center justify-center"
                >
                  <Image
                    src="/images/instagram.svg"
                    width={18}
                    height={18}
                    alt="logo"
                    className=" group-hover:invert"
                  />
                </Link>
              </li>
              <li className="group transition-all duration-300 hover:bg-black h-10 w-10 border border-black/20 bg-white rounded-full flex items-center justify-center">
                <Link
                  href="/"
                  className="h-full w-full flex items-center justify-center"
                >
                  <Image
                    src="/images/githup.svg"
                    width={20}
                    height={20}
                    alt="logo"
                    className=" group-hover:invert"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* Liens Compagnie */}
          <div className="flex flex-col gap-4 col-span-1">
            <p className="uppercase font-[family-name:var(--satoshibold-)]">
              compagnie
            </p>
            {link.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-black/50 font-[family-name:var(--satoshi-)] hover:underline transition-all duration-300"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Liens help */}
          <div className="flex flex-col gap-4 col-span-1">
            <p className="uppercase font-[family-name:var(--satoshibold-)]">
              help
            </p>
            {help.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-black/50 font-[family-name:var(--satoshi-)] hover:underline transition-all duration-300"
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Liens faq */}
          <div className="flex flex-col gap-4 col-span-1">
            <p className="uppercase font-[family-name:var(--satoshibold-)]">
              faq
            </p>
            {faq.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-black/50 font-[family-name:var(--satoshi-)] hover:underline transition-all duration-300"
              >
                {item.text}
              </Link>
            ))}
          </div>
          {/* Liens ressources */}
          <div className="flex flex-col gap-4 col-span-1">
            <p className="uppercase font-[family-name:var(--satoshibold-)]">
              ressources
            </p>
            {ressources.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-black/50 font-[family-name:var(--satoshi-)] hover:underline transition-all duration-300"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
        {/* copyright */}
        <div className="my-5 flex flex-col md:flex-row items-center justify-center md:justify-between w-full gap-2 md:gap-0 mb-5">
          <p className="text-black/50 font-[family-name:var(--satoshi-)] text-sm">
            <span className="font-[family-name:var(--satoshibold-)]">
              {" "}
              E.shop
            </span>{" "}
            © {new Date().getFullYear()}, All Rights Reserved
          </p>
          <div className="flex items-center">
            <Image
              src="/images/googlepay.png"
              quality={100}
              alt="logo"
              width={60}
              height={32}
            />
            <Image
              src="/images/visa.png"
              quality={100}
              alt="logo"
              width={60}
              height={30}
            />
            <Image
              src="/images/paypal.png"
              quality={100}
              alt="logo"
              width={60}
              height={32}
            />
            <Image
              src="/images/pay.png"
              quality={100}
              alt="logo"
              width={60}
              height={32}
            />
            <Image
              src="/images/googlepay.png"
              quality={100}
              alt="logo"
              width={60}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

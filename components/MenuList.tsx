"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-black/95 backdrop-blur-md">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <span className="relative flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md">
                    <video
                      className=" object-cover object-center h-full w-full overflow-hidden "
                      autoPlay
                      loop
                      muted
                      playsInline
                      poster="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1715846818/ypdpqn4sxlybqy7ebmcy.webp"
                    >
                      <source
                        src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1726154211/Zara_Beauty_cop0ff.mp4"
                        type="video/mp4"
                      />
                      <source
                        src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1726154441/Zara_c8hrhe.webm"
                        type="video/webm"
                      />
                    </video>
                    {/* <Image
                      src="/images/background.png"
                      fill={true}
                      alt="image"
                      className="absolute object-cover object-center"
                    /> */}
                  </span>
                </NavigationMenuLink>
              </li>
              <ListItem href="/categories/hommes" title="Hommes">
                Des classiques intemporels qui représentent le style
                emblematique.
              </ListItem>
              <ListItem href="/categories/femmes" title="Femmes">
                Dites vos propres règles et concrétisez vos ambitions avec un
                style unique.
              </ListItem>
              <ListItem href="/categories/enfants" title="Enfants">
                C&apos;est une nouvelle aventure! Assurer vous que votre enfant
                dispose de tout ce qu&apos;il lui faut
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/en-vente" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              En Vente
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/nouveautes" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Nouveautés
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/brands" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Brands
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#313131] hover:text-white focus:bg-[#313131] focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-white font-[family-name:var(--integralcf-)]">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-[#cacaca] font-[family-name:var(--satoshi-)]">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

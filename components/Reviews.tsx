"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Avis from "./Avis";
import { CheckCircle } from "lucide-react";
import { Product } from "@/lib/models/ProductModels";

type Props = {
  product: Product;
};

export function Reviews({ product }: Props) {
  return (
    <Tabs defaultValue="avis" className="w-full ">
      <TabsList className="grid w-full grid-cols-3 ">
        <TabsTrigger value="details">Détails</TabsTrigger>
        <TabsTrigger value="avis">Avis</TabsTrigger>
        <TabsTrigger value="faq">FAQs</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <Card>
          <CardContent className="space-y-5">
            <div className="border p-4 rounded-lg bg-black/5">
              <h3 className="text-lg font-[family-name:var(--satoshibold-)] uppercase">
                features
              </h3>
              <ul className="space-y-1 font-[family-name:var(--satoshi-)] text-black/70 mt-3">
                {product.features.map((item) => (
                  <li
                    key={Math.random() * 3000}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    <CheckCircle size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border p-4 rounded-lg bg-black/5">
              <h3 className="text-lg font-[family-name:var(--satoshibold-)] uppercase">
                fabric
              </h3>
              <ul className="space-y-1 font-[family-name:var(--satoshi-)] text-black/70 mt-3">
                {product.fabric.map((item) => (
                  <li
                    key={Math.random() * 200}
                    className="flex items-center gap-2"
                  >
                    {" "}
                    <CheckCircle size={16} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border p-4 rounded-lg bg-black/5">
              <h3 className="text-lg font-[family-name:var(--satoshibold-)] uppercase">
                shipping
              </h3>
              <p className="font-[family-name:var(--satoshi-)] text-black/70">
                <ul className="space-y-1 font-[family-name:var(--satoshi-)] text-black/70 mt-3">
                  {product.shipping.map((item) => (
                    <li
                      key={Math.random() * 300}
                      className="flex items-center gap-2"
                    >
                      {" "}
                      <CheckCircle size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="avis">
        <Card>
          <CardContent>
            <Avis />
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="faq">
        <Card>
          <CardContent className="space-y-5">
            <div className="border p-4 rounded-lg bg-black/5">
              <h3 className="text-lg font-[family-name:var(--satoshibold-)]">
                COMPOSITION
              </h3>
              <p className="font-[family-name:var(--satoshi-)] text-black/70">
                Nous travaillons avec des programmes de suivi pour garantir le
                respect de nos standards sociaux, environnementaux ainsi que de
                sécurité et d&apos;hygiène de nos produits. Pour évaluer sa
                conformité, nous avons développé un programme d&apos;audits et
                de plans d’amélioration continue.{" "}
                <span className="font-[family-name:var(--satoshibold-)]">
                  EXTÉRIEUR 100% coton.
                </span>
              </p>
            </div>
            <div className="border p-4 rounded-lg bg-black/5">
              <h3 className="text-lg font-[family-name:var(--satoshibold-)]">
                ENTRETIEN
              </h3>
              <p className="font-[family-name:var(--satoshi-)] text-black/70">
                Prendre soin de vos vêtements, c&apos;est prendre soin de
                l&apos;environnement. Les lavages à basse température et les
                programmes d&apos;essorage doux sont plus délicats avec les
                vêtements, ils aident à conserver la couleur, la forme et la
                structure du tissu. Ils réduisent en même temps la consommation
                d&apos;énergie qui est utilisée dans les processus
                d&apos;entretien.
              </p>
            </div>
            <div className="border p-4 rounded-lg bg-black/5">
              <h3 className="text-lg font-[family-name:var(--satoshibold-)] uppercase">
                Traçabilité
              </h3>
              <p className="font-[family-name:var(--satoshi-)] text-black/70">
                Nous travaillons avec nos fournisseurs pour connaître les
                différentes installations où se déroulent les processus de
                fabrication de nos produits. Ceci est capital pour garantir le
                respect de nos normes sociales et environnementales. Les
                processus de fabrication suivants de ce produit ont été
                développés en: Tissage Turquie Teinture et I&apos;mpression
                Turquie Confection Turquie.
              </p>
            </div>
            <div className="border p-4 rounded-lg bg-black/5">
              <h3 className="text-lg font-[family-name:var(--satoshibold-)] uppercase">
                emballage
              </h3>
              <p className="font-[family-name:var(--satoshi-)] text-black/70">
                Notre programme Green To Pack nous permet de revoir la
                conception de nos emballages afin de faciliter leur
                réutilisation et leur recyclage ultérieur. Plus d’informations
                sur leurs caractéristiques et leurs qualités environnementales.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

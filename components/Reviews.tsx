import { Card, CardContent } from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Avis from "./Avis";

export function Reviews() {
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
              <h3 className="text-lg font-[family-name:var(--satoshibold-)]">
                COMPOSITION
              </h3>
              <p className="font-[family-name:var(--satoshi-)] text-black/70">
                Nous travaillons avec des programmes de suivi pour garantir le
                respect de nos standards sociaux, environnementaux ainsi que de
                sécurité et d'hygiène de nos produits. Pour évaluer sa
                conformité, nous avons développé un programme d'audits et de
                plans d’amélioration continue.{" "}
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
                Prendre soin de vos vêtements, c'est prendre soin de
                l'environnement. Les lavages à basse température et les
                programmes d'essorage doux sont plus délicats avec les
                vêtements, ils aident à conserver la couleur, la forme et la
                structure du tissu. Ils réduisent en même temps la consommation
                d'énergie qui est utilisée dans les processus d'entretien.
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
                développés en: Tissage Turquie Teinture et I'mpression Turquie
                Confection Turquie.
              </p>
            </div>
            <div className="border p-4 rounded-lg bg-black/5">
              <h3 className="text-lg font-[family-name:var(--satoshibold-)] uppercase">
                emballage
              </h3>
              <p className="font-[family-name:var(--satoshi-)] text-black/70">
                Notre programme{" "}
                <span className="font-[family-name:var(--satoshibold-)]">
                  Green To Pack
                </span>{" "}
                nous permet de revoir la conception de nos emballages afin de
                faciliter leur réutilisation et leur recyclage ultérieur. Plus
                d’informations sur leurs caractéristiques et leurs qualités
                environnementales.
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
                sécurité et d'hygiène de nos produits. Pour évaluer sa
                conformité, nous avons développé un programme d'audits et de
                plans d’amélioration continue.{" "}
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
                Prendre soin de vos vêtements, c'est prendre soin de
                l'environnement. Les lavages à basse température et les
                programmes d'essorage doux sont plus délicats avec les
                vêtements, ils aident à conserver la couleur, la forme et la
                structure du tissu. Ils réduisent en même temps la consommation
                d'énergie qui est utilisée dans les processus d'entretien.
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
                développés en: Tissage Turquie Teinture et I'mpression Turquie
                Confection Turquie.
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

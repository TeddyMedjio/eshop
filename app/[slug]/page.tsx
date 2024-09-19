import AlsoLike from "@/components/AlsoLike";
import { BreadcrumbCustom } from "@/components/Breadcrumb";
import DetailsProduct from "@/components/DetailsProduct";
import ProductNotFound from "@/components/ProductNotFound";
import { Reviews } from "@/components/Reviews";
import { Product } from "@/lib/models/ProductModels";

async function getProducts() {
  const res = await fetch("http://localhost:4000/products");
  return res.json();
}
export default async function ProductDetails({
  params,
}: {
  params: { slug: string };
}) {
  const products: Product[] = await getProducts();
  const product = products.find((x) => x.slug === params.slug);

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <div className="mx-auto container px-4 md:px-0 pb-20  ">
      <BreadcrumbCustom
        link={product.collection}
        collection={product.collection}
        product={product.name}
      />
      <DetailsProduct
        image={product.image_url}
        name={product.name}
        price={product.price}
        sold={product.sold}
        description={product.description}
        color={product.color}
      />
      <Reviews />
      <AlsoLike />
    </div>
  );
}

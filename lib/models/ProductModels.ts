export type Product = {
  name: string;
  slug: string;
  image_url: string;
  price: number;
  sold?: string | "";
  description: string;
  collection: string;
  color?: string;
  features: [];
  fabric: [];
  shipping: [];
};
export type Collection = {
  name: string;
  slug: string;
  description: string;
  image_url: string;
};
export type Review = {
  product_id: string;
  author: string;
  rating: number;
  content: string;
  image_rating: string;
  created_at: string;
};

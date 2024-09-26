export type Product = {
  id: number;
  name: string;
  slug: string;
  image_url: string;
  price: number;
  rate: number;
  description: string;
  collections: string;
  color?: [];
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

export type Product = {
  id: number;
  product_id: string;
  name: string;
  color: [];
  price: number;
  rate: number;
  image_url: string;
  description: string;
  collection: string;
  features: [];
  fabric: [];
  shipping: [];
};
export type Collection = {
  collection: string;
  name: string;
  description: string;
  image_url: string;
  created_at: string;
};
export type Review = {
  product_id: string;
  author: string;
  rate: number;
  content: string;
  image_rating: string;
  created_at: string;
};

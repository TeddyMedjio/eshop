// Requets pour recuperer toutes les collections
export async function getCollections() {
  const res = await fetch(
    "https://ecommerce-data-tyi1.onrender.com/collections"
  );
  return res.json();
}

// Requets pour recuperer tous les produits
export async function getProducts() {
  const res = await fetch("https://ecommerce-data-tyi1.onrender.com/products");
  return res.json();
}

// Requets pour recuperer tous les avis
export async function getReviews() {
  const res = await fetch("https://ecommerce-data-tyi1.onrender.com/review");
  return res.json();
}

// Requets pour recuperer un product
export async function getSingleProduct(id: string) {
  const singleProductRes = await fetch(
    `https://ecommerce-data-tyi1.onrender.com/products/${id}`
  );
  return singleProductRes.json();
}

// Requets pour recuperer toutes les collections
export async function getProductByCollections(collection: string) {
  const productByCategoryRes = await fetch(
    `https://ecommerce-data-tyi1.onrender.com/products/collections/${collection}`
  );
  return productByCategoryRes.json();
}

import { ProductType } from "./types/product";

const baseUrl = "http://localhost:3001";

export const getProducts = async (
  sort: string,
  order: string
): Promise<ProductType[]> => {
  const response = await fetch(
    `${baseUrl}/products?_sort=${sort || "title"}&_order=${order || "asc"}`,
    { cache: "no-cache" }
  );
  return response.json();
};

export const addProduct = async (
  product: ProductType
): Promise<ProductType> => {
  const res = await fetch(`${baseUrl}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const newProduct = await res.json();
  return newProduct;
};

export const editProduct = async (
  product: ProductType
): Promise<ProductType> => {
  console.log(product);
  const res = await fetch(`${baseUrl}/products/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const newProduct = await res.json();
  return newProduct;
};

export const deleteProduct = async (id: number): Promise<void> => {
  console.log(id);
  await fetch(`${baseUrl}/products/${id}`, { method: "DELETE" });
};

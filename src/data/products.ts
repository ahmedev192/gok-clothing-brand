import { Product } from "../types";

const BIN_ID = "6831ab5b8561e97a501ae3e1";
const API_KEY = "$2a$10$IQkENPxnw4pnCZM3TWSEsuFbA/DWNkGKgtommOJ6d0q38ld7XI1wW";
const BASE_URL = `https://api.jsonbin.io/v3/b/${BIN_ID}`;

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(BASE_URL, {
    headers: {
      "X-Master-Key": API_KEY,
    },
  });

  const data = await res.json();
  return data.record as Product[];
};

export const saveProducts = async (products: Product[]) => {
  await fetch(BASE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "X-Master-Key": API_KEY,
    },
    body: JSON.stringify(products),
  });
};

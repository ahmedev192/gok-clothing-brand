export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  color: string;
  imageUrls: string[]; // Changed from imageUrl to imageUrls (array of URLs)
}

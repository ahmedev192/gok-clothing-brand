// products.ts
import { Product } from "../types";

export const initialProducts: Product[] = [
  {
    id: "1",
    name: "Classic GÖK Tee",
    description:
      "Our signature t-shirt with minimalist design and premium quality cotton.",
    price: 350,
    color: "Black",
    imageUrls: [
      "https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg",
      "https://images.pexels.com/photos/9835243/pexels-photo-9835243.jpeg",
    ],
  },
  {
    id: "2",
    name: "Bold Statement Tee",
    description:
      "Make a statement with our bold typography design on a comfortable cotton blend.",
    price: 400,
    color: "White",
    imageUrls: [
      "https://images.pexels.com/photos/5698849/pexels-photo-5698849.jpeg",
    ],
  },
  {
    id: "3",
    name: "Essential Crew Neck",
    description:
      "The perfect everyday t-shirt with a clean design and superior comfort.",
    price: 320,
    color: "Gray",
    imageUrls: [
      "https://images.pexels.com/photos/9594952/pexels-photo-9594952.jpeg",
    ],
  },
  {
    id: "4",
    name: "Minimalist Logo Tee",
    description:
      "Our minimalist logo on a premium cotton t-shirt for a subtle yet distinctive look.",
    price: 375,
    color: "Navy Blue",
    imageUrls: [
      "https://images.pexels.com/photos/5384423/pexels-photo-5384423.jpeg",
    ],
  },
];

// ProductCard.tsx
import React from "react";
import { Product } from "../../types";
import Button from "../ui/Button";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState, useRef } from "react";
// ✅ Add this helper locally
const formatPrice = (price: number) => {
  return `${price.toLocaleString()} EGP`;
};
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
interface ProductCardProps {
  product: Product;
}

interface ProductCardProps {
  product: {
    name: string;
    color: string;
    price: number;
    imageUrls: string[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created(slider) {
      // Autoplay on create
      timer.current = setInterval(() => {
        slider.next();
      }, 3000);
    },
  });

  const handleWhatsAppOrder = () => {
    window.open(
      `https://wa.me/201234567890?text=I want to order: ${product.name}`,
      "_blank"
    );
  };

  return (
    <div
      className="group bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg relative"
      onMouseEnter={() => clearInterval(timer.current!)}
      onMouseLeave={() => {
        timer.current = setInterval(() => {
          slider.current?.next();
        }, 3000);
      }}
    >
      <div
        ref={sliderRef}
        className="keen-slider aspect-[3/4] bg-gray-100 rounded-t-lg relative"
      >
        {product.imageUrls.map((url, index) => (
          <div className="keen-slider__slide" key={index}>
            <img
              src={url}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Arrows */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow"
          onClick={() => slider.current?.prev()}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/70 hover:bg-white rounded-full p-1 shadow"
          onClick={() => slider.current?.next()}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-gray-700">{product.color}</p>
          <p className="font-bold">{formatPrice(product.price)}</p>
        </div>

        <Button
          variant="outline"
          fullWidth
          className="mt-4 flex items-center justify-center"
          onClick={handleWhatsAppOrder}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Order via WhatsApp
        </Button>
      </div>
    </div>
  );
}

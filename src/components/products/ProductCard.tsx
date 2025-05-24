import React, { useCallback, useEffect } from "react";
import { useKeenSlider, KeenSliderPlugin } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Product } from "../../types";
import Button from "../ui/Button";

const formatPrice = (price: number) => {
  return `${price.toLocaleString()} EGP`;
};

interface ProductCardProps {
  product: Product;
}

const Autoplay: KeenSliderPlugin = (slider) => {
  let timer: NodeJS.Timeout | null = null;
  const clear = () => timer && clearInterval(timer);
  const start = () => {
    clear();
    timer = setInterval(() => slider.next(), 3000);
  };
  slider.on("created", start);
  slider.on("dragStarted", clear);
  slider.on("animationEnded", start);
  slider.on("destroyed", clear);
};

function ProductCard({ product }: ProductCardProps) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    dragSpeed: 1,
    animation: {
      duration: 300,
    },
    plugins: [Autoplay],
  });

  const handleWhatsAppOrder = useCallback(() => {
    window.open(
      `https://wa.me/201111359219?text=I want to order: ${product.name}`,
      "_blank"
    );
  }, [product.name]);

  const handleNext = useCallback(() => {
    slider.current?.next();
  }, [slider]);

  const handlePrev = useCallback(() => {
    slider.current?.prev();
  }, [slider]);

  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow transition-all duration-300 hover:shadow-xl relative flex flex-col">
      <div
        ref={sliderRef}
        className="keen-slider aspect-[3/4] bg-gray-100 relative"
      >
        {product.imageUrls.map((url, index) => (
          <div className="keen-slider__slide" key={index}>
            <img
              src={url}
              alt={`${product.name} ${index + 1}`}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        ))}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow"
          onClick={handlePrev}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow"
          onClick={handleNext}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg sm:text-xl">{product.name}</h3>
        <div className="mt-1 flex justify-between items-center text-sm text-gray-600">
          <span>{product.color}</span>
          <span className="font-bold text-black">
            {formatPrice(product.price)}
          </span>
        </div>

        {/* Description with animation */}
        <p className="mt-2 text-gray-700 text-sm sm:text-base line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {product.description}
        </p>

        <Button
          variant="outline"
          fullWidth
          className="mt-auto flex items-center justify-center"
          onClick={handleWhatsAppOrder}
        >
          <MessageCircle className="w-4 h-4 mr-2" />
          Order via WhatsApp
        </Button>
      </div>
    </div>
  );
}

export default React.memo(ProductCard);

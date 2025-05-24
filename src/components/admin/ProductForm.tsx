// ProductForm.tsx
import React, { useState, useEffect } from "react";
import { Product } from "../../types";
import Button from "../ui/Button";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

interface ProductFormProps {
  product?: Product;
  onSubmit: (product: Omit<Product, "id"> | Product) => void;
  onCancel: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  product,
  onSubmit,
  onCancel,
}) => {
  const [formState, setFormState] = useState<Omit<Product, "id">>({
    name: "",
    description: "",
    price: 0,
    color: "",
    imageUrls: [""],
  });

  useEffect(() => {
    if (product) {
      setFormState(product);
    }
  }, [product]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: name === "price" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(product ? { ...formState, id: product.id } : formState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formState.description}
          onChange={handleChange}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Price (EGP)
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formState.price}
          onChange={handleChange}
          min="0"
          step="0.01"
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label
          htmlFor="color"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Color
        </label>
        <input
          type="text"
          id="color"
          name="color"
          value={formState.color}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Image URLs
        </label>
        {formState.imageUrls.map((url, index) => (
          <div key={index} className="flex items-center mb-2 space-x-2">
            <input
              type="url"
              value={url}
              onChange={(e) => {
                const newUrls = [...formState.imageUrls];
                newUrls[index] = e.target.value;
                setFormState((prev) => ({ ...prev, imageUrls: newUrls }));
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            {formState.imageUrls.length > 1 && (
              <button
                type="button"
                onClick={() => {
                  const newUrls = formState.imageUrls.filter(
                    (_, i) => i !== index
                  );
                  setFormState((prev) => ({ ...prev, imageUrls: newUrls }));
                }}
                className="text-red-500 font-bold text-xl"
              >
                ×
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            setFormState((prev) => ({
              ...prev,
              imageUrls: [...prev.imageUrls, ""],
            }))
          }
          className="text-sm text-blue-600 mt-2"
        >
          + Add another image
        </button>
      </div>

      <div className="flex space-x-3">
        <Button type="submit" variant="primary" fullWidth>
          {product ? "Update Product" : "Add Product"}
        </Button>
        <Button type="button" variant="secondary" fullWidth onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;

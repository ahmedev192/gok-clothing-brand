import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import { Product } from "../../types";
import Button from "../ui/Button";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface AdminProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

const AdminProductCard: React.FC<AdminProductCardProps> = ({
  product,
  onEdit,
  onDelete,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    if (isDeleting) {
      onDelete(product.id);
    } else {
      setIsDeleting(true);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      <div className="aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={product.imageUrls[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="p-4">
        <h3 className="font-medium text-lg">{product.name}</h3>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-gray-700">{product.color}</p>
          <p className="font-bold">{product.price} EGP</p>
        </div>

        <div className="mt-4 flex space-x-2">
          <Button
            variant="secondary"
            className="flex-1 flex items-center justify-center"
            onClick={() => onEdit(product)}
          >
            <Edit className="w-4 h-4 mr-1" />
            Edit
          </Button>

          <Button
            variant={isDeleting ? "danger" : "outline"}
            className="flex-1 flex items-center justify-center"
            onClick={handleDelete}
          >
            <Trash2 className="w-4 h-4 mr-1" />
            {isDeleting ? "Confirm" : "Delete"}
          </Button>
        </div>

        {isDeleting && (
          <Button
            variant="secondary"
            fullWidth
            className="mt-2"
            onClick={() => setIsDeleting(false)}
          >
            Cancel
          </Button>
        )}
      </div>
    </div>
  );
};

export default AdminProductCard;

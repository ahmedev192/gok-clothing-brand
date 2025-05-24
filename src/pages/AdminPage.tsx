import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useProducts } from "../context/ProductContext";
import { Product } from "../types";
import LoginForm from "../components/admin/LoginForm";
import AdminProductCard from "../components/admin/AdminProductCard";
import ProductForm from "../components/admin/ProductForm";
import Button from "../components/ui/Button";
import { Plus } from "lucide-react";

const AdminPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [isAdding, setIsAdding] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto px-4 py-24">
        <LoginForm />
      </div>
    );
  }

  const handleAddNew = () => {
    setIsAdding(true);
    setEditingProduct(null);
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setIsAdding(false);
  };

  const handleFormSubmit = (product: Omit<Product, "id"> | Product) => {
    if ("id" in product) {
      updateProduct(product.id, product);
    } else {
      addProduct(product);
    }
    setIsAdding(false);
    setEditingProduct(null);
  };

  const handleFormCancel = () => {
    setIsAdding(false);
    setEditingProduct(null);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      {isAdding || editingProduct ? (
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-bold mb-4">
            {editingProduct ? "Edit Product" : "Add New Product"}
          </h2>
          <ProductForm
            product={editingProduct || undefined}
            onSubmit={handleFormSubmit}
            onCancel={handleFormCancel}
          />
        </div>
      ) : (
        <div className="mb-8">
          <Button onClick={handleAddNew} className="flex items-center">
            <Plus className="w-5 h-5 mr-2" />
            Add New Product
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <AdminProductCard
            key={product.id}
            product={product}
            onEdit={handleEdit}
            onDelete={deleteProduct}
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500 mb-4">No products available.</p>
          <Button
            onClick={handleAddNew}
            variant="primary"
            className="flex items-center mx-auto"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Your First Product
          </Button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;

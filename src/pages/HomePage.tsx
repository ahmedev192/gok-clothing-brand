import React, { useEffect } from 'react';
import { useProducts } from '../context/ProductContext';
import ProductGrid from '../components/products/ProductGrid';
import { ShoppingBag } from 'lucide-react';

const HomePage: React.FC = () => {
  const { products } = useProducts();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight mb-6">
              Wear bold. Stay simple. Be GÖK.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Minimalist designs with bold statements. Our t-shirts are made for those who appreciate simplicity with an edge.
            </p>
            <a 
              href="#collection" 
              className="inline-flex items-center px-6 py-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Browse Collection
            </a>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest t-shirt designs. Each piece is crafted with attention to detail and a commitment to quality.
          </p>
        </div>

        {products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No products available at the moment. Check back soon!</p>
          </div>
        )}
      </section>

      {/* About Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About GÖK</h2>
            <p className="text-lg text-gray-600 mb-6">
              GÖK represents the perfect balance between boldness and simplicity. Our brand was founded on the belief that clothing should make a statement while remaining timeless and versatile.
            </p>
            <p className="text-lg text-gray-600">
              Each GÖK t-shirt is designed with care and produced ethically, ensuring quality in every stitch.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
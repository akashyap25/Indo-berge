import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Shimmer = () => (
  <div className="animate-pulse bg-gray-300 h-72 w-full mb-4 rounded-md flex flex-wrap"></div>
);

const Product = React.memo(({ product }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = product.image;
    image.onload = () => setLoading(false);
  }, [product.image]);

  return (
    <Link to={product.link}>
      <div className="relative overflow-hidden shadow-md rounded-md hover:shadow-lg transform hover:scale-105 transition duration-300 p-4 cursor-pointer min-w-full">
        {loading ? (
          <Shimmer />
        ) : (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover mb-4 rounded-md transition duration-300 transform hover:scale-105"
              
            />
            <div className="absolute inset-0 flex items-center justify-center text-white hover:text-orange-500 transition duration-300 text-3xl font-semibold bg-gradient-to-t from-black to-transparent p-2">
              {product.name}
            </div>
          </>
        )}
      </div>
    </Link>
  );
});

const Products = () => {
  const productData = [
    { id: 1, name: 'Food and Beverages', image: 'https://i.postimg.cc/yYgDDqkc/food-beverage.jpg', link: '/foodProducts' },
    { id: 2, name: 'Agriculture', image: 'https://i.postimg.cc/c4HJPpQP/agri.jpg', link: '/agriProducts' },
    { id: 3, name: 'Engineering', image: 'https://i.postimg.cc/rsRPryBv/equipment.jpg', link: '/engineeringProducts' },
    { id: 4, name: 'Services', image: 'https://i.postimg.cc/Hkt8gwrh/consult.jpg', link: '/servicesProducts' },
    { id: 5, name: 'Raw organic material and cooking oil', image: 'https://i.postimg.cc/RC8F5PXF/oil.jpg', link: '/rawProducts' },
  ];

  return (
    <div id="products" className="bg-gray-100 p-24 mt-24">
      <h1 className="relative flex items-center justify-center text-5xl font-extrabold mb-16 text-green-500 transition duration-500 ease-in-out transform hover:scale-105 p-4 rounded-lg">
        Our Products
        <div className="absolute bottom-0 left-1/2 bg-orange-500 h-1 w-40 mt-10 transform -translate-x-1/2 transition-transform duration-300"></div>
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-4 mx-auto">
        {productData.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;

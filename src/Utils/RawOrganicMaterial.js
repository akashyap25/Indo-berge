import React from 'react';

const RawOrganicMaterial = () => {
  const Product = ({ name, image }) => (
    <div className="m-4 p-4 border border-gray-300 rounded-md shadow-md transition-transform transform hover:scale-105">
      <img src={image} alt={name} className="w-40 h-40 object-cover mb-4 rounded-md" />
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
      </div>
    </div>
  );

  const categories = [
    {
      category: 'Raw Organic Material',
      products: [
        { id: 35, name: 'Neem Oil', image: 'https://example.com/neem-oil.jpg' },
        { id: 36, name: 'Neem Cake', image: 'https://example.com/neem-cake.jpg' },
        { id: 37, name: 'Olive Oil', image: 'https://example.com/olive-oil.jpg' },
        { id: 38, name: 'Jathropha', image: 'https://example.com/jathropha.jpg' },
        { id: 39, name: 'Karanya', image: 'https://example.com/karanya.jpg' },
        { id: 40, name: 'Guragum', image: 'https://example.com/guragum.jpg' },
        { id: 41, name: 'Castor Oil', image: 'https://example.com/castor-oil.jpg' },
        { id: 42, name: 'Ashwagandha', image: 'https://example.com/ashwagandha.jpg' },
        { id: 43, name: 'Musli', image: 'https://example.com/musli.jpg' },
        { id: 44, name: 'Indian Basil (Tulsi)', image: 'https://example.com/tulsi.jpg' },
        { id: 45, name: 'Amla', image: 'https://example.com/amla.jpg' },
        { id: 46, name: 'Berries', image: 'https://example.com/berries.jpg' },
        { id: 47, name: 'Jegris', image: 'https://example.com/jegris.jpg' },
        { id: 48, name: 'Aloe Vera Dry', image: 'https://example.com/aloe-vera-dry.jpg' },
        { id: 49, name: 'Steria', image: 'https://example.com/steria.jpg' },
        
      ],
    },
  ];
  

  return (
    <div className="container mx-auto my-8 mt-60">
      {categories.map((category) => (
        <div key={category.category} className="mb-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{category.category}</h2>
          <div className="flex flex-wrap justify-center">
            {category.products.map((product) => (
              <Product key={product.id} name={product.name} image={product.image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RawOrganicMaterial;

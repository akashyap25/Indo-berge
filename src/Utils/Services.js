import React from 'react';

const Services = () => {
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
      category: 'Services',
      subcategories: [
        { id: 32, name: 'Consultancy', image: 'https://example.com/consultancy.jpg' },
        { id: 33, name: 'Farm Manipulation', image: 'https://example.com/farm-manipulation.jpg' },
        { id: 34, name: 'Agriculture', image: 'https://example.com/agriculture.jpg' },
        
      ],
    },
  ];

  return (
    <div className="container mx-auto my-8 mt-60">
      {categories.map((category) => (
        <div key={category.category} className="mb-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{category.category}</h2>
          <div className="flex flex-wrap justify-center">
            {category.subcategories.map((subCategory) => (
              <Product key={subCategory.id} name={subCategory.name} image={subCategory.image} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

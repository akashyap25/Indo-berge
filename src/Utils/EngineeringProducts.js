import React from 'react'

const EngineeringProducts = () => {
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
          category: 'Agro Engineering Products',
          products: [
            
            { id: 28, name: 'Agro Equipment 1', image: 'https://example.com/agro-equipment1.jpg' },
            { id: 29, name: 'Agro Equipment 2', image: 'https://example.com/agro-equipment2.jpg' },
            { id: 30, name: 'Agro Machinery', image: 'https://example.com/agro-machinery.jpg' },
            { id: 31, name: 'Precision Farming Tools', image: 'https://example.com/precision-farming-tools.jpg' },
            
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

export default EngineeringProducts
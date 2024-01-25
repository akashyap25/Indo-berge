import React from 'react'

const EngineeringProducts = () => {
    const Product = ({ name, image }) => (
        <div className="m-4 p-4 border border-gray-300 rounded-md shadow-md transition-transform transform hover:scale-105 text-center">
          <img src={image} alt={name} className="w-40 h-40 object-cover mb-4 rounded-md mx-auto" />
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
          </div>
        </div>
      );

      const categories = [
        {
          category: 'Agro Engineering Products',
          products: [
            
            { id: 28, name: 'Agro Equipment 1', image: 'https://bhoomiagroindustries.com/uploads/product/mini_1+11.png' },
            { id: 29, name: 'Agro Equipment 2', image: 'https://www.tractorjunction.com/blog/wp-content/uploads/2022/09/Top-10-agriculture-equipment-list-in-India.jpg' },
            { id: 30, name: 'Agro Machinery', image: 'https://3.imimg.com/data3/JI/NB/MY-2354614/agro-machinery-500x500.jpg' },
            { id: 31, name: 'Precision Farming Tools', image: 'https://www.precisionfarmingdealer.com/ext/resources/images/2020/Fall-2020/PFD-Products-Image.jpg?t=1604385149&width=661' },
            
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
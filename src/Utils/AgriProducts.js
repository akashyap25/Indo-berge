import React from 'react'

const AgriProducts = () => {
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
          category: 'Crop Protection',
          products: [
            { id: 1, name: 'Insecticides', image: 'https://example.com/insecticides.jpg' },
            { id: 2, name: 'Herbicides', image: 'https://example.com/herbicides.jpg' },
            { id: 3, name: 'Fungicides', image: 'https://example.com/fungicides.jpg' },
            { id: 4, name: 'Nematodicides', image: 'https://example.com/nematodicides.jpg' },
            
          ],
        },
        {
          category: 'PGR\'s and Fertilizers',
          products: [
            { id: 5, name: 'Humstart', image: 'https://example.com/humstart.jpg' },
            { id: 6, name: 'Power Win', image: 'https://example.com/power-win.jpg' },
            { id: 7, name: 'Power Grow', image: 'https://example.com/power-grow.jpg' },
            { id: 8, name: 'Vermi Compost', image: 'https://example.com/vermi-compost.jpg' },
            { id: 9, name: 'Neem Fertilizer', image: 'https://example.com/neem-fertilizer.jpg' },
            { id: 10, name: 'Micro and Macro Fertilizers', image: 'https://example.com/micro-macro-fertilizers.jpg' },
            { id: 11, name: 'Namo Organic Fertilizers', image: 'https://example.com/namo-organic-fertilizers.jpg' },
            { id: 12, name: 'Tonics', image: 'https://example.com/tonics.jpg' },
            { id: 13, name: 'Adjuvents', image: 'https://example.com/adjuvents.jpg' },
            
          ],
        },
        {
            category: 'Seeds',
            products: [
              { id: 14, name: 'Green Pea Seeds', image: 'https://example.com/green-pea-seeds.jpg' },
              { id: 15, name: 'Hybrid Cabbage Seeds', image: 'https://example.com/hybrid-cabbage-seeds.jpg' },
              { id: 16, name: 'Cauliflower Seeds', image: 'https://example.com/cauliflower-seeds.jpg' },
              { id: 17, name: 'Tomato Seeds', image: 'https://example.com/tomato-seeds.jpg' },
              { id: 18, name: 'Capsicum Seeds', image: 'https://example.com/capsicum-seeds.jpg' },
              { id: 19, name: 'Lettuce Seeds', image: 'https://example.com/lettuce-seeds.jpg' },
              { id: 20, name: 'Basil Seeds', image: 'https://example.com/basil-seeds.jpg' },
              { id: 21, name: 'Chilli Seeds', image: 'https://example.com/chilli-seeds.jpg' },
              { id: 22, name: 'All Cucurbits', image: 'https://example.com/all-cucurbits.jpg' },
              { id: 23, name: 'Cucumbers', image: 'https://example.com/cucumbers.jpg' },
              { id: 24, name: 'Watermelon', image: 'https://example.com/watermelon.jpg' },
              { id: 25, name: 'Melon', image: 'https://example.com/melon.jpg' },
              { id: 26, name: 'Coriander Seeds', image: 'https://example.com/coriander-seeds.jpg' },
              { id: 27, name: 'Potato Seeds', image: 'https://example.com/potato-seeds.jpg' },
              
            ],
          },
        // Add more categories as needed
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

export default AgriProducts
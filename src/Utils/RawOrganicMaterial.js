import React from 'react';

const RawOrganicMaterial = () => {
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
      category: 'Raw Organic Material',
      products: [
        { id: 35, name: 'Neem Oil', image: 'https://5.imimg.com/data5/SELLER/Default/2023/2/YY/VB/UU/26877216/organic-neem-oil-500x500.jpg' },
        { id: 36, name: 'Neem Cake', image: 'https://5.imimg.com/data5/QO/FJ/MY-4785906/organic-neem-cake-fertilizer-500x500.jpg' },
        { id: 37, name: 'Olive Oil', image: 'https://www.womansworld.com/wp-content/uploads/2021/02/oil.jpg?w=953' },
        { id: 38, name: 'Jathropha', image: 'https://5.imimg.com/data5/PO/NY/JA/ANDROID-86817969/product-jpeg-500x500.jpeg' },
        { id: 39, name: 'Karanya', image: 'https://example.com/karanya.jpg' },
        { id: 40, name: 'Guragum', image: 'https://5.imimg.com/data5/SD/RE/MY-35371982/guar-gum-500x500.jpg' },
        { id: 41, name: 'Castor Oil', image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/330096269/RZ/FG/OM/50259712/jamaican-black-castor-oil-cold-pressed-organic-for-hair-growth.jpeg' },
        { id: 42, name: 'Ashwagandha', image: 'https://thewholesaler.in/cdn/shop/products/thewholesaler_price_ashwagandha-roots.jpg?v=1641864138' },
        { id: 43, name: 'Musli', image: 'https://5.imimg.com/data5/SELLER/Default/2022/5/OJ/YI/NR/52492329/musli-safed-1-e1646985339462.jpg' },
        { id: 44, name: 'Indian Basil (Tulsi)', image: 'https://cdn.shopify.com/s/files/1/0005/5335/3267/files/tulsi_480x480.jpg?v=1670996180' },
        { id: 45, name: 'Amla', image: 'https://fastandfresh.in/cdn/shop/products/Amla_800x.jpg?v=1655335117' },
        { id: 46, name: 'Berries', image: 'https://4.imimg.com/data4/IY/DN/ANDROID-22166480/product-500x500.jpeg' },
        { id: 47, name: 'Jegris', image: 'https://5.imimg.com/data5/WM/SK/MY-42099971/pure-sugar-cane-jaggery.jpg' },
        { id: 48, name: 'Aloe Vera Dry', image: 'https://5.imimg.com/data5/WM/SK/MY-42099971/pure-sugar-cane-jaggery.jpg' },
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

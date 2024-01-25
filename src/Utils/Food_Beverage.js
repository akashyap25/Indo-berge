import React, { useState, useEffect } from 'react';

const Shimmer = () => (
  <div className="animate-pulse bg-gray-300 h-40 w-40 mb-4 rounded-md mx-auto"></div>
);

const LazyImage = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => setLoading(false);
  }, [src]);

  return loading ? <Shimmer /> : <img src={src} alt={alt} className="w-40 h-40 object-cover mb-4 rounded-md mx-auto" loading="lazy" />;
};

const Product = ({ name, image }) => (
  <div className="m-4 p-4 border border-gray-300 rounded-md shadow-md transition-transform transform hover:scale-105 text-center">
    <LazyImage src={image} alt={name} />
    <div className="text-center">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
    </div>
  </div>
);
const Food_Beverage = () => {
   

  const categories = [
    {
      category: 'Rice',
      products: [
        { id: 1, name: '1121 Indian Basmati Rice', image: 'https://lsmedia.linker-cdn.net/271294/2020/4957810.jpeg?width=600&height=570' },
        { id: 2, name: '1509 Indian Basmati Rice', image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/338694559/CY/PA/LO/97736314/1509-raw-basmati-rice.jpg' },
        { id: 3, name: 'Pusa Indian Basmati Rice', image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/335867754/BJ/RW/YW/104017866/commonly-cultivated-indian-originated-sun-dried-long-grain-pusa-basmati-rice-1kg-719.jpg' },
        { id: 4, name: 'Sugendha Indian Basmati Rice', image: 'https://nationalgauravaward.org/wp-content/uploads/2020/12/sugandha-raw-white-basmati-rice-1549515644-4700532.jpeg' },
        { id: 5, name: 'Permal Rice', image: 'https://images.jdmagicbox.com/quickquotes/images_main/fortune-rice-and-rice-products-12-03-2021-006-222969691-9syym.jpg' },
        { id: 6, name: 'IR8 & 1R14 Rice', image: 'https://5.imimg.com/data5/SELLER/Default/2021/1/IZ/CB/NE/40594770/ir8-parboiled-rice-500x500.jpg' },
        { id: 7, name: 'White Rice', image: 'https://5.imimg.com/data5/JC/SZ/YI/SELLER-92614650/long-grain-white-rice.jpg' },
      ],
    },
    {
        category: 'Oilseed Meals',
        products: [
          { id: 8, name: 'Soybean Meal', image: 'https://surajcorporate.in/images/entries/full-size/Soyabean-meal.jpg' },
          { id: 9, name: 'Cottonseed Meal', image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/330953806/HQ/SY/YQ/76298142/cottonseed-meal.jpg' },
          { id: 10, name: 'Mustard/Canola Meal', image: 'https://5.imimg.com/data5/RP/GM/MY-715258/mustard-meal-500x500.jpg' },
          
        ],
      },
    {
      category: 'Spices',
      products: [
        { id: 11, name: 'Turmeric', image: 'https://5.imimg.com/data5/SELLER/Default/2023/7/322144231/HY/VX/KT/42218902/organic-turmeric-powder.jpeg' },
        { id: 12, name: 'Black Pepper', image: 'https://www.pepperhub.in/wp-content/uploads/2020/10/black-pepper-500x500-1.jpg' },
        { id: 13, name: 'Cumin', image: 'https://5.imimg.com/data5/DC/AY/XD/SELLER-5826574/cumin-seeds-500x500.jpg' },
        { id: 14, name: 'Red Chilli', image: 'https://shorturl.at/aqJXZ' },
        { id: 15, name: 'Rock Salt', image: 'https://shorturl.at/kxAOU' },
        { id: 16, name: 'Coconut Powder', image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/297162416/XH/QI/ST/186852758/dry-coconut-powder.png' },
        { id: 17, name: 'Cinnamon', image: 'https://plantura.garden/uk/wp-content/uploads/sites/2/2021/10/cinnamon-in-the-garden.jpg' },
        { id: 18, name: 'Cardamom', image: 'https://m.media-amazon.com/images/I/61P2X5yWxeL._AC_UF1000,1000_QL80_.jpg' },
        { id: 19, name: 'Dry Ginger', image: 'https://seed2plant.in/cdn/shop/products/100_05b06d48-3ddb-461d-a1cf-58bb9757abec.png?v=1641469426&width=1500' },
        
      ],
    },{
        category: 'Nuts',
        products: [
          { id: 20, name: 'Mamra Almond', image: 'https://plantura.garden/uk/wp-content/uploads/sites/2/2021/10/cinnamon-in-the-garden.jpg' },
          { id: 21, name: 'Mediterranean Almond', image: 'https://facts.net/wp-content/uploads/2023/07/14-facts-about-almonds-1689330963.jpg' },
          { id: 22, name: 'Pistachio', image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/SB/YW/AS/88400203/california-pistachios-500x500.jpg' },
          { id: 23, name: 'Pistachian Insell', image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/SB/YW/AS/88400203/california-pistachios-500x500.jpg' },
          { id: 24, name: 'Pistachio Leramel', image: 'https://m.media-amazon.com/images/I/51rpKvjc0WL.jpg' },
          { id: 25, name: 'Saffron', image: 'https://5.imimg.com/data5/SELLER/Default/2021/5/SB/YW/AS/88400203/california-pistachios-500x500.jpg' },
          { id: 26, name: 'Dates', image: 'https://m.media-amazon.com/images/I/413JSqa2SFL._AC_UF1000,1000_QL80_.jpg' },
          { id: 27, name: 'Apricots', image: 'https://shorturl.at/nou68' },
          { id: 28, name: 'Raisin', image: 'https://5.imimg.com/data5/ON/AW/JJ/SELLER-78441475/sun-dried-raisin.jpg' },
          { id: 29, name: 'Fox Nut', image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/321262334/FQ/ZD/KC/84813594/fox-nuts-makhana-.jpg' },
          { id: 30, name: 'Figs', image: 'https://shorturl.at/ikCV8' },
          { id: 31, name: 'Prunes', image: 'https://i0.wp.com/www.nutshouse.in/wp-content/uploads/2021/04/dried-prunes-with-pits-jumbo-1S-1839.jpg?fit=900%2C900&ssl=1' },
          { id: 32, name: 'Pinenuts', image: 'https://shorturl.at/nxCDX' },
          { id: 33, name: 'Cashew Nut', image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/KE/YZ/EG/22423502/cashew-nuts.jpg' },
         
        ],
      },
      {
        category: 'Tea',
        products: [
          { id: 34, name: 'Indian Tea (Darjeeling)', image: 'https://www.quickpantry.in/cdn/shop/products/LooseTeaOption2_500x500.jpg?v=1597180354' },
          { id: 36, name: 'Green Tea', image: 'https://i0.wp.com/www.gopaldharaindia.com/wp-content/uploads/2011/04/Lemon-Green-Tea-cup-liquor.jpg' },
          { id: 37, name: 'Assary Orthodox Tea', image: 'https://5.imimg.com/data5/SELLER/Default/2020/9/WW/HE/TE/111378024/orthodox-assam-tea-500x500.jpg' },
          
        ],
      },
      {
        category: 'Legumes',
        products: [
          { id: 39, name: 'Green Pea', image: 'https://nurserynisarga.in/wp-content/uploads/2021/10/textures-1938301.jpg' },
          { id: 40, name: 'Frozen Pea', image: 'https://5.imimg.com/data5/ZP/MT/DU/SELLER-70813520/frozen-broccoli.jpg' },
          { id: 41, name: 'Dry Pea', image: 'https://organicshandy.com/wp-content/uploads/2018/10/Peas-White.jpg' },
          { id: 42, name: 'Ground Nuts', image: 'https://img1.exportersindia.com/product_images/bc-full/2021/9/3742883/ground-nut-without-shell-1632936231-6016610.jpeg' },
          
        ],
      },
      {
        category: 'Processed Foods',
        products: [
          { id: 43, name: 'Tomato Paste', image: 'https://www.telegraph.co.uk/content/dam/recipes/2020/07/10/TELEMMGLPICT000234109843.jpeg' },
          { id: 44, name: 'Potato Starch', image: 'https://5.imimg.com/data5/SELLER/Default/2023/4/299639834/LR/FF/VJ/8079300/dehydrated-potato-starch-powder.jpg' },
          
        ],
      },
      {
        category: 'Snacks',
        products: [
          { id: 45, name: 'Raw Potato Chips/Wafers', image: 'https://m.media-amazon.com/images/I/51WrYM5Q9UL.jpg' },
          
        ],
      },
      {
        category: 'Fruits',
        products: [
          { id: 46, name: 'Mango Fresh', image: 'https://4.imimg.com/data4/AT/RM/MY-29356566/indian-mangoes.jpg' },
          { id: 47, name: 'Mango Powder', image: 'https://5.imimg.com/data5/RT/XL/EO/SELLER-3147536/dry-mango-powder-500x500.jpg' },
          { id: 48, name: 'Amla Dry', image: 'https://www.neelayurvedics.com/wp-content/uploads/2019/10/Neel-Ayurvedics-Amla.jpg' },
          
        ],
      },
      {
        category: 'Seeds',
        products: [
          { id: 49, name: 'Sesame Seeds', image: 'https://www.neelayurvedics.com/wp-content/uploads/2019/10/Neel-Ayurvedics-Amla.jpg' },
          
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

export default Food_Beverage;

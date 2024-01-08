import React from 'react';

const Food_Beverage = () => {
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
      category: 'Rice',
      products: [
        { id: 1, name: '1121 Indian Basmati Rice', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2F1122-steamed-basmati-rice-2851032883291.html&psig=AOvVaw3EqQAmZ-Eo_eGbxYfB7PaZ&ust=1704611142054000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKC2wMSZyIMDFQAAAAAdAAAAABAI' },
        { id: 2, name: '1509 Indian Basmati Rice', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tradeindia.com%2Fproducts%2Fpure-and-dried-commonly-cultivated-long-grain-1509-basmati-rice-8190446.html&psig=AOvVaw3DqJZVX-aZ84I2XAWwq7VA&ust=1704611778005000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPjjnvSbyIMDFQAAAAAdAAAAABAD' },
        { id: 3, name: 'Pusa Indian Basmati Rice', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.indiamart.com%2Fproddetail%2Fpusa-basmati-rice-16778312855.html%3Fpos%3D4%26pla%3Dn&psig=AOvVaw0L1S3GZvVA6gcvXlq4dxYy&ust=1704611935637000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOiwq8CcyIMDFQAAAAAdAAAAABAD' },
        { id: 4, name: 'Sugendha Indian Basmati Rice', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.exportersindia.com%2Fproduct-detail%2Fcreamy-sugandha-basmati-rice-5876077.htm&psig=AOvVaw20UR9uBjTmwGmGpWjjjnj3&ust=1704611971435000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCOxd2cyIMDFQAAAAAdAAAAABAI' },
        { id: 5, name: 'Permal Rice', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Findian-permal-rice-1458074588.html&psig=AOvVaw1Fpo2BZgaQ8pcUhlS2Vkyk&ust=1704612059704000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOixpoedyIMDFQAAAAAdAAAAABAD' },
        { id: 6, name: 'IR8 & 1R14 Rice', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.indiamart.com%2Fproddetail%2Fwhite-ir8-raw-rice-12366034362.html&psig=AOvVaw26pz2cZqa2MPBE5z_T_gvQ&ust=1704612164226000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICeuKydyIMDFQAAAAAdAAAAABAD' },
        { id: 7, name: 'White Rice', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fphotos%2Fwhite-rice&psig=AOvVaw3QP_B-YsDbeX5KkxREQNkq&ust=1704612203896000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJDa-cKdyIMDFQAAAAAdAAAAABAD' },
      ],
    },
    {
        category: 'Oilseed Meals',
        products: [
          { id: 8, name: 'Soybean Meal', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ASoybean_Oil%2C_Meal_and_Beans_%252810059732523%2529.jpg&psig=AOvVaw26BVtxyCOYFuw_eNBIZXXX&ust=1704612275891000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMjj5eadyIMDFQAAAAAdAAAAABAD' },
          { id: 9, name: 'Cottonseed Meal', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbakerpedia.com%2Fingredients%2Fcottonseed-oil%2F&psig=AOvVaw1RCANBTZzj5CWZF0_GFhAK&ust=1704612328137000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJiajv-dyIMDFQAAAAAdAAAAABAD' },
          { id: 10, name: 'Mustard/Canola Meal', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.starhealth.in%2Fblog%2Fmustard-oil-benefits&psig=AOvVaw3GtALppTucfMBSofK2rnQi&ust=1704612378820000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLCy8ZKeyIMDFQAAAAAdAAAAABAQ' },
          
        ],
      },
    {
      category: 'Spices',
      products: [
        { id: 11, name: 'Turmeric', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.viralspices.com%2Fblog%2Ffrom-ancient-remedy-to-global-sensation-indias-organic-turmeric-powder-and-its-benefits&psig=AOvVaw0Eud8hq2FWKUGA9Zrh9cRY&ust=1704612446367000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCICZ6bWeyIMDFQAAAAAdAAAAABAD' },
        { id: 12, name: 'Black Pepper', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheconversation.com%2Fblack-pepper-healthy-or-not-179815&psig=AOvVaw1sguhlkwNhdPlwWriX5YSE&ust=1704612502761000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCY-9CeyIMDFQAAAAAdAAAAABAD' },
        { id: 13, name: 'Cumin', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fcumin&psig=AOvVaw2-wqc1U1ndVffuA1BWEoGn&ust=1704612536506000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJij5d6eyIMDFQAAAAAdAAAAABAD' },
        { id: 14, name: 'Red Chilli', image: 'https://example.com/red-chilli.jpg' },
        { id: 15, name: 'Rock Salt', image: 'https://example.com/rock-salt.jpg' },
        { id: 16, name: 'Coconut Powder', image: 'https://example.com/coconut-powder.jpg' },
        { id: 17, name: 'Cinnamon', image: 'https://example.com/cinnamon.jpg' },
        { id: 18, name: 'Cardamom', image: 'https://example.com/cardamom.jpg' },
        { id: 19, name: 'Dry Ginger', image: 'https://example.com/dry-ginger.jpg' },
        
      ],
    },{
        category: 'Nuts',
        products: [
          { id: 20, name: 'Mamra Almond', image: 'https://example.com/mamra-almond.jpg' },
          { id: 21, name: 'Mediterranean Almond', image: 'https://example.com/mediterranean-almond.jpg' },
          { id: 22, name: 'Pistachio', image: 'https://example.com/pistachio.jpg' },
          { id: 23, name: 'Pistachian Insell', image: 'https://example.com/pistachian-insell.jpg' },
          { id: 24, name: 'Pistachio Leramel', image: 'https://example.com/pistachio-leramel.jpg' },
          { id: 25, name: 'Saffron', image: 'https://example.com/saffron.jpg' },
          { id: 26, name: 'Dates', image: 'https://example.com/dates.jpg' },
          { id: 27, name: 'Apricots', image: 'https://example.com/apricots.jpg' },
          { id: 28, name: 'Raisin', image: 'https://example.com/raisin.jpg' },
          { id: 29, name: 'Fox Nut', image: 'https://example.com/fox-nut.jpg' },
          { id: 30, name: 'Figs', image: 'https://example.com/figs.jpg' },
          { id: 31, name: 'Prunes', image: 'https://example.com/prunes.jpg' },
          { id: 32, name: 'Pinenuts', image: 'https://example.com/pinenuts.jpg' },
          { id: 33, name: 'Cashew Nut', image: 'https://example.com/cashew-nut.jpg' },
         
        ],
      },
      {
        category: 'Tea',
        products: [
          { id: 34, name: 'Indian Tea (Darjeeling)', image: 'https://example.com/indian-tea-darjeeling.jpg' },
          { id: 35, name: 'Ginseng Nahunal Tea', image: 'https://example.com/ginseng-nahunal-tea.jpg' },
          { id: 36, name: 'Green Tea', image: 'https://example.com/green-tea.jpg' },
          { id: 37, name: 'Assary Orthodox Tea', image: 'https://example.com/assary-orthodox-tea.jpg' },
          { id: 38, name: 'Cylon Orthodox Tea', image: 'https://example.com/cylon-orthodox-tea.jpg' },
          
        ],
      },
      {
        category: 'Legumes',
        products: [
          { id: 39, name: 'Green Pea', image: 'https://example.com/green-pea.jpg' },
          { id: 40, name: 'Frozen Pea', image: 'https://example.com/frozen-pea.jpg' },
          { id: 41, name: 'Dry Pea', image: 'https://example.com/dry-pea.jpg' },
          { id: 42, name: 'Ground Nuts', image: 'https://example.com/ground-nuts.jpg' },
          
        ],
      },
      {
        category: 'Processed Foods',
        products: [
          { id: 43, name: 'Tomato Paste', image: 'https://example.com/tomato-paste.jpg' },
          { id: 44, name: 'Potato Starch', image: 'https://example.com/potato-starch.jpg' },
          
        ],
      },
      {
        category: 'Snacks',
        products: [
          { id: 45, name: 'Raw Potato Chips/Wafers', image: 'https://example.com/raw-potato-chips.jpg' },
          
        ],
      },
      {
        category: 'Fruits',
        products: [
          { id: 46, name: 'Mango Fresh', image: 'https://example.com/mango-fresh.jpg' },
          { id: 47, name: 'Mango Powder', image: 'https://example.com/mango-powder.jpg' },
          { id: 48, name: 'Amla Dry', image: 'https://example.com/amla-dry.jpg' },
          
        ],
      },
      {
        category: 'Seeds',
        products: [
          { id: 49, name: 'Sesame Seeds', image: 'https://example.com/sesame-seeds.jpg' },
          
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

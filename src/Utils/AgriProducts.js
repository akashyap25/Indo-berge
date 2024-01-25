import React from 'react'

const AgriProducts = () => {
    const Product = ({ name, image }) => (
        <div className="m-4 p-4 border border-gray-300 rounded-md shadow-md transition-transform transform hover:scale-105 text-center">
          <img src={image} alt={name} className="w-40 h-40 mb-4 rounded-md mx-auto" />
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
          </div>
        </div>
      );

      const categories = [
        {
          category: 'Crop Protection',
          products: [
            { id: 1, name: 'Insecticides', image: 'https://chemindigest.com/wp-content/uploads/2022/05/Insecticides-India-Limited-Gets-Patent-for-New-Compounds.png' },
            { id: 2, name: 'Herbicides', image: 'https://drive.google.com/file/d/16FCwnD-oF-MuQcxToaHRfxEXr3bbcuFz/view?usp=sharing' },
            { id: 3, name: 'Fungicides', image: 'https://drive.google.com/file/d/1KVoqgDwHFrhYN38YhZSRkRkOp18aeu7i/view?usp=sharing' },
            { id: 4, name: 'Nematodicides', image: 'https://shorturl.at/lmos2' },
            
          ],
        },
        {
          category: 'PGR\'s and Fertilizers',
          products: [
            { id: 5, name: 'Humestar', image: 'https://shorturl.at/gnwO4' },
            { id: 6, name: 'Power Win', image: 'https://drive.google.com/file/d/1nlFV1b9Asode7rrqhEZaVzA0KFgLv34B/view?usp=sharing' },
            { id: 7, name: 'Power Grow', image: 'https://ph-test-11.slatic.net/p/c8437a7f8752c2af925cce5c0f824a61.jpg' },
            { id: 8, name: 'Vermi Compost', image: 'https://shorturl.at/aioqL' },
            { id: 9, name: 'Neem Fertilizer', image: 'https://healthybuddha.in/image/cache/catalog/neem-cake-powder-500x515.jpg' },
            { id: 10, name: 'Micro and Macro Fertilizers', image: 'https://cdn.mos.cms.futurecdn.net/s3CWmMBybZYXwcdE7JUrkX-415-80.jpg' },
            { id: 11, name: 'Namo Organic Fertilizers', image: 'https://namoorganics.in/cdn/shop/products/pouchs.jpg?v=1657098477&width=480' },
            { id: 12, name: 'Tonics', image: 'https://cdn.shopify.com/s/files/1/0722/2059/products/crop-tonic-21-768x768.jpg?v=1681459787' },
            { id: 13, name: 'Adjuvents', image: 'https://www.cdc.gov/vaccinesafety/images/concerns-adjuvants-main.jpg?_=04988' },
            
          ],
        },
        {
            category: 'Seeds',
            products: [
              { id: 14, name: 'Green Pea Seeds', image: 'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/61ZZqK2uw+L._AC_UF1000,1000_QL80_.jpg' },
              { id: 15, name: 'Hybrid Cabbage Seeds', image: 'https://5.imimg.com/data5/WC/TB/MY-43117871/hybrid-cabbage-seeds.jpg' },
              { id: 16, name: 'Cauliflower Seeds', image: 'https://5.imimg.com/data5/DR/EX/MY-4005323/cauliflower-seed.jpg' },
              { id: 17, name: 'Tomato Seeds', image: 'https://seed2plant.in/cdn/shop/products/100_05b06d48-3ddb-461d-a1cf-58bb9757abec.png?v=1641469426&width=1500' },
              { id: 18, name: 'Capsicum Seeds', image: 'https://3.imimg.com/data3/TD/XB/MY-6570519/capsicum-seed-500x500.jpg' },
              { id: 19, name: 'Lettuce Seeds', image: 'https://seed2plant.in/cdn/shop/products/66.png?v=1615875591&width=3840' },
              { id: 20, name: 'Basil Seeds', image: 'https://shorturl.at/joBK9' },
              { id: 21, name: 'Chilli Seeds', image: 'https://i0.wp.com/plantcraft.in/wp-content/uploads/2020/12/chilli-seeds-scaled.jpg?fit=2560%2C1912&ssl=1' },
              { id: 22, name: 'All Cucurbits', image: 'https://example.com/all-cucurbits.jpg' },
              { id: 23, name: 'Cucumbers', image: 'https://5.imimg.com/data5/SELLER/Default/2022/8/QZ/CL/YK/14458404/mini-cucumber-seeds.png' },
              { id: 24, name: 'Watermelon', image: 'https://theaffordableorganicstore.com/wp-content/uploads/2021/06/Watermelon-Seeds.jpg' },
              { id: 25, name: 'Melon', image: 'https://healthymaster.in/cdn/shop/articles/Musk_melon_seeds_benefit.png?v=1690114069' },
              { id: 26, name: 'Coriander Seeds', image: 'https://5.imimg.com/data5/DQ/PH/MY-2748567/coriander-seed.jpg' },
              { id: 27, name: 'Potato Seeds', image: 'https://rukminim2.flixcart.com/image/850/1000/kay9bbk0/plant-seed/m/n/f/100-potato-seeds-globle-enterprise-original-imafses9hjzzvjvk.jpeg?q=90&crop=false' },
              
            ],
          },
        // Add more categories as needed
      ];
      
      

      return (
        <div className="container mx-auto my-8 mt-60">
          {categories.map((category) => (
            <div key={category.category} className="mb-6 text-center">
              <h2 className="text-3xl font-bold mb-4">{category.category}</h2>
              <div className="flex flex-wrap justify-center items-center ">
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
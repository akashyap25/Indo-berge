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
const Services = () => {
 

  const categories = [
    {
      category: 'Services',
      subcategories: [
        { id: 32, name: 'Consultancy', image: 'https://5.imimg.com/data5/ANDROID/Default/2022/11/VM/RT/UP/33887920/product-jpeg-500x500.jpg' },
        { id: 33, name: 'Farm Manipulation', image: 'https://cache.careers360.mobi/media/article_images/2022/6/7/Agriculture-courses-after-10th.webp' },
        { id: 34, name: 'Agriculture', image: 'https://lvivity.com/wp-content/uploads/2020/04/iot-in-agriculture.jpg' },
        
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

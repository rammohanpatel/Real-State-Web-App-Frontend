// components/Marquee.js

import React from 'react';
import BlogCard from '@/components/BlogCard';

const Marquee = ({ blogs }) => {
  return (
    <div className="maylike-products-wrapper">
      <h2 className="text-xl font-semibold mb-4">You May Also Like</h2>
      <div className="marquee-container">
        <div className="marquee ">
          {blogs.map((blog, index) => (
            <div key={index} className="marquee-item m-4">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;

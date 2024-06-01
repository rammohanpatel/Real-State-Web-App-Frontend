'use client'

import Navbar from "@/components/Navbar";
import { client } from '../../lib/client';
import { useEffect, useState } from "react";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
// import HeroImage from "@/components/HeroImage"; // Assuming you have a HeroImage component

export default function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=='post'] | order(_createdAt asc) {
          title,
          image,
          tagType,
          publishDate,
          summary,
          "slug": slug.current,
          body
        }`;

        const posts = await client.fetch(query);
        setBlogs(posts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log('Blogs : ', blogs);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50">
      <Navbar />
      {/* <HeroImage /> */}

      {/* Render fetched data */}
      <div className="max-w-7xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <div key={index} className="transform hover:scale-105  transition-transform duration-300">
            <BlogCard blog={blog} key={index} className="transform hover:scale-105 transition-transform duration-300" />
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
}

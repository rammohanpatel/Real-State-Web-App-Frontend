'use client'

import Navbar from "../../components/Navbar";
import { client } from '../../lib/client';
import { useEffect, useState } from "react";
import OurInsightCard from "@/components/OurInsight";
import Footer from "@/components/Footer";

export default function Page() {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=='insight'] | order(_createdAt asc) {
          title,
          image,
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

  console.log('Blogs : ',blogs)

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="text-6xl font-bold text-center mt-28 mb-8 text-primary">Our Insights</h1>
      </div>
      <div>
        <section className="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {
            blogs.map((blog,index)=>(
              <OurInsightCard blog={blog} key={index} />
            ))
          }

        </section>
      </div>

      <Footer />
    </div>
  );
}

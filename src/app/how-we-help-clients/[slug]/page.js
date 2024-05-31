// // 'use client'
// // import Image from "next/image";
// // import { urlForImage } from '../../../lib/image';
// // import { client } from '../../../lib/client';
// // import { PortableText } from "@portabletext/react";
// // import { useEffect, useState } from "react";
// // import myPortableTextComponents from "@/assets/PortableTextComponent";

// // export default function Page({ params: { slug } }) {
// //   const [blog, setBlog] = useState(null);

// //   const fetchBlog = async () => {
// //     const query = `*[_type == 'post' && slug.current == $slug][0] {
// //       title, 
// //       body[]{
// //         ...,
// //         "imageUrl": asset->url,
// //         "fileUrl": asset->url
// //       }, 
// //       image{..., "imageUrl": asset->url}, 
// //       summary,
// //       "documentURL": document.asset->url
// //     }`;
// //     const data = await client.fetch(query, { slug });
// //     setBlog(data);
// //   };

// //   useEffect(() => {
// //     fetchBlog();
// //   }, [slug]);

// //   // Listen to real-time updates
// //   useEffect(() => {
// //     const subscription = client
// //       .listen(`*[_type == "post" && slug.current == $slug]`, { slug })
// //       .subscribe((update) => {
// //         fetchBlog(); // Fetch the latest data on update
// //       });

// //     return () => subscription.unsubscribe(); // Cleanup on unmount
// //   }, [slug]);

// //   if (!blog) {
// //     return <div>Loading...</div>;
// //   }

// //   return (
// //     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
// //       {/* Blog Title */}
// //       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
// //         {blog.title}
// //       </h1>

// //       {/* Featured Image */}
// //       <Image
// //         src={urlForImage(blog.image.imageUrl)}
// //         width={500}
// //         height={500}
// //         alt="AI for everyone"
// //         className="rounded"
// //       />

// //       {/* Blog Summary Section */}
// //       <section>
// //         <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
// //           Summary
// //         </h2>
// //         <div className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
// //           <PortableText value={blog.summary} />
// //         </div>
// //       </section>

// //       {/* Main Body of Blog */}
// //       <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
// //         <PortableText value={blog.body} components={myPortableTextComponents} />
// //       </section>

// //       <div>
// //         <a href={blog.documentURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
// //           Document
// //         </a>
// //       </div>
// //     </article>
// //   );
// // }

// // pages/[slug]/index.js

// 'use client';
// import Image from "next/image";
// import { urlForImage } from '../../../lib/image';
// import { client } from '../../../lib/client';
// import { PortableText } from "@portabletext/react";
// import { useEffect, useState } from "react";
// import myPortableTextComponents from "@/assets/PortableTextComponent";
// import Marquee from '@/components/Marquee';
// import Link from "next/link";

// export default function Page({ params: { slug } }) {
//   const [blog, setBlog] = useState(null);
//   const [blogs, setBlogs] = useState([]);

//   const fetchBlog = async () => {
//     const query = `*[_type == 'post' && slug.current == $slug][0] {
//       title, 
//       body[]{
//         ...,
//         "imageUrl": asset->url,
//         "fileUrl": asset->url
//       }, 
//       image{..., "imageUrl": asset->url}, 
//       summary,
//       "documentURL": document.asset->url
//     }`;
//     const data = await client.fetch(query, { slug });
//     setBlog(data);
//   };

//   const fetchBlogs = async () => {
//     const query = `*[_type=='post'] | order(_createdAt asc) {
//       title,
//       image,
//       summary,
//       "slug": slug.current,
//       body
//     }`;
//     const posts = await client.fetch(query);
//     setBlogs(posts);
//   };

//   useEffect(() => {
//     fetchBlog();
//     fetchBlogs();
//   }, [slug]);

//   // Listen to real-time updates
//   useEffect(() => {
//     const subscription = client
//       .listen(`*[_type == "post" && slug.current == $slug]`, { slug })
//       .subscribe((update) => {
//         fetchBlog(); // Fetch the latest data on update
//       });

//     return () => subscription.unsubscribe(); // Cleanup on unmount
//   }, [slug]);

//   if (!blog) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

//     {/* Featured Image */}
//     <div className="relative w-full h-96">
//     <Image
//         src={urlForImage(blog.image.imageUrl)}
//         width={500}
//         height={500}
        
//         alt="AI for everyone"
//         className="rounded"
//       />
//     </div>
    
//     <div className="" >
//       <Link href="/how-we-help-clients">
//        {'<'} Back to How We Help Clients
//       </Link>
//     </div>

//       {/* Blog Title */}
//       <h1 className="text-5xl font-serif xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//         {blog.title}
//       </h1>

      

//       {/* Blog Summary Section */}
//       <section>
//         <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//           Brief
//         </h2>
//         <div className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//           <PortableText value={blog.summary} />
//         </div>
//       </section>

//       {/* Main Body of Blog */}
//       <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//         <PortableText value={blog.body} components={myPortableTextComponents} />
//       </section>

//       <div>
//         <a href={blog.documentURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//           Document
//         </a>
//       </div>

//       {/* Marquee Section */}
//       <div className="">
//         <Marquee blogs={blogs} />
//       </div>
//     </article>
//   );
// }

'use client';

import Image from "next/image";
import { urlForImage } from '../../../lib/image';
import { client } from '../../../lib/client';
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";
import myPortableTextComponents from "@/assets/PortableTextComponent";
import Marquee from '@/components/Marquee';
import Link from "next/link";
import FileViewer from '@/assets/FileViewer';

export default function Page({ params: { slug } }) {
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  const fetchBlog = async () => {
    const query = `*[_type == 'post' && slug.current == $slug][0] {
      title, 
      body[]{
        ...,
        "imageUrl": asset->url,
        "fileUrl": asset->url
      }, 
      image{..., "imageUrl": asset->url}, 
      summary,
      "documentURL": document.asset->url
    }`;
    const data = await client.fetch(query, { slug });
    setBlog(data);
  };

  const fetchBlogs = async () => {
    const query = `*[_type=='post'] | order(_createdAt asc) {
      title,
      image,
      summary,
      "slug": slug.current,
      body
    }`;
    const posts = await client.fetch(query);
    setBlogs(posts);
  };

  useEffect(() => {
    fetchBlog();
    fetchBlogs();
  }, [slug]);

  // Listen to real-time updates
  useEffect(() => {
    const subscription = client
      .listen(`*[_type == "post" && slug.current == $slug]`, { slug })
      .subscribe((update) => {
        fetchBlog(); // Fetch the latest data on update
      });

    return () => subscription.unsubscribe(); // Cleanup on unmount
  }, [slug]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Featured Image */}
      <div className="relative w-full h-96">
        <Image
          src={urlForImage(blog.image.imageUrl)}
          width={500}
          height={500}
          alt="AI for everyone"
          className="rounded"
        />
      </div>
      
      <div>
        <Link href="/how-we-help-clients">
          {'<'} Back to How We Help Clients
        </Link>
      </div>

      {/* Blog Title */}
      <h1 className="text-5xl font-serif xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {blog.title}
      </h1>

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Brief
        </h2>
        <div className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          <PortableText value={blog.summary} />
        </div>
      </section>

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
        <PortableText value={blog.body} components={myPortableTextComponents} />
      </section>

      {/* Document Viewer */}
      <div className="flex justify-center" >
           {blog.documentURL && <FileViewer url={blog.documentURL} />}
      </div>

      {/* Marquee Section */}
      <div>
        <Marquee blogs={blogs} />
      </div>
    </article>
  );
}

// import Image from "next/image";
// import { urlForImage } from '../../../lib/image';
// import { client } from '../../../lib/client';
// import { PortableText } from "@portabletext/react";
// import myPortableTextComponents from "@/assets/PortableTextComponent";

// // To create static pages for dynamic routes
// export default async function page({ params: { slug } }) {

//   const query = `*[_type=='insight' && slug.current==$slug]{
//     title,body[]{
//       ...,
//       "imageUrl":asset->url,
//       "fileUrl":asset->url},
//       image{...,"imageUrl":asset->url},
//       summary,
//     "documentURL":document.asset->url     
//   }[0]`;
//   const blog = await client.fetch(query, { slug });
//   console.log("Fetched blog data:", blog);
  


//   return (
//     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//       {/* Blog Title */}
//       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//         {blog.title}
//       </h1>

//       {/* Featured Image */}
//       <Image
//         src={urlForImage(blog.image)}
//         width={500}
//         height={500}
//         alt="AI for everyone"
//         className="rounded"
//       />

//       {/* Blog Summary Section */}
//       <section>
//       <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//         Summary
//       </h2>
//       <div className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//         <PortableText value={blog.summary} components={myPortableTextComponents} />
//       </div>
//       </section>

//       {/* Main Body of Blog */}
//       <section className="text-lg leading-normal text-dark/80 dark:text-light/80
//       prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
//       prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary
//       prose-strong:text-dark dark:prose-strong:text-white
//       ">
//         <PortableText 
//         value={blog.body} 
//         components={myPortableTextComponents} 
//         />
//       </section>

//       <div>
//         <a href={blog.documentURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//           Document
//         </a>
//       </div>
//     </article>
//   );
// }

'use client'
import Image from "next/image";
import { urlForImage } from '../../../lib/image';
import { client } from '../../../lib/client';
import { PortableText } from "@portabletext/react";
import { useEffect, useState } from "react";
import myPortableTextComponents from "@/assets/PortableTextComponent";
import Marquee from '@/components/Marquee';
import FileViewer from "@/assets/FileViewer";


export default function Page({ params: { slug } }) {
  const [insight, setInsight] = useState(null);
  const [insights, setInsights] = useState([]);

  const fetchInsight = async () => {
    const query = `*[_type == 'insight' && slug.current == $slug][0] {
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
    setInsight(data);
  };

  const fetchInsights = async () => {
    const query = `*[_type=='insight'] | order(_createdAt asc) {
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
    const insights = await client.fetch(query);
    setInsights(insights);
  };

  useEffect(() => {
    fetchInsight();
    fetchInsights();
  }, [slug]);

  // Listen to real-time updates
  useEffect(() => {
    const subscription = client
      .listen(`*[_type == "insight" && slug.current == $slug]`, { slug })
      .subscribe((update) => {
        fetchInsight(); // Fetch the latest data on update
      });

    return () => subscription.unsubscribe(); // Cleanup on unmount
  }, [slug]);

  if (!insight) {
    return <div>Loading...</div>;
  }

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Insight Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {insight.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlForImage(insight.image.imageUrl)}
        width={500}
        height={500}
        alt="Insight Image"
        className="rounded"
      />

      {/* Insight Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <div className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          <PortableText value={insight.summary} />
        </div>
      </section>

      {/* Main Body of Insight */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
        <PortableText value={insight.body} components={myPortableTextComponents} />
      </section>

      <div className="flex justify-center">    
        {insight.documentURL && <FileViewer url={insight.documentURL} />}
      </div>

      {/* Marquee Section */}
      <div className="">
        <Marquee blogs={insights} />
      </div>
    </article>
  );
}

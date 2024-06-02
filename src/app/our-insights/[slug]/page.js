

// 'use client'
// import Image from "next/image";
// import { urlForImage } from '../../../lib/image';
// import { client } from '../../../lib/client';
// import { PortableText } from "@portabletext/react";
// import { useEffect, useState } from "react";
// import myPortableTextComponents from "@/assets/PortableTextComponent";
// import Marquee from '@/components/Marquee';
// import FileViewer from "@/assets/FileViewer";


// export default function Page({ params: { slug } }) {
//   const [insight, setInsight] = useState(null);
//   const [insights, setInsights] = useState([]);

//   const fetchInsight = async () => {
//     const query = `*[_type == 'insight' && slug.current == $slug][0] {
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
//     setInsight(data);
//   };

//   const fetchInsights = async () => {
//     const query = `*[_type=='insight'] | order(_createdAt asc) {
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
//     const insights = await client.fetch(query);
//     setInsights(insights);
//   };

//   useEffect(() => {
//     fetchInsight();
//     fetchInsights();
//   }, [slug]);

//   // Listen to real-time updates
//   useEffect(() => {
//     const subscription = client
//       .listen(`*[_type == "insight" && slug.current == $slug]`, { slug })
//       .subscribe((update) => {
//         fetchInsight(); // Fetch the latest data on update
//       });

//     return () => subscription.unsubscribe(); // Cleanup on unmount
//   }, [slug]);

//   if (!insight) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//       {/* Insight Title */}
//       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold ">
//         {insight.title}
//       </h1>

//       {/* Featured Image */}
//       <Image
//         src={urlForImage(insight.image.imageUrl)}
//         width={500}
//         height={500}
//         alt="Insight Image"
//         className="rounded"
//       />

//       {/* Insight Summary Section */}
//       <section>
//         <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//           Summary
//         </h2>
//         <div className="text-base md:text-xl leading-relaxed text-justify ">
//           <PortableText value={insight.summary} />
//         </div>
//       </section>

//       {/* Main Body of Insight */}
//       <section className="text-lg leading-normal prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark ">
//         <PortableText value={insight.body} components={myPortableTextComponents} />
//       </section>

//       <div className="flex justify-center">    
//         {insight.documentURL && <FileViewer url={insight.documentURL} />}
//       </div>

//       {/* Marquee Section */}
//       <div className="">
//         <Marquee blogs={insights} />
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
import Link from "next/link";
import FileViewer from '@/assets/FileViewer';
import Navbar from '@/components/Navbar';
import Footer from "@/components/Footer";

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
      author->,
      publishDate,
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
      image,
      summary,
      "slug": slug.current,
      body
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
    <article className="mt-16 px-2 2xl:px-12 flex flex-col gap-y-8">
      <Navbar/>
      {/* Featured Image */}
      <div className="relative w-full h-[500px]">
        <Image
          src={urlForImage(insight.image.imageUrl)}
          layout="fill"
          objectFit="cover"
          alt={insight.title}
          className="w-full h-full"
        />
      </div>
      
      <div className="flex flex-col md:flex-row mt-8 gap-x-8">
        {/* Date and Author */}
        <div className="flex flex-col items-center mb-5 md:w-[15.33%]">
          {insight.publishDate && (
            <div className="text-lg text-gray-600 ">
              {new Date(insight.publishDate).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })}
            </div>
          )}
          
          {insight.author && (
            <div className="flex items-center gap-x-2 mt-2">
              
              <Link href={`/our-people/${insight.author.slug.current}`}>
                <span className="text-lg underline">
                  {insight.author.name}
                </span>
              </Link>
            </div>
          )}
        </div>

        {/* Insight Title and Body */}
        <div className="md:w-2/3 p-6">
          <h1 className="text-5xl font-serif lg:text-6xl font-bold text-dark ">
            {insight.title}
          </h1>

          <section className="mt-8">
            <div className="text-lg leading-normal text-dark/80 ">
              <PortableText value={insight.body} components={myPortableTextComponents} />
            </div>
          </section>
        </div>
      </div>

      {/* Document Viewer */}
      <div className="flex justify-center mt-8 ">
      {insight.documentURL && (
        <div className="w-full h-96 p-6 md:w-2/3">
          <FileViewer url={insight.documentURL} />
        </div>
      )}
      </div>

      {/* Marquee Section */}
      <div className="flex justify-center">
        <Marquee blogs={insights} />
      </div>

      <Footer />
    </article>
  );
}


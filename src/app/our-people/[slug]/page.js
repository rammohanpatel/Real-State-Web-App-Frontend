// import Image from "next/image";
// import { urlForImage } from '../../../lib/image';
// import { client } from '../../../lib/client';
// import { PortableText } from "@portabletext/react";
// import myPortableTextComponents from "@/assets/PortableTextComponent";

// // To create static pages for dynamic routes
// export default async function page({ params: { slug } }) {

//   const query = `*[_type=='person' && slug.current==$slug]{
//     _id,
//         name,
//         body,
//         role,
//         description,
//         image,
//   }[0]`;
//   const person = await client.fetch(query, { slug });
//   console.log("Fetched blog data:", person);
  


//   return (
//     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//       {/* Blog Title */}
//       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold ">
//         {person.name}
//       </h1>

//       {/* Featured Image */}
//       <Image
//         src={urlForImage(person.image)}
//         width={500}
//         height={500}
//         alt="AI for everyone"
//         className="rounded"
//       />

//       {/* Blog Summary Section */}
//       <section>
//       <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//         Description
//       </h2>
//       <div className="text-base md:text-xl leading-relaxed text-justify ">
//         <PortableText value={person.description} />
//       </div>
//       </section>

//       {/* Main Body of Blog */}
//       <section className="text-lg leading-normal 
//       prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
//       prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary
//       prose-strong:text-dark 
//       ">
//         <PortableText 
//         value={person.body} 
//         components={myPortableTextComponents} 
//         />
//       </section>
//     </article>
//   );
// }

import Image from "next/image";
import { urlForImage } from '../../../lib/image';
import { client } from '../../../lib/client';
import { PortableText } from "@portabletext/react";
import myPortableTextComponents from "@/assets/PortableTextComponent";

// To create static pages for dynamic routes
export default async function page({ params: { slug } }) {
  const query = `*[_type=='person' && slug.current==$slug]{
    _id,
    name,
    body,
    role,
    description,
    image,
    social
  }[0]`;
  
  const person = await client.fetch(query, { slug });
  console.log("Fetched person data:", person);

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Top Section */}
      <section className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image on the left */}
        <div className="flex-shrink-0">
          <Image
            src={urlForImage(person.image)}
            width={200}
            height={200}
            alt={person.name}
            className="rounded-full"
          />
        </div>

        {/* Name, Social Icons, and Description on the right */}
        <div className="flex-grow">
          <h1 className="text-2xl xs:text-3xl lg:text-4xl font-bold">
            {person.name}
          </h1>
          {/* <div className="flex space-x-4 mt-2">
            {person.social?.map((social, index) => (
              <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                <Image src={`/icons/${social.platform}.svg`} width={24} height={24} alt={social.platform} />
              </a>
            ))}
          </div> */}
          <div className="text-base md:text-lg leading-relaxed mt-4">
            <PortableText value={person.description} />
          </div>
        </div>
      </section>

      {/* About and Expertise Section */}
      <section className="flex flex-col lg:flex-row gap-8 mt-8">
        {/* About Section on the left */}
        <div className="flex-grow">
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            About
          </h2>
          <div className="text-base md:text-lg leading-relaxed mt-2">
            <PortableText value={person.body} components={myPortableTextComponents} />
          </div>
        </div>

        {/* Expertise Section on the right */}
        <div className="flex-grow">
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            Expertise
          </h2>
          <div className="text-base md:text-lg leading-relaxed mt-2">
            {/* Assuming expertise is a separate field in the dataset */}
            {/* <PortableText value={person.expertise} components={myPortableTextComponents} /> */}
            Expertise
          </div>
        </div>
      </section>
    </article>
  );
}


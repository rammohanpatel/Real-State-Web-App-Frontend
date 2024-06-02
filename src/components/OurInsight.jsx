import Image from "next/image";
import Link from "next/link";
import { urlForImage } from '../lib/image';
import { PortableText } from "@portabletext/react";

export default function OurInsightCard({ blog }) {
  return (
    <section className="flex flex-col md:flex-row w-full h-[360px] p-4 mb-6 rounded bg-white shadow-md hover:shadow-lg hover:shadow-gray-300 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-48 md:h-full mb-4 md:mb-0">
        <Image
          src={urlForImage(blog.image)}
          alt="Insight Image"
          layout="fill"
          objectFit="cover"
          className="rounded-t md:rounded-l md:rounded-t-none"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col p-4 md:p-6 w-full md:w-1/2">
        {/* Meta Information */}
        <div className="flex justify-between text-gray-600 text-sm mb-2">
          <div>{blog.tagType}</div>
          <div>
            {blog.publishDate && new Date(blog.publishDate).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
        </div>

        {/* Title and Summary */}
        <div className="flex flex-col justify-between gap-y-4">
          <Link href={`/our-insights/${blog.slug}`}>
            <h2 className="text-xl font-semibold line-clamp-2 hover:text-sky-700 hover:underline leading-tight">
              {blog.title} <span className="text-blue-800 font-extrabold text-lg">{'>'}</span>
            </h2>
          </Link>

          <div className="line-clamp-3 text-gray-700">
            <PortableText value={blog.summary} />
          </div>
        </div>
      </div>
    </section>
  );
}

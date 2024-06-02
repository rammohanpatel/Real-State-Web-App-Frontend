import Image from "next/image";
import Link from "next/link";
import { urlForImage } from '../lib/image';
import { PortableText } from "@portabletext/react";

export default function BlogCard({ blog }) {
  return (
    <section className="flex flex-col md:w-[90%] h-[480px] p-4 rounded hover:shadow-md hover:shadow-gray-300 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section */}
      <div className="relative h-48 w-full mb-4">
        <Image
          src={urlForImage(blog.image)}
          alt="AI for everyone"
          layout="fill"
          objectFit="cover"
          className="rounded-t"
        />
      </div>

      {/* Meta Information */}
      <div className="flex justify-between p-4 px-0 text-gray-600 text-sm">
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
      <div className="flex flex-col justify-between gap-y-1 p-4 px-0 ">
        <Link href={`/how-we-help-clients/${blog.slug}`}>
          <h2 className="text-xl font-semibold line-clamp-2 hover:text-sky-700 hover:underline leading-tight ">
            {blog.title} <span className="text-blue-800 font-extrabold text-lg">{'>'}</span>
          </h2>
        </Link>

        <div className="line-clamp-3 text-gray-700">
          <PortableText value={blog.summary} />
        </div>
      </div>
    </section>
  );
}

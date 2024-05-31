import Image from "next/image";
import Link from "next/link";
import { urlForImage } from '../lib/image';
import { PortableText } from "@portabletext/react";

export default function OurInsightCard({blog}) {
  return (
    <section className="flex flex-col justify-between h-[480px]  rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section*/}
      <div className="relative max-h-76 flex-1">
        <Image
          src={urlForImage(blog.image)}
          alt="AI for everyone"
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gapx-y-4  p-4">
        <Link href={`/our-insights/${blog.slug}`}>
            <h2 className="text-lg font-semibold line-clamp-2 text-dark hover:text-sky-700 hover:underline  dark:text-light leading-tight mb-2">
            {blog.title} <span className="text-blue-800 font-extrabold text-lg"> {'>'} </span>
            </h2>
        </Link>

        <div className="text-dark/70 dark:text-light/70 line-clamp-3">
            <PortableText value={blog.summary} />
        </div>
      </div>
    </section>
  );
}
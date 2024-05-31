import Image from 'next/image';
import { urlForImage } from '../lib/image';
import FileViewer from './FileViewer';


const FileComponent = ({ value }) => {
    const { fileUrl, title } = value;

    if (!fileUrl) {
      return null; // Return null if there's no fileUrl
    }

    return (
      <div className="my-4">
        <FileViewer url={fileUrl} />
        <a href={fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
          {title || 'Download File'}
        </a>
      </div>
    );
  };

  const myPortableTextComponents = {
    types: {
      image: ({ value }) => (
        <div className="my-4">
          <Image
            src={urlForImage(value.imageUrl)}
            alt={value.alt || 'Blog Image'}
            width={800}
            height={600}
            className="rounded"
          />
        </div>
      ),
      file: FileComponent, // Ensure FileComponent is correctly placed under types
    },
    marks: {
      link: ({ value, children }) => (
        <a href={value.href} className="text-blue-500 underline">
          {children}
        </a>
      ),
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-4xl font-bold mt-6 mb-2">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-3xl font-bold mt-6 mb-2">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-bold mt-6 mb-2">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-xl font-bold mt-6 mb-2">{children}</h4>
      ),
      p: ({ children }) => (
        <p className="my-4">{children}</p>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="ml-6 list-disc">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="ml-6 list-decimal">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => (
        <li className="ml-4 list-disc">{children}</li>
      ),
      number: ({ children }) => (
        <li className="ml-4 list-decimal">{children}</li>
      ),
    },
  };

  export default myPortableTextComponents;
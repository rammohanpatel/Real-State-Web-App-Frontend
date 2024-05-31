
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Footer from './Footer';
import { client } from '../lib/client';
import { urlForImage } from '@/lib/image';
import Link from 'next/link';
import OurPeopleCard from './OurPeopleCard';

const OurPeople = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const fetchPeople = async () => {
      const query = `*[_type == "person"]{
        _id,
        name,
        role,
        "slug": slug.current,
        description,
        "imageUrl": image.asset->url
      }`;

      const peopleData = await client.fetch(query);
      setPeople(peopleData);
    };

    fetchPeople();
  }, []);

  return (
    <>
      <section id="our-team" className="bg-gray-100 py-32">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">Meet Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {people.map(person => (
              <OurPeopleCard person={person} key={person._id} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OurPeople;

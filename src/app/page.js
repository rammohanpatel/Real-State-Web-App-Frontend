'use client'

import axios from 'axios';
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import HomePage from "@/components/HomePage";
import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import OurInsightCard from "@/components/OurInsight";
import Link from "next/link";
import OurPeopleCard from "@/components/OurPeopleCard";
import { client } from '../lib/client';

export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [insights, setInsights] = useState([]);
  const [person, setPerson] = useState([]);
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(null);

  // Fetch initial data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[_type=='post'] | order(_createdAt asc) {
          title,
          image,
          featured,
          summary,
          "slug": slug.current,
          body
        }`;

        const insightQuery = `*[_type=='insight'] | order(_createdAt asc) {
          title,
          image,
          featured,
          summary,
          "slug": slug.current,
          body
        }`;

        const personQuery = `*[_type == 'person' && featured == true] | order(_createdAt asc) {
          name,
          "imageUrl": image.asset->url,
          role,
          description,
          "slug": slug.current
        }`;

        const posts = await client.fetch(query);
        const insights = await client.fetch(insightQuery);
        const people = await client.fetch(personQuery);

        console.log('Fetched Posts:', posts);
        console.log('Fetched Insights:', insights);
        console.log('Fetched People:', people);

        const featuredPosts = posts.filter(post => post.featured);
        const featuredFromInsights = insights.filter(insight => insight.featured);

        console.log('Featured Posts:', featuredPosts);
        console.log('Featured Insights:', featuredFromInsights);

        setBlogs(featuredPosts);
        setInsights(featuredFromInsights);
        setPerson(people);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: 'POST',
        url: 'https://simple-chatgpt-api.p.rapidapi.com/ask',
        headers: {
          'content-type': 'application/json',
          'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'simple-chatgpt-api.p.rapidapi.com'
        },
        data: {
          question: question
        }
      };

      const response = await axios.request(options);
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Navbar />
      <HomePage />
      <div>
        <section className="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </section>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center mt-28 mb-8 text-primary">Featured Insights</h1>
        <section className="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {insights.map((insight, index) => (
            <OurInsightCard blog={insight} key={index} />
          ))}
        </section>
      </div>
      <div className="flex justify-center">
        <Link href="/our-insights">
          <button className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            View All Insights
          </button>
        </Link>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-center mt-28 mb-8 text-primary">Our People</h1>
        <section className="m-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {person.map((people, index) => (
            <OurPeopleCard person={people} key={index} />
          ))}
        </section>
      </div>
      <div className="flex justify-center">
        <Link href="/our-people">
          <button className="bg-transparent hover:bg-blue-800 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            View All People
          </button>
        </Link>
      </div>

      {/* Chatbot Section */}
      <div className="chatbot-container mt-10 p-4 border border-gray-300 rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Ask a question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full mb-4 p-2 border border-gray-300 rounded-lg"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Ask</button>
        </form>
        {response && (
          <div className="response mt-4 p-4 bg-gray-100 rounded-lg">
            <p>{response.answer}</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "motion/react";
import {client} from "../components/lib/Client";
import { format } from "date-fns";
import { PortableText } from "@portabletext/react";
import { FaArrowLeft } from "react-icons/fa";
const BlogPost = () => {
  const [blogpost, setBlogPost] = useState([]);

  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        slug,
        body,
        publishedAt,
        mainImage{
        asset -> {
          _id,
          url
        },
        alt
        },
        images[]{ 
          asset->{
            _id,
            url
          },
          alt
        },
        "name" : author -> name,
        "categories": categories[]->title,
      }`
      )
      .then((data) => {
        setBlogPost(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  useEffect(() => {
    document.title = `Reading | ${blogpost.title}`;
  }, [blogpost.title]);

  if (!blogpost) return <p className="text-center my-10">Loading project...</p>;
  return (
    <>
      <NavLink
        to="/Blog"
        className="ml-6 mb-16 text-xs font-Sora hover:bg-blue-500 uppercase sma:bg-blue-500 mda:bg-blue-500 hover:text-white sma:text-white mda:text-white inline-flex px-2 py-2 duration-150 ease-linear delay-75 rounded-3xl mt-10  gap-2 items-center "
      >
        <FaArrowLeft /> Back to Projects
      </NavLink>
      {blogpost && (
        <section className="mx-6 mb-5">
          {blogpost.mainImage && (
            <img
              className="h-[500px] w-full object-cover rounded-2xl"
              src={blogpost.mainImage.asset.url}
              alt={blogpost.mainImage.alt || blogpost.title}
            />
          )}
          <h1 className="mt-6 text-4xl font-Sora">{blogpost.title}</h1>
          <p className="text-sm font-Anek mt-4 text-gray-500 mb-4">
            By {blogpost.name || "Goodhope Consulting Engineers"} &middot;{" "}
            {blogpost.publishedAt
              ? format(new Date(blogpost.publishedAt), "MMMM dd, yyyy")
              : "Date not available"}
          </p>
          <div className="mt-2 flex flex-wrap gap-2 mb-6">
            <span className="text-sm font-Manrope font-medium capitalize">
              Service Offered:
            </span>
            {blogpost.categories?.map((cat, i) => (
              <span
                key={i}
                className="text-xs font-Anek bg-green-100 text-green-800 px-2 py-1 rounded-md"
              >
                {cat}
              </span>
            ))}
          </div>
          <div className="font-Varela decoration-black list-disc text-base">
            <PortableText value={blogpost.body} className="font-Manrope" />
          </div>

          {blogpost.images && blogpost.images.length > 0 && (
            <div className="grid lg:grid-cols-3 w-full sma:grid-cols-1 mdaa:grid-cols-2 mda:grid-cols-1 gap-3 sma:gap-4 mda:gap-4 my-12 ">
              {blogpost.images.map((img, i) => {
                const url = img?.asset?.url;
                if (!url) return null;
                return (
                  <img
                    src={url}
                    key={i}
                    alt={img.alt || `${blogpost.title} image ${i + 1}`}
                    className=" mdaa:gap-4 w-[400px] h-[270px] object-cover rounded shadow"
                  />
                );
              })}
            </div>
          )}
        </section>
      )}
      
    </>
  );
};

export default BlogPost;


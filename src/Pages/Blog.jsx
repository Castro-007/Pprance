import React, {useState, useEffect} from 'react'
import BlogBanner from '../assets/Images/MSuits/perfectwedbg.jpg'
import { NavLink } from 'react-router'
import { client } from "../components/lib/Client";
import { format } from 'date-fns';
import { motion } from 'motion/react';

const Blog = () => {


  const [stories, setStories] = useState([])
  const [filter, setFilter] = useState('ALL CATEGORIES')

  useEffect(() => {
    client.fetch(
      `*[_type == "post"]{
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
        "categories": categories[]->title,
        "name": author->name,
        "authorImage": author->image
      } | order(publishedAt desc) `
    ).then((data) => {setStories(data);console.log(data)}).catch(console.error)
  }, [])

    const categories = ["ALL CATEGORIES", ...new Set(stories.flatMap((x) => x.categories || []).filter(Boolean))];

    const filteredData =
  filter === 'ALL CATEGORIES'
    ? stories
    : stories.filter((item) => item.categories?.includes(filter));
  
    const handleClick = (category) => {
      setFilter(category)
    }

  return (
    <div>
      <main>
        <div className='w-full h-full relative'>
          <img src={BlogBanner} alt="Blog Banner" className='w-full h-[600px] object-cover brightness-50' />
          <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4'>
            <h1 className='text-white font-Anek font-bold text-4xl md:text-5xl lg:text-6xl mb-4'>From Our Blog</h1>
            <p className='text-white font-Nunito text-lg md:text-xl lg:text-2xl'>Stay updated with the latest trends and insights in fashion.</p>
          </div>
        </div>
        <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-Manrope font-bold text- mb-6">Latest Articles</h2>

          <div className="flex flex-wrap mt-12 sma:mt-6 mda:mt-6 justify-center mb-8 sma:gap-1 mda:gap-1 lg:gap-5">
            {categories.map((x) => (
              <button key={x}
              onClick={() => handleClick(x)}
                className={`cursor-pointer transition-all px-4 py-2 mb-4 rounded-lg border font-Anek text-sm
              ${
                filter === x
                  ? "bg-blue-600 text-white border-blue-700"
                  : "bg-neutral-200 text-black border-blue-600 hover:brightness-110"
              }
            `}
              >
                {x}
              </button>
            ))}
              </div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto px-5 mb-16">
        {filteredData.length > 0 ? (
          filteredData.map((story) => (
            <NavLink
              key={story.slug.current}
              to={`/Blog/${story.slug.current}`}
              className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <img
                src={story.mainImage?.asset?.url}
                alt={story.mainImage?.alt || story.title}
                className="w-full h-64 overflow-hidden duration-200 delay-150 ease-linear object-cover"
                loading='lazy'
              />
              <div className="p-4 bg-[#f6f6f6]">
                <h2 className="my-2 text-base group-hover:text-blue-500 font-Sora font-medium delay-150 ease-linear duration-150">
                  {story.title}
                </h2>
                <p className="text-sm text-gray-600 font-semibold font-Anek">
                 Date Posted: <span className='font-normal'>{format(new Date(story.publishedAt), "MMMM dd, yyyy")}</span>
                </p>
                <p className=' font-Nunito text-gray-500 font-medium group-hover:text-black delay-150 ease-linear duration-150'>
                  {`${story.body?.[0]?.children?.[0]?.text.substring(0, 120)}...`}
                </p>
                <div className="mt-2 flex mb-5 flex-wrap gap-2">
                  {story.categories?.map((cat, i) => (
                    <span
                      key={i}
                      className="text-xs font-Anek bg-blue-100 text-blue-800 px-2 py-1 rounded-md"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                  {/* <NavLink to={`/Blog/${story.slug.current}`} className="text-base mt-3 font-Nunito bg-blue-100 text-blue-800 px-2 py-1 rounded-md">Read More &rarr;</NavLink> */}
              </div>
            </NavLink>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 text-lg font-Anek mt-10 col-span-full"
          >
            No projects here yet.
          </motion.p>
        )}
      </div>

          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {
              BlogData.map((x) => (
                <NavLink key={x.Id} className=" rounded-2xl group overflow-hidden border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className='overflow-hidden'>
                  <img src={x.Image} alt={x.Title} className="w-full h-48 hover:scale-105 overflow-hidden duration-200 delay-150 ease-linear object-cover" loading="lazy" />

                  </div>
                  <h3 className='mt-5 text-2xl font-Anek font-medium text-yellow-700'>{x.Category}</h3>
                  <h2 className='my-2 text-base group-hover:text-blue-500 font-Sora font-medium delay-150 ease-linear duration-150'>{x.Title}</h2>
                  <p className='line-clamp-2 font-Nunito text-gray-500 font-medium group-hover:text-black delay-150 ease-linear duration-150'>{x.Desc}...</p>
                <div className='flex justify-between mt-3'>
                  <span className='text-sm font-Nunito  group-hover:text-blue-500 font-semibold delay-150 ease-linear duration-150'>By {x.Author} | </span>
                  <span className='text-sm font-Nunito text-gray-400'> {x.Date} </span>
                </div>
                  <span className='text-sm font-Nunito text-gray-400'> {x.Location} </span>
                </NavLink>
              ))
            }
          </div> */}
        </div>
        </section>
      </main>
    </div>
  )
}

export default Blog

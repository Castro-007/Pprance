import React, {useState,useEffect, useRef} from "react";
import gsap from "gsap";
import EmblaCarousel from "../components/Embla/EmblaCarousel";
import { CategoryFadeCarousel } from "../components/Embla/CategoryFadeCarousel";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { NavLink } from "react-router";
import { BlogHome, CollectionData, ServiceCard } from "../Utils";
import { FaArrowRight } from "react-icons/fa";
import EmblaPerView from "../components/Embla/EmblaPerView";
import { FashionScroll } from "../Utils";
import Profile from "../assets/Images/SiteImg/prance762.jpg"
import { client } from "../components/lib/Client";
import { format } from 'date-fns';



const Home = () => {
  const containerRef = useRef(null)
   const [stories, setStories] = useState([])

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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray('.fashion-item')
      const totalWidth = items.reduce(
        (acc, item) => acc + item.offsetWidth + 32,
        0
      )
      gsap.to(items, {
        x: `-=${totalWidth / 2}`,
        ease: 'none',
        duration: 30,
        repeat: -1,
      })
    })
    return () => ctx.revert()
  }, [])


  return (
    <div className=" bg-[#0F1621] py-6 ">
  
      <EmblaCarousel slides={[0, 1, 2, 3, 4]} options={{ loop: true }} />
      <div className="mt-12  ">
        <div className="flex sma:flex-col mda:flex-col sma:mx-4 mda:mx-4 justify-around gap-16">
          <div className="relative">
            <img loading="lazy" src={Profile} alt="Prance Image" className="lg:w-[300px] lg:h-[400px] sma:w-[250px] mda:w-[250px] rounded-md  bg-gradient-to-r from-yellow-500 to-amber-300 m-5"/>
            {/* <div className="w-[280px] sma:w-[200px] mda:w-[200px] rounded-md left-40 bottom-14 h-60 absolute  bg-gradient-to-r from-lime-400 to-green-200  m-5"></div> */}
          </div>

          <div className="basis-[40%] space-y-5  leading-loose">
            <h2 className="text-blue-500 font-Manrope  font-extrabold">
              THE MAN BEHIND THE BRAND
            </h2>
            <h1 className="text-white text-5xl sma:text-4xl mda:text-4xl font-Anek mt-5 uppercase ">
              weaving culture into every stitch
            </h1>
            <p className=" text-white tracking-normal text-base font-Nunito">
              <span className="uppercase text-blue-500">P.Prance KLODING</span>{" "}
              isn't just a label it's a narrative of Nigerian resilience and
              elegance. Driven by a vision to elevate traditional attire for the
              global stage, we blend ancient techniques with futuristic cuts.
            </p>
            <div className="grid grid-cols-2 pt-8 mb-6">
              <div>
                <h3 className="text-4xl text-blue-500 font-Anek">20+</h3>
                <p className="text-white font-Nunito">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl text-blue-500 font-Anek">500+</h3>
                <p className="text-white font-Nunito">Satisfied Clients</p>
              </div>
            </div>
            <NavLink to="/About">
              <button className="border-blue-500 border-b flex items-center font-Varela gap-3 text-white text-md px-1 pt-8 hover:text-blue-600 ease-linear transition duration-150">
                Read Full Biography{" "}
                <MdOutlineArrowRightAlt className="text-xl" />
              </button>
            </NavLink>
          </div>
        </div>
        <main className="  mt-20 pt-10 ">
          <div className="bg-[#192538] py-10 lg:px-16 sma:px-5 mda:px-5 ">
            <h1 className="text-4xl font-Manrope text-white underline underline-offset-8 decoration-blue-500">
              Our Services
            </h1>
            <div className="flex sma:flex-col mda:flex-col justify-between mt-8">
              <p className="text-white font-Nunito basis-[40%] text-base">
                Tailored Experiences designed to make you look and feel your
                absolute best.
              </p>
              <NavLink
                to="/Contact"
                className="text-white border sma:mt-5 mda:mt-5 border-blue-500 w-fit h-fit px-3 py-2 hover:text-blue-600 ease-linear transition duration-150 rounded-lg font-Nunito text-base"
              >
                Book Our Expertise
              </NavLink>
            </div>
            <div className="flex sma:flex-col mda:flex-col sma:space-y-6 justify-around mt-12">
              {ServiceCard.map((x) => (
                <div
                  key={x.Id}
                  className="w-[350px] h-[300px] rounded bg-gray-700/30 p-4"
                >
                  <div className="flex justify-center items-center w-10 h-10 rounded-lg bg-blue-900">
                    <x.SocialIcon className="text-blue-500 text-4xl" />
                  </div>
                  <h2 className="text-2xl my-4 text-white font-Manrope">
                    {x.Title}
                  </h2>
                  <p className="text-white font-Nunito">{x.Desc}</p>
                  <NavLink
                    to={x.To}
                    className="mt-6 group text-blue-500 inline-block border-b border-blue-500 pb-1 hover:text-blue-600 ease-linear transition duration-150"
                  >
                    <button className="flex gap-2 items-center">
                      {x.NavTxt}{" "}
                      <FaArrowRight className="group-hover:translate-x-1 ease-linear transition duration-150" />
                    </button>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
          <div className="my-10 pt-12 lg:px-16 sma:px-5 mda:px-5 ">
            <h1 className="text-4xl font-Manrope text-white underline underline-offset-8 decoration-blue-500">
              Fresh From Our Studios
            </h1>

            <div className="mt-10">
              <EmblaPerView
                options={{
                  align: "start",
                  loop: true,
                  speed: 5,
                }}
              />
            </div>
          </div>

          <div className="my-10 pt-12 lg:px-16 sma:px-5 mda:px-5">
            <h1 className="text-4xl sma:text-3xl mda:text-3xl font-Manrope text-white underline underline-offset-8 decoration-blue-500">
              Our Collection
            </h1>
            <div>
              <div className="grid lg:grid-cols-2 mx-8 sma:grid-cols-1 mda:grid-cols-1 mt-10">
                {CollectionData.map((x) => (
                  <div
                    key={x.Id}
                    className="mt-10 lg:w-[500px] overflow-hidden lg:h-[500px] sma:w-[300px] relative sma:h-[400px] flex sma:flex-col mda:flex-col justify-between items-center gap-8"
                  >
                    <CategoryFadeCarousel images={x.Image} />
                    
                    {/* <div className="hidden group-hover:block ease-linear duration-150 transition absolute top-0 left-0 bg-black/50 p-5 rounded w-full h-full"></div> */}
                    <h2 className="absolute bottom-20 left-10 text-white text-3xl uppercase font-Anek">
                      {x.Title}
                    </h2>
                    <NavLink
                      to="/Collection"
                      className="absolute bottom-10 left-10 text-white border border-blue-500 px-3 py-2 hover:text-blue-600 ease-linear transition duration-150 rounded-lg font-Nunito text-base"
                    >
                      Explore More {" "}
                      <span className="group-hover:-rotate-45">&rarr;</span>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
            <div className="my-10 pt-12">
              <div className="flex justify-between">
              <h1 className="text-4xl sma:text-3xl mda:text-3xl font-Manrope text-white underline underline-offset-8 decoration-blue-500">
              Latest From The Blog
            </h1>
              <NavLink>
                <button className="text-white border group flex gap-2 items-center border-blue-500 px-3 py-2 hover:text-blue-600 ease-linear transition duration-150 rounded-lg font-Nunito text-base">
                  View All <FaArrowRight className="group-hover:translate-x-1 ease-linear transition duration-150" />
                </button>
              </NavLink>
              </div>
              <div className="grid sma:grid-cols-1 mda:grid-cols-1 grid-cols-2 mt-6">
                {
                  BlogHome.map((x) => (
                    <NavLink to="" className="flex sma:flex-col mda:flex-col justify-around ease-linear transition duration-150 hover:rounded hover:bg-[#192538] p-4" key={x.Id}>
                      <div>
                        <img loading="lazy" src={x.Image} className="w-44 object-cover flex justify-center items-center rounded h-44" alt={x.Title} />
                      </div>
                      <div className="basis-[60%] sma:basis-[30%] sma:mt-3 mda:mt-3">
                        <h2 className="text-white text-xl sma:text-base mda:text-base font-Anek">{x.Title}</h2>
                        <p className="text-slate-500 font-Nunito text-sm mt-2">{x.Desc}</p>
                        <p className="text-slate-500 text-xs mt-2">{x.Date}</p>
                        <button className="mt-4 text-white border group flex gap-2 items-center border-blue-500 px-2 py-1 hover:text-blue-600 ease-linear transition duration-150 rounded-lg font-Nunito text-sm">Read More</button>
                      </div>
                    </NavLink>
                  ))
                }
              </div>
            </div>
          </div>
          <section className="overflow-hidden w-full pt-20 bg-neutral-950">
      <div
        ref={containerRef}
        className="flex sma:items-center mda:items-center flex-nowrap gap-8 w-max"
      >
        {[...FashionScroll, ...FashionScroll].map((item, index) => (
          <div
            key={index}
            className="fashion-item shrink-0 relative min-w-[120px] h-[220px] rounded-xl overflow-hidden"
            style={{ willChange: 'transform' }}
          >
            <img
              loading="lazy"
              src={item.Image}
              alt={item.Label}
              className="w-full sma:w-36 mda:w-32 h-full object-cover"
            />
            {/* <span className="absolute bottom-4 left-4 text-white text-xl font-semibold">
              {item.Label}
            </span> */}
          </div>
        ))}
      </div>
      <div className=" -10 py-12 pb-8 bg-[#192538] lg:px-16 sma:px-5 mda:px-5">
        <div className="flex sma:flex-col mda:flex-col justify-between py-12">
          <div>
            <h1 className="text-4xl mb-8 sma:text-2xl mda:text-2xl font-Manrope text-white underline underline-offset-8 decoration-blue-500">
              View our Socials
            </h1>
          </div>
          <div>

<iframe src="https://snapwidget.com/embed/1116059" className="snapwidget-widget border-0 overflow-hidden w-[465px] h-[310px]" allowTransparency="true"  scrolling="no" title="Retail&All"></iframe>
          </div>
        </div>
        
      </div>
    </section>
        </main>
      </div>
    </div>
  );
};

export default Home;

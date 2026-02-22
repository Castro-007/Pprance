import Img11 from "../assets/Images/SiteImg/prance777.jpg"
import Unsplash2 from "../assets/Images/SiteImg/prance713.jpg"
import Img10 from "../assets/Images/SiteImg/prance767.jpg"
import Img9 from "../assets/Images/SiteImg/HomeBg4.jpg"
import { RxScissors } from "react-icons/rx";
import { TbHanger } from "react-icons/tb";
import { SiStylelint } from "react-icons/si";
import Agbada1 from "../assets/Images/PerView/PerView9.jpg"
import AsoOke from "../assets/Images/PerView/PerView1.jpg"
import AsoOke2 from "../assets/Images/PerView/PerView2.jpg"
import FemSuits from "../assets/Images/PerView/PerView3.jpg"
import MaleSuits from "../assets/Images/MSuits/Suits11.jpg"
import FemaleSuits from "../assets/Images/FSuits/FSuits.jpg"
import FemaleSuits2 from "../assets/Images/FSuits/FSuits2.jpg"
import FemDress from "../assets/Images/PerView/Femdress.jpg"
import AgbadaCollec from "../assets/Images/Agbada/Agbada1.jpg"
import AgbadaCollec1 from "../assets/Images/Agbada/Agbada2.jpg"
import SuitCollec from "../assets/Images/MSuits/SuitsALL.jpg"
import SuitCollec1 from "../assets/Images/SiteImg/prance803.jpg"
import AsoOkeCollec from "../assets/Images/MTrad/Mtrad1.jpg"
import AsoOkeCollec1 from "../assets/Images/MTrad/Mtrad2.jpg"
import FemasoEbi from "../assets/Images/FTrad/Ftrad1.jpg"
import FemasoEbi1 from "../assets/Images/FTrad/Ftrad2.jpg"
import Fabricshome from "../assets/Images/fabricshome.jpg"
import Sewinghome from "../assets/Images/sewinghome.jpg"
import Fashscroll1 from "../assets/Images/fashscroll1.jpeg"
import Fashscroll2 from "../assets/Images/fashscroll2.jpeg"
import Fashscroll3 from "../assets/Images/fashscroll3.jpeg"
import Fashscroll4 from "../assets/Images/fashscroll4.jpeg"
import Fashscroll5 from "../assets/Images/fashscroll5.jpeg"
import Fashscroll6 from "../assets/Images/fashscroll6.jpeg"
import Fashscroll7 from "../assets/Images/fashscroll7.jpeg"
import Blogspic from "../assets/Images/Blogs/blogspic.jpg"
import Glasslye from "../assets/Images/Blogs/Glassstyle.jpg"
import Blogsplace from "../assets/Images/Blogs/Blogsplace.jpg"
import { FaCalendar, FaGlobe, FaStar } from "react-icons/fa";






export const BlogData = [
  {
    Id: 1,
    Image: Blogspic,
    Title: "The Evolution of Agbada in Modern Fashion",
    Date: "10th May 2023",
    Location: "Lagos, Nigeria",
    Category: "Fashion History",
    Desc: " Explore how the traditional Agbada has been reimagined in contemporary fashion. ",
    Author: "P Prance Admin",
  },
  {
    Id: 2,
    Image: Glasslye,
    Title: "Choosing The Perfect Fabric for your suit",
    Date: "12th May 2023",
    Location: "Lagos, Nigeria",
    Category: "Collection",
    Desc: "Learn how to choose the perfect fabric for your suit, whether it's a formal or casual occasion",
    Author: "P Prance Admin",
  },
  {
    Id: 3,
    Image: Blogsplace,
    Title: "Top 5 Accessories to Elevate Your Traditional Look",
    Date: "14th May 2023",
    Location: "Lagos, Nigeria",
    Category: "Style Tips",
    Desc: "Discover the must-have accessories that can take your traditional attire to the next level",
    Author: "PPrance Kloding",
  },
]


export const CollectCategory = [
  {
    Id: 1,
    Image: AgbadaCollec,
    Label: "Agbada"
  },
  {
    Id: 2,
    Image: AsoOkeCollec,
    Label: "Traditional"
  },
  {
    Id: 3,
    Image: SuitCollec,
    Label: "Suits"
  },
  {
    Id: 4,
    Image: FemasoEbi,
    Label: "Traditional"
  },
]

export const FashionScroll = [
  {
    Id: 1,
    Image: Fashscroll1,
    Label: "Traditional"
  },
  {
    Id: 2,
    Image: Fashscroll4,
    Label: "suits"
  },
  {
    Id: 3,
    Image: Fashscroll3,
    Label: "Traditional"
  },
  {
    Id: 4,
    Image: Fashscroll6,
    Label: "Agbada"
  },
  {
    Id: 5,
    Image: Fashscroll5,
    Label: "Suits"
  },
  {
    Id: 6,
    Image: Fashscroll2,
    Label: "Traditional"
  },
  {
    Id: 7,
    Image: Fashscroll7,
    Label: "Agbada"
  },

]

export const NavBlink = [
  {
    Id: 1,
    name: "Home",
    Link: "/",
  },
  {
    Id: 2,
    name: "About",
    Link: "/About",
  },
  {
    Id: 3,
    name: "Services",
    Link: "/Services",
  },
  
  {
    Id: 4,
    name: "Shop",
    Link: "/Shop",
  },
  {
    Id: 5,
    name: "Blog",
    Link: "/Blog",
  },
  {
    Id: 6,
    name: "Contact",
    Link: "/Contact",
  },
];



export const ServiceCard = [
  {
    Id: 1,
    SocialIcon: RxScissors ,
    Title: "Bespoke Tailoring",
    Desc: "Custom made suits and native outfits tailored to your exact measurements for a flawless fit that commands respect.",
    To: "/Shop",
    NavTxt: "Learn More",
  },
  {
    Id: 2,
    SocialIcon: TbHanger ,
    Title: "Ready-To-Wear",
    Desc: "Curated Collections available for your immediate purchase. High-Fashion aesthetics for the modern individual on the go.",
    To: "/Shop",
    NavTxt: "Shop Now",
  },
  {
    Id: 3,
    SocialIcon: SiStylelint,
    Title: "Styling and Consulting",
    Desc: "Personalized Wardrobe Consulting to elevate your style for events, weddings or a complete sartorial refresh",
    To: "/Contact",
    NavTxt: "Learn More",
  },
 
]

export const SlidesPerView = [
  {
    Id: 1,
    Image: AsoOke,
    Desc: "Male Traditional Wear",
  },
  {
    Id: 2,
    Image: AsoOke2,
    Desc: "Female Dress",
  },
  {
    Id: 3,
    Image: Agbada1,
    Desc: "Agbada Set"
  },
  {
    Id: 4,
    Image: FemSuits,
    Desc: "Female Suits",
  },
  {
    Id: 5,
    Image: MaleSuits,
    Desc: "Male Suits"
  },
  {
    Id: 6,
    Image: FemDress,
    Desc: "Female Dress"
  },
]

export const CollectionData = [
  {
    Id: 1,
    Image: [AsoOkeCollec1],
    Title: "Male Traditional",
  },
  {
    Id: 2,
    Image: [AgbadaCollec],
    Title: "Agbada",
  },
  {
    Id: 3,
    Image: [SuitCollec],
    Title: "MALE Suits",
  },
  {
    Id: 4,
    Image: [FemaleSuits],
    Title: "FEMALE Suits",
  },
  {
    Id: 5,
    Image: [FemasoEbi],
    Title: "Female Traditional",
  }
]

export const BlogHome = [
  {
    Id: 1,
    Image: Fabricshome,
    Title: "The Evolution of Agbada in Modern Fashion",
    Desc: " Explore how the traditional Agbada has been reimagined in contemporary fashion. ",
    Date: "June 10, 2024",
  },
  {
    Id: 2,
    Image: Sewinghome,
    Title: "Choosing The Perfect Fabric for your suit",
    Desc: "Learn how to choose the perfect fabric for your suit, whether it's a formal or casual occasion",
    Date: "June 15, 2024",
  }
]

export const ReadyWearColl =[
  {
    Id: 1,
    SocialIcon: FaCalendar,
    HeadTxt: "Regular Heat Drops",
    DescTxt: "New styles released every week, reflecting the earthy tones of the season"
  },
  {
    Id: 2,
    SocialIcon: FaGlobe,
    HeadTxt: "Global Shipping",
    DescTxt: "Fast Reliable delivery to your door anywhere in the world"
  },
  {
    Id: 3,
    SocialIcon: FaStar,
    HeadTxt: "Premium Quality",
    DescTxt: "Guaranteed durability with reinforced stitching and high-grade materials"
  },
]



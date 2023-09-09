import React from 'react'
import { Link, useLocation ,matchPath} from 'react-router-dom'
import { NavbarLinks } from '../data/navbar-links'
import logo from "../assets/hero.jpeg"
import {IoIosArrowDropdownCircle} from "react-icons/io"
import HighlightText from "./mindcore/HighlightText";
const subLinks = [
    {
        title: "Home",
        link:"/foreign/home"
    },
    {
        title: "Away from home ",
        link:"/foreign/away"
    },
];
const Navbar = () => {
    const location= useLocation();
    const  matchRoute  = (route) => {
        return matchPath({path:route}, location.pathname);
    }
  return (
    <div className='flex h-[100px] items-center   bg-gradient-to-r from-white via-blue-200 to-blue-200 '>
        <div className='flex w-12/12  items-center  gap-[30px]'>

      <div  className='w-[80px] h-[80px] overflow-hidden  ml-[60px] rounded-[50px] flex flex-col' >
      <Link to="/">
        <img src={logo} width={160} height={42} alt='logophoto' loading='lazy'/>
        </Link>
        <div className='mt-[100px]'> 
            <h1 className='text-3xl font-bold  text-richblack-900 ' > Mind  </h1>
            <HighlightText text={"Pill"}/> 
        </div>
      </div>
        <nav className='flex flex-row gap-[120px]'>
            <ul className='flex gap-x-[60px] text-richblack-900   text-2xl'>
                {
                   NavbarLinks.map( (link, index) => (
                    <li key={index}>
                       {
                           link.title === "Foreign" ? (
                               <div className='relative flex items-center gap-2 group '>
                                   <p>{link.title}</p>
                                   <IoIosArrowDropdownCircle/>
   
                                   <div className='invisible absolute left-[50%]
                                       translate-x-[-50%] translate-y-[80%]
                                    top-[50%]
                                   flex flex-col rounded-md bg-richblack-5 p-4 text-richblack-900
                                   opacity-0 transition-all duration-200 group-hover:visible
                                   group-hover:opacity-100 lg:w-[300px] mt-[-20px]'>
   
                                   <div className='absolute left-[50%] top-0
                                   translate-x-[80%]
                                   translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
                                   </div>
   
                                   {
                                       subLinks.length ? (
                                               subLinks.map( (subLink, index) => (
                                                   <Link to={`${subLink.link}`} key={index}>
                                                       <p>{subLink.title}</p>
                                                   </Link>
                                               ) )
                                       ) : (<div></div>)
                                   }
   
                                   </div>
   
   
                               </div>
   
                           ) : (
                               <Link to={link?.path}>
                                   <p className={`${ matchRoute(link?.path) ? "text-blue-700" : "text-richblack-900"}`}>
                                       {link.title}
                                   </p>
                                   
                               </Link>
                           )
                       }
                        
                           
                                        </li>
                ) )
                }
            </ul>
            <div className='flex flex-row gap-[70px] relative  '>
            <div className=' ml-[60px] h-[20px]'>
            <Link to="/login">
                      <div className='border border-richblack-700  px-[12px] py-[8px] bg-blue-400 text-white rounded-md'>
                      <button className=''>
                            Log in
                        </button>
                        <button >
                            /SignUp
                        </button>
                      </div>
                       

                    </Link>
                   
            </div>
            <div>
           
            </div>
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link, useLocation ,matchPath} from 'react-router-dom'
import { NavbarLinks } from '../data/navbar-links'
import logo from "../assets/hero.jpeg"
const Navbar = () => {
    const location= useLocation();
    const  matchRoute  = (route) => {
        return matchPath({path:route}, location.pathname);
    }
  return (
    <div className='flex h-[80px] items-center  border-b-[1px] bg-richblack-900 border-b-richblack-700'>
        <div className='flex w-12/12  items-center  gap-[30px]'>

      <div  className='w-[70px] h-[70px] overflow-hidden  ml-[60px] rounded-[50px]' >
      <Link to="/">
        <img src={logo} width={160} height={42} alt='logophoto' loading='lazy'/>
        </Link>
      </div>
        <nav className='flex flex-row gap-[135px]'>
            <ul className='flex gap-x-[60px] text-richblack-25 mt-[5px]  text-2xl'>
                {
                    NavbarLinks.map((link,index) =>(
                        <li key={index}>
                             <Link to={link?.path}>
                                <p className={`${ matchRoute(link?.path) ? "text-yellow-25" : "text-richblack-25"}`}>
                                    {link.title}
                                </p>
                                
                            </Link>

                        </li>
                    ))
                }
            </ul>
            <div className='flex flex-row gap-[90px] relative  '>
            <div className=' ml-[90px] h-[]'>
            <Link to="/login">
                        <button className='border max-w-maxContent border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                            Log in
                        </button>
                    </Link>
            </div>
            <div>
            <Link to="/signup">
                        <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                            SignUp
                        </button>
                    </Link>
            </div>
            </div>
        </nav>
        </div>
    </div>
  )
}

export default Navbar
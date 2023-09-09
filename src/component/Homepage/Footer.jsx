import React from 'react'
import mindpill from "../../assets/hero.jpeg"

const Footer = () => {
  return (
    <div className='bg-blue-700 mt-[100px] ml-[30px]'>
        <div>
            <div>
                <img src={mindpill} alt='mindpilllogo'/>
            </div>
                <p>Partner with us</p>
                <p>FAQs</p>
                <p>Blogs</p>
            <div>
                <p>About us</p>
                <p>Press & Media</p>
                <p>Careers</p>
                <p>Contact us</p>
            </div>
            <div>
                Privacy Policy 
            </div>
        </div>
    </div>
  )
}

export default Footer
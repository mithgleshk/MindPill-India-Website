import React from 'react'
import HMButton from "../component/Homepage/Button"
import Footer from '../component/Homepage/Footer'

export const Home = () => {
  return (
    <div className='w-screen min-h-screen '>
        <div className='text-center justify-center  mt-[150px] text-2xl '>
            <h1> SOME QUOTES/THOUGHTS</h1>
        </div>
        <div className=' px-[12px] py-[8px] bg-blue-300 text-white rounded-[30px] w-[110px] p-0  shadow-sm shadow-white text-center justify-center align-center ml-[550px] mt-[35px]'> 
        <button className='ml-[2px] text-richblack-900'>
                            Let's Begin
                        </button>
        </div>
        <div className='flex  ml-[30px] mt-[75px] gap-[275px]'> 
       

            <div className=' ' >
            <HMButton active={true} linkto={"/onlinechat"} className='w-[300px]'> 
            <div className='h-[80px] w-[150px] text-center justify-center '>
                                <p> online chat</p>
                                <p className='mt-[30px]'> (Content) </p>
                            </div>
            </HMButton>
            </div>
           <div>
           <HMButton active={true} linkto={"/videocall"}> 
                <div className='h-[82px] w-[150px] text-center justify-center '>
                <p> video/voice Call </p>
                <p className='mt-[30px]'> (Content)</p>
                </div>
            </HMButton>
           </div>
            <div>
            <HMButton active={true} linkto={"/specializedplan"} className=''> 
                <div className='h-[65px] w-[150px] text-center justify-center '>
                    <p className='mt-[20px]' > Specialized Treatment plan </p>
                </div>
            </HMButton>
            </div>
        </div>
        <Footer/>
    </div>
  )
}


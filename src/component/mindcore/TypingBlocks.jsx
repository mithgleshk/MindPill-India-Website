import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const TypingBlocks = ({ position,textblock,textColor}) => {
    
  return (
    <div className={`flex ${position} my-20 justify-between gap-1`}>
        <div className=' h-fit  flex flex-row text-10[px] w-[100%] py-4 lg:w-[500px]'> 
        {/*HW -> BG gradient*/}

        <div className='text-center flex flex-col w-[10%] text-richblack-400 font-inter font-bold'>
        <p className='invisible'>.</p>
            <p className='invisible'>.</p>
            <p className='invisible'>.</p>
           
        </div>

        <div className={`w-[90%] flex flex-col gap-2  text-bold font-bold font-mono ${textColor} pr-2`}>
           <TypeAnimation
            sequence={[textblock, 2000, ""]}
            repeat={Infinity}
            cursor={true}
           
            style = {
                {
                    whiteSpace: "pre-line",
                    display:"block",
                }
            }
            omitDeletionAnimation={true}
           />
        </div>

     </div>


    </div>
  )
}

export default TypingBlocks
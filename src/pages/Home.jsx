import React from 'react'
// import HighlightText from '../component/mindcore/HighlightText'
import Banner from "../assets/banner.mp4";
import TypingBlocks from '../component/mindcore/TypingBlocks';
import mind from "../assets/hero.jpeg"
import NGO from "../assets/NGO.jpeg"
// import HighlightText from '../component/mindcore/HighlightText';



export const Home = () => {
  return (
    <div>
        <div className=' relative mx-auto flex flex-col w-11/12  text-white' >
            <div className='relative mx-auto flex flex-col w-11/12  items-center 
      text-white justify-between'>
        <div>
            <TypingBlocks
            textblock ={`Welcome to MindPill, where we're revolutionizing mental health support through innovative\n technology and compassionate care.`}
            textColor={"text-richblack-900"}
            />
        </div>
            
            <div className='mx-3 my-12 shadow-richblack-900 shadow-lg mt-[-20px]'>
            <video
            muted
            loop
            autoPlay
            >
            <source  src={Banner} type="video/mp4" />
            </video>
        </div>

       <div className=' bg-caribbeangreen-200  w-screen h-[850px] '>
       
       <div className=' ml-10 flex flex-row gap-[150px] mt-[50px] p-0'>
       <diV  className=" w-[800px] ml-[75px] h-[500px]  " >
          
          <h2 className='text-2xl text-center text-bold text-richblack-900'> What is Mental Health ?</h2>
          <p className='text-semibold text-richblack-600'>Mental health is all about how people think, feel, and behave. Mental health specialists can help people with depression, anxiety, bipolar disorder, addiction, and other conditions that affect their thoughts, feelings, and behaviors. Mental health can affect daily living, relationships, and physical health. However, this link also works in the other direction. Factors in people’s lives, interpersonal connections, and physical factors can contribute to mental ill health. Looking after mental health can preserve a person’s ability to enjoy life. Doing this involves balancing life activities, responsibilities, and efforts to achieve psychological resilience. Stress, depression, and anxiety can all affect mental health and disrupt a person’s routine. Although health professionals often use the term mental health, doctors recognize that many psychological disorders have physical roots. This article explains what people mean by mental health and mental illness. We also describe the most common types of mental disorders, including their early signs and how to treat them. </p>
        </diV>
       
          <div className='w-[300px] h-[300px] overflow-hidden rounded-[300px] mt-[20px]'>
            <img src={mind} alt='mindpillbanner' className=''/>
          </div>
       </div>
       <div className='flex flex-row mt-[-20px]'> 
       <div className='w-[300px] h-[300px] overflow-hidden rounded-[300px] mt-[-10px] ml-[225px]'>
            <img src={mind} alt='mindpillbanner' className=''/>
          </div>
          <div className='w-[710px] ml-[175px] h-[700px]'>
            <h2 className='text-center  text-boldest  text-richblack-900 text-2xl'> Risk factors for mental health conditions </h2>
            <p className='text-semibold text-richblack-600'> Everyone is at some risk of developing a mental health disorder, regardless of age, sex, income, or ethnicity. In the U.S. and much of the developed world, mental disorders are one of the leading causes of disability. Social and financial circumstances, adverse childhood experiences, biological factors, and underlying medical conditions can all shape a person’s mental health. Many people with a mental health disorder have more than one condition at a time. It is important to note that good mental health depends on a delicate balance of factors and that several elements may contribute to developing these disorders. The following factors can contribute to mental health disruptions.</p>
          </div>
       </div>
       
       </div>
       <div className='flex flex-row mt-[47px] gap-[50px] '>
        <div className='w-7/12'>
          <h2 className='text-center text-richblack-900 text-bold text-2xl ' >NGO'S PITCH</h2>
          <p className=' text-richblack-5  text-semibold  '>Mental health in India, like in many other countries, is a complex and multifaceted issue. India is a diverse nation with a population of over 1.3 billion people, and mental health challenges vary widely across different regions, socioeconomic groups, and cultural backgrounds What is MindPill? MindPill is Chandigarh first mental health platform to solve the mental health problem through online consulting at a very reasonable price. Why MindPill? We not only provide online consulting at low prices but believe in building long term relationships with our customers. The important factors for choosing MindPill</p>
          <ul className=' list-disc  ml-[20px] text-semibold '>
            <li className=' text-richblack-5'> Privacy</li>
            <li className=' text-richblack-5'>Flexible hrs for consulting</li>
            <li className=' text-richblack-5'>Peer Group</li>
            <li className=' text-richblack-5'>Free Services</li>
            <li className=' text-richblack-5'> Immediate Feedback Services</li>
            
          </ul>
          <p className='text-richblack-5'>We are Offering Psychologist Consulting, Group therapy Sessions, Relationship Counselling, Home Away from Home, Special Service for Parents and Children Why Should You Prefer Us? We provide services at low cost comparing it with average price in the market. Moreover, we will help the NGO to build a reputation and a healthy long term relationship with us. </p>
        </div>
        <div className='mt-[35pX] ML-[15px] '>
          <img src={NGO} alt='ngoimage ' className=' h-[300px] w-[600px] rounded-[300px]  ml-[30px] '/>
        </div>
       </div>
            
            
        
        </div>
           <div>
            
           </div>
        </div>

    </div>
  )
}

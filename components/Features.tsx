import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className='flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
     <div className='mx-auto max-w-[1440px] padding-container relative w-full flex justify-end'>
        {/* left */}
        <div className='flex flex-1 lg:min-h-[900px]' >
          <Image
          src='/phone.png'
          alt='phone'
          width={440}
          height={1000}
          className='absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex 3xl:left-20'
          />
        </div>
        {/* right */}
        <div className='z-20 flex flex-col w-full lg:w-[60%]'>
         <div className='relative'>
            <Image src='/camp.svg' alt='camp' width={50} height={50} className='absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]' />
            <h2 className='bold-40 lg:bold-64'>Our Features</h2>
         </div>
         <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:mt-20 lg:gap-20'>
          {
            FEATURES.map((feature) =>(
             <FeatureItem title={feature.title} icon={feature.icon} variant={feature.variant} description={feature.description} />
            ))
          }
         </ul>
        </div>
     </div>
    </section>
  )
}
interface FeatureItem{
  title:string,
  icon: string,
  variant: string,
  description: string,
}
const FeatureItem = ({title, icon, variant, description}:FeatureItem) =>{
  return(
    <li className='flex flex-1 w-full flex-col items-start'>
      <div className={`rounded-full p-4 lg:p-7 bg-green-500`}>
        <Image src={icon} alt='icon' width={24} height={24}/>
      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'>
        {title}
      </h2>
      <p className='text-slate-500 mt-5 bg-white/80 lg:mt-[30px] lg:bg-none'>
        {description}
      </p>
    </li>
  )
}
export default Features
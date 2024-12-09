import React from 'react'
import ResumeCard  from './ResumeCard'

const Achivements = () => {
  return (

         <div>
    <div className='w-full flex flex-col lgl:flex-row gap-20'>
<div>
<div className='py-12'>
     <p className='text-sm text-designColor tracking-[4px]'>2021-2024</p>
     <h2 className='text-4xl font-bold'>Company Experience</h2>
 </div>
 <div className=' w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
   <ResumeCard title="Bachlor Of Computer Application"
               subTitle="University of MDU (2021-2024)"
               result="2190/3000"
               des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reprehenderit ex aut incidunt beatae laudantium, maxime a. Eius, illum repellendus." />
   <ResumeCard title="Bachlor Of Computer Application"
               subTitle="University of MDU (2021-2024)"
               result="2190/3000"
               des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reprehenderit ex aut incidunt beatae laudantium, maxime a. Eius, illum repellendus." />
   <ResumeCard title="Bachlor Of Computer Application"
               subTitle="University of MDU (2021-2024)"
               result="2190/3000"
               des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reprehenderit ex aut incidunt beatae laudantium, maxime a. Eius, illum repellendus." />
 </div>
</div>

<div>
<div className='py-12 '>
     <p className='text-sm text-designColor tracking-[4px]'>2021-2024</p>
     <h2 className='text-4xl font-bold'>Development skills</h2>
 </div>
 <div className=' w-full h-[1000px] border-l-[6px] border-black border-opacity-30 flex flex-col gap-10'>
   <ResumeCard title="Bachlor Of Computer Application"
               subTitle="University of MDU (2021-2024)"
               result="2190/3000"
               des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reprehenderit ex aut incidunt beatae laudantium, maxime a. Eius, illum repellendus." />
   <ResumeCard title="Bachlor Of Computer Application"
               subTitle="University of MDU (2021-2024)"
               result="2190/3000"
               des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reprehenderit ex aut incidunt beatae laudantium, maxime a. Eius, illum repellendus." />
   <ResumeCard title="Bachlor Of Computer Application"
               subTitle="University of MDU (2021-2024)"
               result="2190/3000"
               des="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique reprehenderit ex aut incidunt beatae laudantium, maxime a. Eius, illum repellendus." />
 </div>
</div>

 </div>
</div>
    
  )
}

export default Achivements
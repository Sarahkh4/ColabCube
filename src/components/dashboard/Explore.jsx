import React from 'react'

function Explore() {
  const Projects = () => {
    return (
      <div className='flex items-center justify-between m-3'>
       <div className="flex justify-center items-center gap-4">
        <div className="bg-slate-400 rounded-full h-14 w-14">

        </div>
        <div>
          <p className='font-medium text-xl'>Project no.</p>
          <p>status</p>
        </div>

       </div>
       <div className="">
   <p className='font-semibold text-xl'>Due Date:x/xx/xxx</p>
       </div>
       <hr />
      </div>
    );
  };
  return (
    <div className="p-3">

        <p className='headings'>Explore</p>      
 <div className="w-[606px] bg-white p-5 rounded-md">
       
          <p className='headings font-semibold text-2xl'>
            Current Projects
          </p>
          <Projects/>
          <hr />
          <Projects/>
          <hr />
          <Projects/>
          <hr />

        </div>
      
        </div>
  

)
}

export default Explore
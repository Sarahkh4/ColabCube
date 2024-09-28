import React from 'react'

function PendingTasks() {
    const Tasks = () => {
        return (
          <div className="h[448px] p-3 w[884px] flex shadow-2xl bg-white">
            {/* <img src="" alt="" className='h' /> */}
            <div className="h-20 w-20 bg-slate-300"></div>
            <div className="p-3 pt-0">
                <h1 className='font-semibold'>Task1</h1>
                <p className='text-gray-400'>Date</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <button className='rounded-lg bg-green-300 p-1 text-sm '>Button</button>
                <div className="flex">
                    <img src="" alt="" />
                    <p>jhjj</p>
                </div>
            </div>
           </div>
        );
      };


  return (

    <div className='w[1784]'>
    <p className="headings">Pending tasks</p>
    <div className="flex gap-x-4">
     <Tasks/>
     <Tasks/>
    </div>

    </div>
  )
}

export default PendingTasks




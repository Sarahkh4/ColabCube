import React from 'react'

function UpcomingEvents() {
    const Events = () => {
        return (
          <div className='h-[420px] w-[370px] bg-slate-200' >
          </div>
        );
      };

  return (
    <>
        <p className='headings'>Upcoming Events</p>
       <div className="flex gap-4">
        <Events/>
        <Events/>
       </div>
        </>
  )
}

export default UpcomingEvents
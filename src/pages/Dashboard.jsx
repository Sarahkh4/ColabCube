import React from "react";
import PendingTasks from "../components/dashboard/PendingTasks";
import Explore from "../components/dashboard/Explore";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";

function Dashboard() {
  return (
    <div className="p-4">
      <p className="headings">Dashboard</p>
      <div className="flex overflow-x-auto space-x-4">
        <div className="w-80 h-56 border-2"></div>
        <div className="w-80 h-56 border-2"></div>
        <div className="w-80 h-56 border-2"></div>
  
      </div>
        <PendingTasks/>
        <Explore/>
        <UpcomingEvents/>
     
    </div>
  );
}

export default Dashboard;

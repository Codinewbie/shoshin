import React from 'react';
import CountStats from './CountStats';
import Announcement from './Announcement';
import Activity from './Activity';
import GraphStats from './GraphStats';
const RealDashboard = () => {
  return (
    <div className = "grid grid-cols-5  md:gap-0">
        <div className = "lg:col-span-3 col-span-5 grid grid-cols-6 gap-3">
            <div className = "col-span-6 md:col-span-2"><CountStats color={"red"} text1={"Available Position"} text2={"24"} text3={"4 Urgently needed"} /></div>
            <div className = "col-span-6 md:col-span-2"><CountStats color={"blue"} text1={"Job Open"} text2={"10"} text3={"4 Active hiring"} /></div>
            <div className = "col-span-6 md:col-span-2"><CountStats color={"pink"} text1={"New Employees"} text2={"24"} text3={"4 Department"} /></div>
            <div className = "col-span-6 md:col-span-3"><GraphStats text1 = {"Total Employees"} text2 = {"216"} text3={"120"} text4={"96"} text5={"+2"} graphNo={"1"} /></div>
            <div className = "col-span-6 md:col-span-3"><GraphStats text1 = {"Talent Request"} text2 = {"16"} text3={"6"} text4={"10"} text5={"+5"} graphNo={"2"} /></div>
            <div className = "col-span-6"><Announcement update={false}/></div>
        </div>
        <div className = "lg:col-span-2 col-span-6 grid grid-cols-5  mt-3 lg:mt-0 lg:ml-3 gap-3">
            <div className = "lg:col-span-5 md:col-span-2 col-span-5"><Activity/></div>
            <div className = "lg:col-span-5 md:col-span-3 col-span-5"><Announcement update = {true}/></div>
        </div>
  </div>
  );
};

export default RealDashboard;

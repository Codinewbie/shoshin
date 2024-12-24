import React from 'react';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import blue from '/src/images/blue.png'
import Tabs from './Tabs';

const Sidebar = () => {
  return (
    <div className=" border  bg-zinc-50 ">
      <div className="flex mb-4 mt-2 px-4 flex-col space-y-4">
        <div className = " flex justify-center items-center gap-2   p-4 w-full"> 
            <img src={blue} className="w-9 h-9 "/>
            <div className=" items-center text-2xl font-semibold flex justify-center text-blue-900" >Vasitum</div> 
        </div>
        <div className = "flex flex-col space-y-3">
          <div className = "  flex justify-start pl-4 items-center gap-5 py-1 w-full">
              <div className = " flex justify-center items-center font-semibold text-zinc-400  text-[9px] "> MAIN MENU</div>
          </div>
          <Tabs iconName = {"dashboard"} tabName = {"Dashboard"} />
          <Tabs iconName = {"user-plus"} tabName = {"Recruitment"} />
          <Tabs iconName = {"calendar-event"} tabName = {"Schedule"} />
          <div className = "  flex justify-start pl-4 items-center gap-5 py-1 w-full">
              <div className = " flex justify-center items-center "><box-icon type='logo' name='microsoft-teams' color='#bebcbc'></box-icon> </div>
              <div className = " flex justify-center items-center text-zinc-600 text-xs "> People</div>
          </div>
          <Tabs iconName = {"palette"} tabName = {"Department"} />
          <div className = "  flex justify-start pl-4 items-center gap-5 py-1 w-full">
              <div className = " flex justify-center items-center text-zinc-400 font-semibold text-[9px] "> OTHER</div>
          </div>
          <Tabs iconName = {"support"} tabName = {"Support"} />
          <Tabs iconName = {"cog"} tabName = {"Settings"} />
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;

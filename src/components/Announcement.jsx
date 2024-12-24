import React from 'react';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import Notify from './Notify';

const Announcement = ({update}) => {
  
  return (
    <div className="rounded-lg border  ">
        <div className = "flex flex-col mx-3 gap-2">
            <div className = " flex justify-between py-3">
                <div className = "text-indigo-950 font-semibold">Announcement</div>
                <div className=""> dropdownmenu</div>
            </div>
            {update && <div className = "text-left text-slate-600 text-xs">Priority</div> }
            
            <Notify text1 = {`${update === true ? "Review candidate applications." : "Outing schedule for every department."}`} text2={`${update === true ? "Today - 11:30 AM" : "5 mins ago"}`} pinned={true} update = {update}/>
            {update && <div className = "text-slate-600 text-xs text-left">Other</div> }
            <Notify text1 = {`${update === true ? "Interview with candidates":"Meeting HR department."}`} text2={`${update === true ? "Today - 10:30 AM" :"Yesterday, 12:30 PM"}`} pinned={false} update = {update}/>
            <Notify text1 = {`${update === true ? "Short meeting with product designer from IT Department" : "IT department need two more talents for UX/UI Designer position."}`} text2={`${update===true ? "Today - 9:15 AM" :"Yesterday, 09:15 AM"}`} pinned={false} update={update}/>
        </div>
        <div className = "text-red-500 text-xs font-semibold border-t p-2">{`${update == true ? "Create a New Schedule" : "See All Announcement"}`}</div>
     
    </div>
  );
};

export default Announcement;
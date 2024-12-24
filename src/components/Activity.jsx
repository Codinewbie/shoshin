import React from 'react';

const Activity = ({ color, text1, text2, text3 }) => {
  return (
    <div className=" rounded-lg border ">
        <div className = "text-white  rounded-t-lg bg-indigo-900 text-left p-3 px-5"> Recently Activity</div>
        <div className = "bg-indigo-950 rounded-b-lg flex flex-col p-5 py-6 gap-1">
            <div className = "text-slate-50 text-[7px] text-left">10:40 AM, Fri 10 Sept 2021</div>
            <div className = "text-slate-50 text-left">You Posted a New Job</div>
            <div className = "text-slate-50 text-left text-xs">Kindly check the requirements and terms of work and make sure everything is right.</div>
            <div className = "flex justify-between items-center mt-2">
                <div className = "text-slate-50 text-left font-semibold text-xs">Today you make 12 activity</div>
                <button className="bg-red-500 text-slate-50 font-semibold text-xs p-1 rounded-sm px-3"> See All Activity</button>

            </div>
            
        </div>
    </div>
  );
};

export default Activity;

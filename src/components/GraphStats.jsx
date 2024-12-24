import React from 'react';

const GraphStats = ({text1 , text2 , text3, text4 , text5, graphNo}) => {
  return (
        <div className = "flex flex-row justify-between p-4 border rounded-lg">
            <div className = "flex flex-col gap-2">
                <div className = "text-left font-semibold text-indigo-950">{text1}</div>
                <div className="text-left text-3xl font-semibold text-indigo-950">{text2}</div>
                <div className= "flex flex-col gap-1 mt-1">
                    <div className = "text-left text-slate-700 text-[8px]">{text3} Men</div>
                    <div className = "text-left text-slate-700 text-[8px] ">{text4} Women</div>
                </div>
            </div>
            <div className = "flex flex-col gap-4">
                <img 
                    src = {`/src/images/graph${graphNo}.png`}
                    alt = {`graph${graphNo}`}
                    
                />
                <div className = "bg-red-50 text-xs rounded-sm">{text5}% Past month</div>
            </div>
           
        </div>
  );
};

export default GraphStats;

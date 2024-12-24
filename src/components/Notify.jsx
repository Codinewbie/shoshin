import React from 'react';
import PinDotIcon from './PinDotIcon';

const Notify = ({text1 , text2 , pinned , update}) => {
  return (
    <div className = "border flex justify-between p-3 bg-zinc-50 rounded-md">
        <div className = "flex flex-col gap-1">
            <div className = "text-slate-900 text-sm text-left">{text1}</div>
            <div className = "text-[9px] text-left text-slate-600">{text2}</div>
        </div>
        <PinDotIcon pinned = {pinned} update={update}/>
    </div>
  );
};

export default Notify;
//Outing schedule for every department.
//5 mins ago

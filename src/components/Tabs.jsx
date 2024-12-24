import React from 'react';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';

const Tabs = ({iconName , tabName}) => {
  return (
        <div className = "  flex justify-start pl-4 items-center gap-5 py-1 w-full">
            <div className = " flex justify-center items-center "><box-icon name={`${iconName}`} type='solid' color='#bebcbc'  ></box-icon> </div>
            <div className = " flex justify-center items-center text-zinc-600 text-xs "> {tabName}</div>
        </div>
  );
};

export default Tabs;

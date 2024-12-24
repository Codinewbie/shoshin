import React from 'react';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';

const Tabs = ({iconName , tabName}) => {
  return (
        <div className = "  flex md:justify-start justify-center md:pl-4 items-center gap-5 py-1">
            <div className = " flex justify-center items-center "><box-icon name={`${iconName}`} type='solid' color='#bebcbc'  ></box-icon> </div>
            <div className = " hidden md:block flex justify-center items-center text-zinc-600 text-xs "> {tabName}</div>
        </div>
  );
};

export default Tabs;

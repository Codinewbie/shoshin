import React from 'react';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';

const PinDotIcon = ({pinned , update}) => {
  return (
    <div className="flex flex-row  gap-4">
        {update === false && <div className = " flex justify-center items-center"><box-icon name='pin' type='solid' color={`${pinned === true ? "#696868" : "#bebcbc" }`} ></box-icon></div>}
        <div className= " flex justify-center items-center"><box-icon name='dots-horizontal-rounded' color='#bebcbc' ></box-icon></div>
    </div>
  );
};

export default PinDotIcon;
{/* <box-icon name='dots-horizontal-rounded' color='#696868' ></box-icon> */}
<box-icon name='dots-horizontal-rounded' color='#e4e0e0' ></box-icon>
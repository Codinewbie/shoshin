import React from 'react';
const Tab2 = ({index , tabs}) => {
  return (
    <div id="set" className=" h-screen">
        <div className="p-4  mt-48 flex items-center justify-center">{`🏠 Welcome to the ${tabs[index]} section`}</div>
    </div>
  );
};

export default Tab2;

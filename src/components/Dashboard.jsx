import React from 'react';
const Dashboard = ({index , tabs }) => {
  
  return (
        <div className = "flex py-3  justify-start text-xl font-semibold text-indigo-900">
           {` ${tabs[index]}`}
        </div>
  );
};

export default Dashboard;

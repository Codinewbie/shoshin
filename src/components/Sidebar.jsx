import React, { useState, useRef, useEffect } from 'react';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import blue from '/src/images/blue.png';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const tabs = ['Dashboard','Recruitment','Schedule','People','Department'];
  const othertabs = ['Support' , 'Settings'];
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Sidebar Toggle Button for Small Screens */}
      <div className="sm:hidden absolute top-4 left-8 z-50">
        <button onClick={toggleSidebar}>
          <box-icon name="menu" size="sm" color = '#bebcbc'></box-icon>
        </button>
      </div>

      {/* Sidebar Content */}
      <div
        className={`fixed sm:static top-0 left-0 h-full bg-zinc-50 z-40 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:block`}
        ref={sidebarRef}
      >
        <div className="flex flex-col  space-y-4 mt-4 p-4">
          <div className="flex justify-center  items-center gap-2 mb-4">
            <img src={blue} alt="Logo" className="w-9 h-9" />
            <div className="text-2xl font-semibold text-blue-900 hidden md:block">
              Vasitum
            </div>
          </div>
          <div className="font-semibold flex justify-center md:justify-start  text-zinc-400 text-[9px] px-3 mt-8">MAIN MENU</div>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`flex items-center justify-center md:justify-start  gap-3 px-3 py-1 cursor-pointer ${
                activeTab === index ? ' text-red-600' : 'text-zinc-600'
              }`}
              onClick={() => {
                setActiveTab(index);
                setIsOpen(false); // Close sidebar on small screens
              }}
            >
              <box-icon
                name={
                  index === 0
                    ? 'dashboard'
                    : index === 1
                    ? 'user-plus'
                    : index === 2
                    ? 'calendar-event'
                    : index === 3
                    ? 'microsoft-teams'
                    :'palette'
                }
                type={index === 3 ? 'logo' : 'solid'}
                color= {activeTab ===index ? '#ec2727' : '#bebcbc' }
              ></box-icon>
              <span className="hidden md:block text-sm">{tab}</span>
            </div>
          ))}
           <div className="font-semibold flex justify-center md:justify-start  text-zinc-400 text-[9px] px-3 mt-8">OTHER</div>
           {othertabs.map((othertab, index) => (
            <div
              key={index}
              className={`flex items-center justify-center md:justify-start  gap-3 px-3 py-1 cursor-pointer ${
                activeTab-5 === index ? ' text-red-600' : 'text-zinc-600'
              }`}
              onClick={() => {
                setActiveTab(index + 5);
                setIsOpen(false); // Close sidebar on small screens
              }}
            >
              <box-icon
                name={
                  index === 0
                    ? 'support'
                    : 'cog'
                }
                type={index === 3 ? 'logo' : 'solid'}
                color= {activeTab-5 ===index ? '#ec2727' : '#bebcbc' }
              ></box-icon>
              <span className="hidden md:block text-sm">{othertab}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

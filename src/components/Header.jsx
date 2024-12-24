import React, { useState , useRef , useEffect} from 'react';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import aman2 from '/src/images/aman2.jpg';
import Dropdown from './Dropdown';

const Header = () => {

  return (  
    <div className="border-b flex justify-between gap-3 space-5 items-center py-2">
      <form>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-2 ml-8 sm:ml-0 ps-1 text-[10px] text-gray-900 w-16 xs:w-24 sm:w-36 border rounded-lg bg-gray-50"
            placeholder="Search"
            required
          />
          <div className="absolute inset-y-0 right-0 end-4 flex items-center ps-3 pointer-events-none">
            <box-icon name="search" color="#bebcbc" size='sm'></box-icon>
          </div>
        </div>
      </form>
      <div className="flex flex-row gap-5">
        <button>
            <div className="flex justify-center items-center">
                <box-icon type="solid" name="comment-dots" color="#bebcbc"></box-icon>
            </div>
        </button>
        <button>
            <div className="flex justify-center items-center">
                <box-icon type="solid" name="bell" color="#bebcbc"></box-icon>
            </div>
        </button>
        <div className="flex justify-start items-center space-x-2 p-1 relative">
          <div className="h-8 w-8 bg-gray-100 z-20 text-center flex justify-center items-center rounded-full overflow-hidden">
            <img
              src={aman2} // Path relative to the public folder
              alt="aman image"
              className="object-cover rounded-full"
            />
          </div>
          <div className="hidden md:block flex text-sm text-indigo-900 font-semibold items-center justify-center mb-1">
            Aman Kumar
          </div>
          <Dropdown head = {true} update={false}/>
        </div>
      </div>
    </div>
  );
};

export default Header;

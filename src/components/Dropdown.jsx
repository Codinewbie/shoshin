import React, { useState , useRef , useEffect} from 'react';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';

const Dropdown = ({head ,update}) => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

  return (
    <div className = "relative">
     <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        type="button"
        className={` focus:outline-none ${head == false ? "border rounded-sm px-3" : ""} text-[8px] flex justify-center items-center`}
    >
        <div className=" ">{head === false ? "Today, 13 Sept 2021" : ""}</div> <box-icon name="chevron-down" color="#bebcbc"></box-icon>
    </button>
    {isDropdownOpen && (
        <div
          ref = {sidebarRef}
          id="dropdown"
          className={`z-10 absolute top-9 right-0  bg-white divide-y divide-gray-100 rounded-lg shadow w-36 dark:bg-gray-700`}
        >
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block px-4 text-center py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Option1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2  text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Option2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Option3
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-center hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Option4
              </a>
            </li>
          </ul>
        </div>
      )}
      </div>
  );
};

export default Dropdown;

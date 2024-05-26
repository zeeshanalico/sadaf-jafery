import { useState } from 'react';
import menuData from '../data/navbar';
import scrolltosection from '../utils/scrolltosection'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [clickedMenu, setClickedMenu] = useState<string | null>(null);

  const handleMouseEnter = (menuLabel: string) => {
    setTimeout(() => setHoveredMenu(menuLabel), 0);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setHoveredMenu(null), 3000);
  };

  const handleClickMenu = (menuLabel: string) => {
    setClickedMenu(clickedMenu === menuLabel ? null : menuLabel);
  };

  return (
    <nav className="bg-red-600 p-7">
      <div className="container mx-auto flex justify-between items-center ">
        <a href="/">
          <span className="text-white font-semibold cursor-pointer text-3xl">
            {/* <img src='/logo.png' alt="logo Rohani Amil" width={70} height={50} className="" /> */}

          </span>
        </a>
        <div className="hidden md:flex space-x-4">
          {menuData.map((menuItem) => (
            <div
              key={menuItem.id}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(menuItem.label)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClickMenu(menuItem.label)}
            >
              {menuItem.url=='about' ? <button className='text-white hover:text-red-300' onClick={()=>scrolltosection('about')}>about</button> : <a href={menuItem.url} >
              <span className="text-white hover:text-red-200 hover:underline transition duration-300 cursor-pointer flex items-center lg:px-2">
                {menuItem.label}
                {/* {menuItem.subMenu && (
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform ${hoveredMenu === menuItem.label || clickedMenu === menuItem.label ? 'rotate-180' : ''
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )} */}
              </span>
              </a>}
              {/* {(menuItem.subMenu && (hoveredMenu === menuItem.label || clickedMenu === menuItem.label)) && (
                <div className="z-20 absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 transition-opacity duration-200 opacity-100">
                  {menuItem.subMenu.map((subMenuItem) => (
                    <a key={ MenuItem.id} href={subMenuItem.url} passHref>
                      <span className="text-nowrap block px-2 py-2 text-gray-800 hover:bg-red-200  transition duration-300 cursor-pointer">
                        {subMenuItem.label}
                      </span>
                    </a>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden">
          {menuData.map((menuItem) => (
            <div key={menuItem.id} className="relative">
              <a href={menuItem.url} >
              <span
                className="px-1 py-1 text-white hover:text-red-200 hover:underline transition duration-300 flex items-center cursor-pointer"
                onClick={() => handleClickMenu(menuItem.label)}
              >
                {menuItem.label}
                {/* {menuItem.subMenu && (
                  <svg
                    className={`w-4 h-4 ml-1 transform transition-transform ${hoveredMenu === menuItem.label || clickedMenu === menuItem.label ? 'rotate-180' : ''
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.707a1 1 0 010-1.414L10 3.586l4.707 4.707a1 1 0 01-1.414 1.414L10 6.414l-3.293 3.293a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )} */}
              </span>
              </a>
              {/* {menuItem.subMenu && clickedMenu === menuItem.label && (
                <div className="pl-4">
                  {menuItem.subMenu.map((subMenuItem) => (
                    <a key={subMenuItem.id} href={subMenuItem.url} passHref>
                      <span className="block px-2 py-1 text-white hover:text-red-200 hover:underline transition duration-300 cursor-pointer">
                        {subMenuItem.label}
                      </span>
                    </a>
                  ))}
                </div>
              )} */}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

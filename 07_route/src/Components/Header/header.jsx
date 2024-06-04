import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="shadow sticky z-50 top-0 bg-gray-900">
      <nav className="border-gray-700 px-4 lg:px-6 py-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWFfI_DxcEZjTPSknP6rodkBch1hQAUElrHA&s"
              className="mr-3 h-12"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Travel Guide
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-gray-300 hover:bg-gray-700 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-300"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-500 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none transition duration-300"
            >
              Get started
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full lg:flex lg:w-auto lg:order-1`}
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${isActive ? 'text-orange-600' : 'text-gray-300'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${isActive ? 'text-orange-600' : 'text-gray-300'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/user"
                  className={({ isActive }) =>
                    `${isActive ? 'text-orange-600' : 'text-gray-300'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                  }
                >
                  User
                </NavLink>
              </li> 

              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `${isActive ? 'text-orange-600' : 'text-gray-300'} block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-600 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </header>
  );
}

import { useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import '../global.css';

const NavBar = ({tabnum}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };  
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-lg font-bold">MyApp</div>
          <div className="hidden md:flex space-x-4">
            <Link href="/ordering/linker">
              <p className={`text-gray-700 hover:text-primary-dark ${tabnum==1 ? "font-bold shadow-md" : ""}`}>Linker</p>
            </Link>
            <Link href="/ordering/orders">
              <p className={`text-gray-700 hover:text-primary-dark ${tabnum==2 ? "font-bold shadow-md" : ""}`}>Orders</p>
            </Link>
            <Link href="/ordering/profile">
              <p className={`text-gray-700 hover:text-primary-dark ${tabnum==3 ? "font-bold shadow-md" : ""}`}>Profile</p>
            </Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 focus:outline-none focus:text-primary-dark"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <Link href="/ordering/linker">
              <p className="block px-4 py-2 text-gray-700 hover:text-primary-dark">Linker</p>
            </Link>
            <Link href="/ordering/orders">
              <p className="block px-4 py-2 text-gray-700 hover:text-primary-dark">Orders</p>
            </Link>
            <Link href="/ordering/profile">
              <p className="block px-4 py-2 text-gray-700 hover:text-primary-dark">Profile</p>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

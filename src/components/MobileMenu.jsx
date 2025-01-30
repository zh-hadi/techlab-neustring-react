import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [otherMenuOpen, setOtherMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook for programmatic navigation

  // Toggle menu function
  const toggleMenu = () => {
    if (otherMenuOpen) {
      setOtherMenuOpen(false); // Close other menu if open
    } else {
      setIsOpen(!isOpen);
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu-container")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Handle NavLink click
  const handleNavLinkClick = (to) => {
    setIsOpen(false); // Close the menu
    setTimeout(() => {
      navigate(to); // Navigate after a short delay
    }, 100); // Adjust the delay as needed
  };

  return (
    <div className="relative md:hidden menu-container">
      {/* Burger Menu Button */}
      <button onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-14 right-0 bg-white bg-opacity-90 text-sm shadow-sm rounded-md flex flex-col gap-4 px-10 py-3">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
            onClick={(e) => {
              e.preventDefault(); // Prevent default navigation
              handleNavLinkClick("/home"); // Use custom navigation
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
            onClick={(e) => {
              e.preventDefault(); // Prevent default navigation
              handleNavLinkClick("/about"); // Use custom navigation
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/solution"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
            onClick={(e) => {
              e.preventDefault(); // Prevent default navigation
              handleNavLinkClick("/solution"); // Use custom navigation
            }}
          >
            Solution
          </NavLink>
          <NavLink
            to="/community"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
            onClick={(e) => {
              e.preventDefault(); // Prevent default navigation
              handleNavLinkClick("/community"); // Use custom navigation
            }}
          >
            Community
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-black"
            }
            onClick={(e) => {
              e.preventDefault(); // Prevent default navigation
              handleNavLinkClick("/contact"); // Use custom navigation
            }}
          >
            Contact
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
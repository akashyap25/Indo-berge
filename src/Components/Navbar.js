import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [nav, setNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScroll = () => {
    setScrolling(window.scrollY > 30);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.paddingTop = scrolling ? '64px' : '0';
  }, [scrolling]);

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Products', path: 'products' },
    { id: 3, text: 'About', path: 'about' },
    { id: 4, text: 'Contact', path: 'contact' },
  ];

  const productData = [
    { id: 1, name: 'Food and Beverages',  link: '/foodProducts' },
    { id: 2, name: 'Agriculture',  link: '/agriProducts' },
    { id: 3, name: 'Engineering',  link: '/engineeringProducts' },
    { id: 4, name: 'Services',  link: '/servicesProducts' },
    { id: 5, name: 'Raw organic material and cooking oil',  link: '/rawProducts' },
  ];

  return (
    <div
      className={`p-4 bg-gradient-to-r from-green-500 to-green-700 shadow-md fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolling ? ' h-16 opacity-80' : ''
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between mx-auto px-8">
        <img
          src={logo}
          alt="Logo"
          className={`h-28 rounded-full hover:scale-110 transition duration-300 cursor-pointer ${
            scrolling ? 'hidden' : ''
          } ${
            nav ? 'hidden' : ''
          }`}
        />

        {/* Desktop Navigation */}
        <ul className={`hidden md:flex ml-auto gap-2 md:gap-10 space-x-4 text-xl font-semibold ${
          scrolling ? 'mx-auto' : ''
        }`}>
          {navItems.map((item) => (
            <li
              key={item.id}
              className='relative group'
              onMouseEnter={item.text === 'Products' ? handleDropdownToggle : undefined}
              onMouseLeave={item.text === 'Products' ? closeDropdown : undefined}
            >
              {item.path === '/' ? (
                <Link to={item.path} className='p-4 rounded-xl m-2 text-white cursor-pointer duration-300 hover:text-orange-500'>
                  {item.text}
                </Link>
              ) : (
                <ScrollLink to={item.path} className='p-4 rounded-xl m-2 text-white cursor-pointer duration-300 hover:text-orange-500'>
                  {item.text}
                </ScrollLink>
              )}

              {/* Dropdown menu for "Products" */}
              {item.text === 'Products' && showDropdown && (
                <div className="absolute top-full left-0 mt-2 bg-green-500 p-2 rounded-md shadow-md w-48">
                  <ul>
                    {productData.map((product) => (
                      <li key={product.id} className='py-2'>
                        <Link to={product.link} className='text-white hover:text-orange-500 font-normal'>
                          {product.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden right-0 top-0 w-[60%] h-full border-r border-r-green-900 bg-green-500 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <img src={logo} alt="Logo" className="h-16 rounded-full hover:scale-110 transition duration-300 cursor-pointer" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          item.text !== 'Products' && (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl text-xl font-normal  duration-300 text-white hover:text-orange-500 cursor-pointer border-gray-600'
          >
            {item.path === '/'  ? (
              <Link to={item.path}>{item.text}</Link>
            ) : (
              <ScrollLink to={item.path}>{item.text}</ScrollLink>
            )}
            
          </li>
          )
        ))}

        {/* Dropdown menu for "Products" in mobile */}
        <li className='relative group p-4 border-b rounded-xl text-xl font-normal duration-300 text-white hover:text-orange-500 cursor-pointer border-gray-600'>
          <span onClick={handleDropdownToggle}>Products</span>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-green-500 p-2 rounded-md shadow-md w-48">
              <ul>
                {productData.map((product) => (
                  <li key={product.id} className='py-2'>
                    <Link to={product.link} className='text-white hover:text-orange-500 font-normal'>
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

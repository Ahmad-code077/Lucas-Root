import { FaBars } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import logo from '../assets/NavbarImages/Logo.svg';
import logoText from '../assets/NavbarImages/LogoText.svg';
import { links } from '../data';
import { useState } from 'react';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <header className='bg-transparent relative z-10'>
      <nav className='flex items-center justify-between mx-2 md:mx-20 h-28 2xl:max-w-screen-2xl 2xl:mx-auto'>
        <div className='flex w-12 sm:w-40'>
          <img src={logo} alt='Logo of site' />
          <img src={logoText} alt='Text around logo' className='text-black' />
        </div>

        <ul
          className={`flex flex-col sm:flex-row justify-between sm:gap-10 gap-2 items-center h-20 sm:h-auto  sm:relative  sm:top-auto sm:right-auto  sm:w-auto   p-4 sm:p-0 transition-all duration-300 ease-in-out ${
            toggle ? 'block' : 'hidden'
          } sm:flex`}
        >
          {links.map((item) => (
            <li
              key={item.id}
              className='text-lg min-[400px]:text-base lg:text-2xl font-normal sm:text-xl text-white font-Abril cursor-pointer animate-slide-in w-20 py-1 z-50'
            >
              <a href='#'>{item.text}</a>
            </li>
          ))}
        </ul>

        <button
          className='sm:hidden text-[#50C1CF] text-2xl z-10'
          onClick={handleClick}
        >
          {toggle ? <IoClose /> : <FaBars />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;

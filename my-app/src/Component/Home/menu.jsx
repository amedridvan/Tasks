import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useStore } from "../Home/Global";
import { AiOutlineLogout } from "react-icons/ai";

function Menu(){
  
  function On (){
    const id =useStore(state => state.id);
    id("");
  }
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Profile' },
    { id: 3, text: 'UpdatePass' },
  ];
  return (
  <>
   
   <div key="12345" className=' static bg-gray-600 flex justify-between items-center h-24 max-w-full mx-auto px-4 text-white'>
      {/* Logo */}
      <h1  className='w-full text-3xl font-bold text-[#00df9a]'>TaskApp</h1>
      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <a key={item.name} href={"/"+item.text}   >
          <li  
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
          </a>  
        ))}
         <li>
       <a href="/">
       <AiOutlineLogout className="mt-5 hover:text-red-300" size={40} />
       </a>
        </li>
      </ul>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}  /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul 
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1  className='w-full text-3xl font-bold text-[#00df9a] m-4'>TaskApp</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
           <a key={item.name}  href={"/"+item.text}> 
          <li 
            
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
          </a>
          
        ))}
        <li>
       <a  href="/">
       <AiOutlineLogout className="mt-5 hover:text-red-300" size={40} />
       </a>
        </li>
      </ul>
      
    </div>

  </>
)
}

export default Menu ;
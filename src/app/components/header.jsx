import React from 'react';
import MenuItem from './menuitem';
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-3'>
      <div className="flex"> 
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center space-x-5">
        <div className='space-x-4'>
          <DarkModeSwitch />
        </div>
        <Link href="/">
          <h2 className='text-2xl'>
            <span className='font-bold text-black bg-amber-500 py-1 px-2 rounded-lg mr-1'>IMDb</span>
            <span className='text-xl hidden sm:inline-flex px-3'>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

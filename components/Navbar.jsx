import React from 'react';
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-teal-500 py-5">
        <nav className="flex justify-between items-center px-20">
            <h3 className="text-3xl text-white">Logo</h3>
            <ul className="flex items-center space-x-4 text-xl text-white">
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/posts">POSTS</Link>
                </li>
                <li>
                  <Link href="/about">ABOUT</Link>
                </li>
            </ul>
        </nav>
    </div>
  );
};

export default Navbar
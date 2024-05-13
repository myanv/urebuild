import Link from "next/link";
import { useState } from "react";

export default function Header() {

    return (
      <div className="navbar text-zinc-100 bg-transparent w-screen">
        <div className="navbar-start">
          <details className="dropdow right-2 lg:hidden z-10">
            <summary className="m-1 btn w-15 btn-neutral">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </summary>
            <ul tabIndex={0} className="menu menu-md sm:menu-lg dropdown-content w-screen z-[99] shadow bg-slate-700">
              <li><a>About Us</a></li>
              <li><a>Our Work</a></li>
              <li><a>Where we work</a></li>
              <li><a>Join Us</a></li>
              <li className="sm:hidden"><Link href="/donation">
                <a className="btn hidden sm:flex text-md lg:mr-2">Donate</a>
              </Link></li>
            </ul>
          </details>
          <a className="btn btn-ghost text-md sm:text-lg font-sans">Placeholder</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-sans text-lg mr-10">
            <li><a>About Us</a></li>
            <li><a>Our Work</a></li>
            <li><a>Where we work</a></li>
            <li><a>Join Us</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        
          <a className="btn hidden md:flex text-md font-sans btn-neutral lg:mr-2 mr-1">Apply For Help</a>
          <Link href="/donation">
            <a className="btn hidden md:flex text-md font-sans lg:mr-2">Donate</a>
          </Link>
          <select className="select text-xs lg:text-md pr-5 select-ghost max-w-22">
          <option disabled selected >LANG</option>
          <option>English</option>
          <option>Arabic</option>
          <option>...</option>
        </select>
        </div>
      </div>

    )
}
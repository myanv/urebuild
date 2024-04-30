export default function Header() {
    return (
      <div className="navbar w-screen  bg-blue-300 bg-opacity-75">
        <div className="navbar-start">
          <details className="dropdown right-2 lg:hidden">
            <summary className="m-1 btn w-15 btn-neutral">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </summary>
            <ul tabIndex={0} className="menu menu-lg dropdown-content w-screen z-[99] shadow bg-base-100">
            <li><a>About Us</a></li>
            <li>
              <details>
                <summary>Our Work</summary>
                <ul className="p-2">
                  <li><a>Microenterprise Development Project</a></li>
                  <li><a>Student Relief Project</a></li>
                  <li><a>Childcare Support Project</a></li>
                </ul>
              </details>
            </li>
            <li><a>Where we work</a></li>
            <li><a>Join Us</a></li>
            <li><a>Apply For Help</a></li>
            <li><a>Donate</a></li>
            </ul>
          </details>
          <a className="btn btn-ghost text-xl font-sans">Placeholder</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-sans text-xl">
            <li><a>About Us</a></li>
            <li><a>Our Work</a></li>
            <li><a>Where we work</a></li>
            <li><a>Join Us</a></li>
          </ul>
        </div>
        <div className="navbar-end">
        <select className="select select-ghost max-w-22">
          <option disabled selected>LANG</option>
          <option>English</option>
          <option>Arabic</option>
          <option>...</option>
        </select>
          <a className="btn text-md lg:text-lg font-bold btn-neutral ml-0 lg:ml-1 mr-2">Apply For Help</a>
          <a className="btn text-md lg:text-lg mr-2 lg:mr-10">Donate</a>
        </div>
      </div>

    )
}
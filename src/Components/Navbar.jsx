import { useState } from "react";
import { logo } from "../assets/index";

import { NavLinks } from "../constants";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="w-full py-6 flex justify-between items-center">
      <img src={logo} alt="" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 bg-red-500">
        {NavLinks.map((nav, index) => {
          return (
            <li
              key={nav.id}
              className={`font-normal font-poppins text-[16px] cursor-pointer ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === NavLinks.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

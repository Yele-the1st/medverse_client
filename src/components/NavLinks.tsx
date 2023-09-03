import Link from "next/link";
import React from "react";

interface NavLink {
  label: string;
  url: string;
}

interface NavLinksProps {
  navLinks: NavLink[];
}

const NavLinks: React.FC<NavLinksProps> = ({ navLinks }) => {
  return (
    <div className="flex whitespace-nowrap items-center space-x-20 text-base font-Poppins text-gray-900 ">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          href={link.url}
          className=" hover:text-primary transition-colors duration-500"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;

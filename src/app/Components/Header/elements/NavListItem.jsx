import React from "react";
import Link from "next/link";

const NavListItem = ({ title }) => {
  return (
    <Link href={title == "Home" ? "/" : `/${title}`}>
      <div className="border border-transparent hover:border-white rounded-full px-4 py-1 hover:text-gray-300 transition-all duration-300">
        {title}
      </div>
    </Link>
  );
};

export default NavListItem;

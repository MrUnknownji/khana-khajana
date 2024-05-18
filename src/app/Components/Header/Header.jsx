import React from "react";
import NavListItem from "./elements/NavListItem";

const Header = () => {
  return (
    <header className="flex items-center justify-between z-50 sticky top-0 p-8 py-6 bg-[#090b2c] bg-opacity-50 backdrop-blur-xl shadow-lg">
      <div className="rounded-full bg-[#5534ba] px-3 py-1 hover:bg-[#7456cf] duration-500 transition-all cursor-pointer">Khana Khajana</div>
      <nav className="px-4">
        <ul className="flex items-center justify-center gap-12">
          <NavListItem title={"Home"} />
          <NavListItem title={"Cart"} />
          <NavListItem title={"Profile"} />
        </ul>
      </nav>
    </header>
  );
};

export default Header;

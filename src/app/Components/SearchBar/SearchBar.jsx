import React from "react";

const SearchBar = () => {
  return (
    <div className="Search flex items-center justify-normal w-full bg-[#090b2c] border-2 border-[#906bff] bg-opacity-50 backdrop-blur-2xl shadow-md py-1 px-2 rounded-xl my-8">
      <div className="flex items-center w-full">
        <span class="material-symbols-rounded w-12 h-12 flex items-center justify-center rounded-lg cursor-pointer">
          search
        </span>
        <input
          type="search"
          placeholder="Search..."
          className="w-full h-12 border-none px-4 bg-transparent outline-none"
        />
      </div>

      <hr className="w-10 rotate-90 border opacity-75 rounded-full" />

      <span class="material-symbols-rounded w-12 h-12 flex items-center justify-center rounded-lg cursor-pointer">
        qr_code_scanner
      </span>
    </div>
  );
};

export default SearchBar;

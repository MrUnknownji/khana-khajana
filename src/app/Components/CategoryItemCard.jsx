import Image from "next/image";
import React from "react";

const CategoryItemCard = ({ title, thumbnail, handleClick, active }) => {
  return (
    <div
      className={`transition-all duration-300 ${
        active ? "opacity-75 scale-110" : "opacity-100 scale-100"
      }`}
      onClick={() => handleClick()}
    >
      <div className="flex items-center justify-center w-20 h-20 p-4 border-2 shadow-sm border-[#906bff] bg-[#191132] rounded-xl hover:scale-105 transition-all duration-500 cursor-pointer">
        <Image
          src={thumbnail}
          width={100}
          height={100}
          style={{ width: "100%", height: "auto" }}
          alt="Category"
        />
      </div>
      <div className=" text-center text-sm my-2 text-ellipsis break-all line-clamp-1">{title}</div>
    </div>
  );
};

export default CategoryItemCard;

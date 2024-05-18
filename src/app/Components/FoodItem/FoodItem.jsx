import Image from "next/image";
import React from "react";
import SpecialOfferButton from "../SpecialOffers/SpecialOfferButton";

const FoodItem = ({ value }) => {
  return (
    <div className="flex flex-col items-center m-5 gap-4">
      <div className="flex items-center justify-between flex-col relative w-48 h-48 overflow-hidden border-2 border-[#906bff] bg-black rounded-xl hover:scale-110 transition-all duration-300 cursor-pointer">
        <Image
          src={value.strMealThumb}
          alt="foodItemImage"
          width={500}
          height={500}
          style={{ width: "100%", height: "100%", opacity: 0.8 }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/35"></div>
        <div className="h-[15%] text-2xl text-start w-full absolute bottom-8 left-2 text-ellipsis line-clamp-1 break-all">
          {value.strMeal}
        </div>
        <div className="h-[5%] text-sm text-start w-full absolute bottom-4 left-2">
          99
        </div>
      </div>
      <SpecialOfferButton title={"Add to Cart"} />
    </div>
  );
};

export default FoodItem;

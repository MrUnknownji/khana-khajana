import React from "react";
import SpecialOfferButton from "./SpecialOfferButton";
import Image from "next/image";
import OfferImage from "../../../../public/Assets/Pasta.png";

const SpecialOfferCard = ({ offer, description = "No description" }) => {
  return (
    <div className="flex items-center justify-between w-[30vw] h-44 p-4 snap-center border-2 border-[#906bff] bg-[#191132] bg-opacity-50 rounded-xl cursor-pointer overflow-hidden">
      <div className="w-[70%] gap-1 flex flex-col p-2">
        <div className="text-2xl">{offer}</div>
        <div className="text-sm">{description}</div>
        <SpecialOfferButton title={"Order Now"} />
      </div>
      <div className="w-[30%] flex items-center justify-center">
        <Image
          src={OfferImage}
          style={{ width: "100%", height: "auto", transform:'scale(3)', paddingLeft:20 }}
          alt="offerImage"
        />
      </div>
    </div>
  );
};

export default SpecialOfferCard;

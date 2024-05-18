import React from "react";

const SpecialOfferButton = ({ title }) => {
  return (
    <div className="rounded-xl w-full border py-2 px-1 text-center shadow-sm border-[#906bff] bg-gradient-radial from-[#191132] to-[#906bff] hover:scale-105 transition-all duration-500 cursor-pointer">
      {title}
    </div>
  );
};

export default SpecialOfferButton;

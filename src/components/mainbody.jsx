import React from "react";
import bigImage from "../assets/images/bigImage.svg";
import saleImage from "../assets/images/sale.svg";
import saleImage2 from "../assets/images/sale2.svg";
import saleImage3 from "../assets/images/sale3.svg";
import saleImage4 from "../assets/images/sale4.svg";

export default function MainBody() {
  return (
    <div className="container mx-auto p-5">
      {/* Katta rasm */}
      <img
        src={bigImage}
        alt="Main Sale"
        className="w-4/5 mx-auto rounded-xl shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1"
      />

      {/* Kichik rasmlar */}
      <div className="w-4/5 mx-auto grid grid-cols-4 gap-4 mt-5">
        <img
          src={saleImage}
          alt="Sale 1"
          className="w-full h-auto object-contain rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
        />
        <img
          src={saleImage2}
          alt="Sale 2"
          className="w-full h-auto object-contain rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
        />
        <img
          src={saleImage3}
          alt="Sale 3"
          className="w-full h-auto object-contain rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
        />
        <img
          src={saleImage4}
          alt="Sale 4"
          className="w-full h-auto object-contain rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:-translate-y-2"
        />
      </div>
    </div>
  );
}

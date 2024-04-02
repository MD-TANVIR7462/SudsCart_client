/* eslint-disable jsx-a11y/alt-text */
import { Tproduct } from "@/Types/Types";
import { Image } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const ProductCard = ({ singleProduct }: { singleProduct: Tproduct }) => {
  return (
    <Link href={`/dishwashing-items/${singleProduct._id}`}>
      <div className="relative w-full sm:w-[80%] mx-auto md:w-full shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300  bg-white   rounded-3xl p-2  my-3 cursor-pointer">
        <div className="overflow-x-hidden rounded-2xl relative">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            className="w-full object-cover h-[140px]"
            src={singleProduct?.image}
          />
          <p className="absolute right-2 top-2 bg-white  rounded-full p-2 cursor-pointer group">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-hover:opacity-50 opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#66cc33"
            >
              <path
                sstrokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </p>
        </div>
        <div className="mt-4 pl-2 mb-2 flex justify-between ">
          <div>
            <p className="text-lg font-semibold text-gray-900 mb-0">
              {singleProduct.name}
            </p>
            <p className="text-md text-gray-800 mt-0">${singleProduct.price}</p>
          </div>
          <div className="flex items-center justify-center  mb-1 mr-4 group cursor-pointer">
            {singleProduct.ratings}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 group-hover:opacity-70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#66cc33"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

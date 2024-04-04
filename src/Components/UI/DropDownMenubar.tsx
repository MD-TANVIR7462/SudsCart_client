"use client";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";

const DropDownMenubar = () => {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const handleCategoryChange = (value: string) => {
    setCategory(value);
  };

  const handleRatingChange = (value: string) => {
    setRating(value);
  };

  const handlePriceChange = (value: string) => {
    setPrice(value);
  };

  useEffect(() => {
    router.push(
      `dishwashing-items/?category=${category}&price=${price}&rating=${rating}`
    );
  }, [category, price, rating, router]);

  return (
    <div className="flex items-center justify-center relative z-50">
      <div className="-mt-16">
        <div className="relative ">
          <button 
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
              aria-expanded={open ? "true" : "false"}
          >
            <p className="relative inline-block text-sm font-medium text-green-500 group active:text-green-500 focus:outline-none focus:ring">
              <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-green-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>

              <span className="relative block px-8 py-3 bg-gray-100 border border-current">
                View All
              </span>
            </p>
          </button>
          {/* Conditional rendering of the dropdown */}
          {open && (
            <div className="dropdown-menu origin-top-right bg-white border-2 border-gray-400 bg-opacity-70 shadow-2xl  backdrop-blur-lg transition-transform transform ease-in-out rounded-lg  ring-1 ring-black ring-opacity-5 mt-2 w-72 absolute right-0">
              <div className=" p-5  ">
                <RadioGroup
                  label="Select Category"
                  className="text-white"
                  color="secondary"
                  defaultValue={category}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  <Radio value="Dish Soap" className="text-black">
                    Dish Soap
                  </Radio>
                  <Radio value="Dishwasher Detergent">
                    Dishwasher Detergent
                  </Radio>
                  <Radio value="Dish Brush">Dish Brush</Radio>
                  <Radio value="Dish Rack">Dish Rack</Radio>
                  <Radio value="Dishwashing Accessories">
                    Dishwashing Accessories
                  </Radio>
                  <Radio value="Kitchen Cleaning Sponges">
                    Kitchen Cleaning Sponges
                  </Radio>
                  <Radio value="">All</Radio>
                </RadioGroup>
                <div className="border border-b-gray-500  my-3" />

                <RadioGroup
                  label="Select Price Range"
                  className="text-black"
                  color="secondary"
                  defaultValue={price}
                  onChange={(e) => handlePriceChange(e.target.value)}
                >
                  <Radio value="5-10" className="text-black">
                    $0 - $10
                  </Radio>
                  <Radio value="11-20" className="text-black">
                    $11 - $20
                  </Radio>
                  <Radio value="21-50" className="text-black">
                    $21 - $50
                  </Radio>
                  <Radio value="" className="text-black">
                    All
                  </Radio>
                </RadioGroup>
                <div className="border border-b-gray-500  my-3" />
                <RadioGroup
                  label="Select Ratings"
                  className="text-black"
                  color="secondary"
                  defaultValue={rating}
                  onChange={(e) => handleRatingChange(e.target.value)}
                >
                  <Radio value="2-3" className="text-black">
                    2 Star
                  </Radio>
                  <Radio value="3-4" className="text-black">
                    3 Star
                  </Radio>
                  <Radio value="4-5" className="text-black">
                    4 Star
                  </Radio>
                  <Radio value="5-6" className="text-black">
                    5 Star
                  </Radio>
                  <Radio value="" className="text-black">
                    All
                  </Radio>
                </RadioGroup>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDownMenubar;

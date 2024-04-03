"use client";
import { Radio, RadioGroup } from "@nextui-org/react";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const DropDownMenubar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [category, setCategory] = useState("");
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
  console.log(category, rating, price);

  useEffect(() => {
    router.push(
      `dishwashing-items/?category=${category}&price=${price}&rating=${rating}`
    );
  }, [category, price, rating, router]);

  return (
    <div className="flex items-center justify-center relative z-50">
      <div className="-mt-16">
        <div className="relative">
          <button
            className="group h-12 w-32 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white  top-5"
            onClick={() => setOpen(!open)}
            aria-expanded={open ? "true" : "false"}
          >
            Filter
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </button>

          {/* Conditional rendering of the dropdown */}
          {open && (
            <div className="dropdown-menu origin-top-right bg-white border-2 border-white bg-opacity-75  backdrop-blur-lg transition-transform transform ease-in-out rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 mt-2 w-72 absolute right-0">
              <div className=" p-5  ">
                <RadioGroup
                  label="Select Category"
                  className="text-white"
                  color="secondary"
                  defaultValue=""
                  onChange={(e) => handleCategoryChange(e.target.value)}
                >
                  <Radio value="dish-soap" className="text-white">
                    Dish Soap
                  </Radio>
                  <Radio value="dishwasher-detergent">
                    Dishwasher Detergent
                  </Radio>
                  <Radio value="dish-brush">Dish Brush</Radio>
                  <Radio value="dish-rack">Dish Rack</Radio>
                  <Radio value="dishwashing-accessories">
                    Dishwashing Accessories
                  </Radio>
                  <Radio value="kitchen-cleaning-sponges">
                    Kitchen Cleaning Sponges
                  </Radio>
                </RadioGroup>
                <div className="border border-b-gray-500  my-3" />

                <RadioGroup
                  label="Select Price Range"
                  className="text-white"
                  color="secondary"
                  defaultValue=""
                  onChange={(e) => handlePriceChange(e.target.value)}
                >
                  <Radio value="5-10" className="text-white">
                    $0 - $10
                  </Radio>
                  <Radio value="11-20" className="text-white">
                    $11 - $20
                  </Radio>
                  <Radio value="21-50" className="text-white">
                    $21 - $50
                  </Radio>
                </RadioGroup>
                <div className="border border-b-gray-500  my-3" />
                <RadioGroup
                  label="Select Ratings"
                  className="text-white"
                  color="secondary"
                  defaultValue=""
                  onChange={(e) => handleRatingChange(e.target.value)}
                >
                  <Radio value="2star" className="text-white">
                    2 Star
                  </Radio>
                  <Radio value="3star" className="text-white">
                    3 Star
                  </Radio>
                  <Radio value="4star" className="text-white">
                    4 Star
                  </Radio>
                  <Radio value="5star" className="text-white">
                    5 Star
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

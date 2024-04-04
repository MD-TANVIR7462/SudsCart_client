import Category from "@/Components/UI/Category";
import HeroSection from "@/Components/UI/HeroSection";
import FlasAndProduct from "@/Components/UI/flasAndProduct";

import React from "react";

const HomePage = async () => {
  const flashProducts = await fetch(
    "http://localhost:5000/api/v1/flashproduct",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const FlashData = await flashProducts.json();

  const trandingProducts = await fetch(
    "http://localhost:5000/api/v1/topRatedProducts",
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const TrandingData = await trandingProducts.json();
  const flashData = FlashData.slice(0, 8);
  const tradingData = TrandingData.slice(0, 8);

  return (
    <div>
      <HeroSection />
      <div className="w-[95%] md:w-full max-w-[1370px]  mx-auto">
        <FlasAndProduct
          data={flashData}
          Sectiontitle={"Flash Sales"}
          route={"/flash-sale"}
        />
        <Category />
        <FlasAndProduct
          data={tradingData}
          Sectiontitle={"Trending Products"}
          route={"/dishwashing-items/?category=&price=&rating="}
        />
      </div>
    </div>
  );
};

export default HomePage;

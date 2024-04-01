import Category from "@/Components/UI/Category";
import FlasAndProduct from "@/Components/UI/flasAndProduct";

import React from "react";

const HomePage = async () => {
  // const res = await fetch("https://recoz-back-end.vercel.app/api/student/", {
  //   next: {
  //     revalidate: 20,
  //   },
  // });
  // const data = await res.json();
  // console.log(data);
  const data = [
    {
      name: "Lemon Dish Soap",
      title: "Fresh Lemon Dish Soap",
      price: 4.99,
      ratings: 4.5,
      category: "Dish Soap",
      description:
        "Enjoy the refreshing scent of fresh lemons while tackling tough grease and grime with our Lemon Dish Soap.",
      flashSale: false,
      _id: "1",
      image: "https://source.unsplash.com/random/dishwashing",
    },
    {
      name: "Dishwasher Pods",
      title: "Advanced Dishwasher Pods",
      price: 12.99,
      ratings: 4.7,
      category: "Dishwasher Detergent",
      description:
        "Make dishwashing a breeze with our advanced dishwasher pods. These pods are designed to tackle even the toughest stains and leave your dishes sparkling clean.",
      flashSale: true,
      _id: "2",
      image: "https://source.unsplash.com/random/product",
    },
    {
      name: "Bamboo Dish Brush",
      title: "Eco-Friendly Bamboo Dish Brush",
      price: 6.49,
      ratings: 4.3,
      category: "Dish Brush",
      description:
        "Our eco-friendly bamboo dish brush is perfect for scrubbing pots, pans, and dishes. The durable bamboo handle and natural bristles make it an essential tool for any kitchen.",
      flashSale: false,
      _id: "3",
      image: "https://source.unsplash.com/random/ball",
    },
    {
      name: "Grapefruit Dish Soap",
      title: "Refreshing Grapefruit Dish Soap",
      price: 5.99,
      ratings: 4.6,
      category: "Dish Soap",
      description:
        "Add a burst of citrus to your dishwashing routine with our refreshing grapefruit dish soap. Its powerful formula cuts through grease and leaves dishes sparkling clean.",
      flashSale: false,
      _id: "4",
      image: "https://source.unsplash.com/random/361x481/?charity",
    },
    {
      name: "Rinse Aid",
      title: "Eco-Friendly Rinse Aid",
      price: 8.99,
      ratings: 4.4,
      category: "Dishwasher Detergent",
      description:
        "Enhance the performance of your dishwasher and prevent water spots with our eco-friendly rinse aid. Formulated with natural ingredients, it leaves your dishes spotless and streak-free.",
      flashSale: true,
      _id: "5",
      image: "https://source.unsplash.com/random/361x481/?charity",
    },
    {
      name: "Orange Dish Soap",
      title: "Refreshing Orange Dish Soap",
      price: 5.49,
      ratings: 4.6,
      category: "Dish Soap",
      description:
        "Infused with the invigorating scent of oranges, our Orange Dish Soap cuts through grease and leaves your dishes smelling fresh and clean.",
      flashSale: false,
      _id: "6",
      image: "https://source.unsplash.com/random/361x481/?charity",
    },
    {
      name: "Dishwasher Cleaner",
      title: "Advanced Dishwasher Cleaner",
      price: 9.99,
      ratings: 4.3,
      category: "Dishwasher Detergent",
      description:
        "Keep your dishwasher clean and odor-free with our advanced dishwasher cleaner. Its powerful formula removes limescale, grease, and food residues, ensuring optimal performance.",
      flashSale: false,
      _id: "7",
      image: "https://source.unsplash.com/0c3lb_v1Rfw",
    },
    {
      name: "Silicone Dish Scrubber",
      title: "Flexible Silicone Dish Scrubber",
      price: 3.99,
      ratings: 4.2,
      category: "Dish Brush",
      description:
        "Say goodbye to traditional sponges! Our flexible silicone dish scrubber is durable, hygienic, and easy to clean. It's gentle on dishes and tough on stains.",
      flashSale: true,
      _id: "8",
      image: "https://source.unsplash.com/33nOyL3iO8U",
    },
    {
      name: "Mint Dish Soap",
      title: "Cool Mint Dish Soap",
      price: 5.99,
      ratings: 4.5,
      category: "Dish Soap",
      description:
        "Experience the cool and refreshing scent of mint while washing dishes with our Mint Dish Soap. Its powerful formula effectively removes grease and leaves dishes sparkling clean.",
      flashSale: false,
      _id: "9",
      image: "https://source.unsplash.com/BySrH0Tl0IU",
    },
    {
      name: "Dishwasher Rinse Agent",
      title: "Professional Rinse Agent",
      price: 7.99,
      ratings: 4.4,
      category: "Dishwasher Detergent",
      description:
        "Achieve spotless and streak-free dishes with our professional-grade dishwasher rinse agent. Its advanced formula ensures optimal drying and eliminates water spots.",
      flashSale: true,
      _id: "10",
      image: "https://source.unsplash.com/bjPxMzhBVn0",
    },
    {
      name: "Lemon Dishwasher Detergent",
      title: "Citrus Lemon Dishwasher Detergent",
      price: 11.49,
      ratings: 4.6,
      category: "Dishwasher Detergent",
      description:
        "Our citrus lemon dishwasher detergent delivers powerful cleaning performance while leaving your dishes with a fresh lemon scent. Say goodbye to tough stains and grease!",
      flashSale: false,
      _id: "11",
      image: "https://source.unsplash.com/Rs0l_kw6tCI",
    },
    {
      name: "Wooden Dish Brush",
      title: "Natural Wooden Dish Brush",
      price: 5.99,
      ratings: 4.3,
      category: "Dish Brush",
      description:
        "Add a touch of nature to your kitchen with our natural wooden dish brush. Crafted from sustainable bamboo and natural bristles, it's gentle on dishes and tough on stains.",
      flashSale: true,
      _id: "12",
      image: "https://source.unsplash.com/VcJ7aIu3Kw8",
    },
    {
      name: "Lavender Dish Soap",
      title: "Calming Lavender Dish Soap",
      price: 6.99,
      ratings: 4.7,
      category: "Dish Soap",
      description:
        "Relax and unwind while washing dishes with our calming lavender dish soap. Its gentle formula effectively removes grease and leaves your dishes smelling fresh.",
      flashSale: false,
      _id: "13",
      image: "https://source.unsplash.com/EiHN0-LZTAc",
    },
    {
      name: "Dishwasher Tablets",
      title: "Convenient Dishwasher Tablets",
      price: 10.49,
      ratings: 4.5,
      category: "Dishwasher Detergent",
      description:
        "Our convenient dishwasher tablets provide powerful cleaning performance and dissolve quickly to remove tough stains and residue. Say goodbye to messy spills!",
      flashSale: true,
      _id: "14",
      image: "https://source.unsplash.com/7DZ_RPH6EyE",
    },
    {
      name: "Stainless Steel Scrubbers",
      title: "Heavy-Duty Stainless Steel Scrubbers",
      price: 7.49,
      ratings: 4.4,
      category: "Dish Brush",
      description:
        "Tackle tough stains and burnt-on food with our heavy-duty stainless steel scrubbers. Perfect for cleaning pots, pans, and grills!",
      flashSale: false,
      _id: "15",
      image: "https://source.unsplash.com/92j3BeJNuxM",
    },
    {
      name: "Citrus Dishwashing Liquid",
      title: "Zesty Citrus Dishwashing Liquid",
      price: 5.99,
      ratings: 4.6,
      category: "Dish Soap",
      description:
        "Add a burst of citrus to your dishwashing routine with our zesty citrus dishwashing liquid. Its powerful formula cuts through grease and leaves dishes sparkling clean.",
      flashSale: false,
      _id: "16",
      image: "https://source.unsplash.com/ykzJ41HAKsI",
    },
    {
      name: "Dish Drying Rack",
      title: "Collapsible Dish Drying Rack",
      price: 14.99,
      ratings: 4.7,
      category: "Dish Rack",
      description:
        "Keep your kitchen organized with our collapsible dish drying rack. It's perfect for drying dishes, utensils, and even fruits and vegetables!",
      flashSale: true,
      _id: "17",
      image: "https://source.unsplash.com/KKWsL7_1QcY",
    },
    {
      name: "Coconut Dish Soap",
      title: "Exotic Coconut Dish Soap",
      price: 6.49,
      ratings: 4.5,
      category: "Dish Soap",
      description:
        "Transport yourself to a tropical paradise with our exotic coconut dish soap. Its rich lather effectively removes grease and leaves dishes smelling like coconut!",
      flashSale: false,
      _id: "18",
      image: "https://source.unsplash.com/aK05NMU2fhE",
    },
    {
      name: "Dish Drying Mat",
      title: "Absorbent Dish Drying Mat",
      price: 9.99,
      ratings: 4.6,
      category: "Dish Rack",
      description:
        "Our absorbent dish drying mat is perfect for drying dishes, glasses, and utensils. Its microfiber surface quickly absorbs water, keeping your countertops dry and clean.",
      flashSale: false,
      _id: "19",
      image: "https://source.unsplash.com/q1-gty7_6DU",
    },
    {
      name: "Lemon Dishwasher Pods",
      title: "Lemon Scented Dishwasher Pods",
      price: 13.49,
      ratings: 4.7,
      category: "Dishwasher Detergent",
      description:
        "Our lemon-scented dishwasher pods provide powerful cleaning performance while leaving your dishes with a fresh lemon scent. Say goodbye to stains and grease!",
      flashSale: true,
      _id: "20",
      image: "https://source.unsplash.com/3J1eS0-0o6k",
    },
    {
      name: "Soap Dispensing Dish Brush",
      title: "Convenient Soap Dispensing Dish Brush",
      price: 8.99,
      ratings: 4.5,
      category: "Dish Brush",
      description:
        "Make dishwashing easier with our soap dispensing dish brush. Simply fill the handle with dish soap and dispense as needed while scrubbing pots, pans, and dishes.",
      flashSale: false,
      _id: "21",
      image: "https://source.unsplash.com/ed8BkvAG3DQ",
    },
    {
      name: "Fruit and Vegetable Brush",
      title: "Gentle Fruit and Vegetable Brush",
      price: 4.99,
      ratings: 4.4,
      category: "Dish Brush",
      description:
        "Our gentle fruit and vegetable brush is perfect for cleaning all types of produce. Its soft bristles effectively remove dirt and residue without damaging delicate skins.",
      flashSale: false,
      _id: "22",
      image: "https://source.unsplash.com/5XyBkc1-T10",
    },
    {
      name: "Dish Soap Dispenser",
      title: "Stylish Dish Soap Dispenser",
      price: 11.99,
      ratings: 4.6,
      category: "Dish Soap",
      description:
        "Add a touch of style to your kitchen sink with our stylish dish soap dispenser. Its sleek design and durable construction make it a must-have accessory for any kitchen.",
      flashSale: true,
      _id: "23",
      image: "https://source.unsplash.com/jxR2mObGQJ8",
    },
    {
      name: "Dishwashing Gloves",
      title: "Reusable Dishwashing Gloves",
      price: 5.49,
      ratings: 4.4,
      category: "Dishwashing Accessories",
      description:
        "Protect your hands while washing dishes with our reusable dishwashing gloves. Made from durable latex, these gloves are comfortable to wear and easy to clean.",
      flashSale: false,
      _id: "24",
      image: "https://source.unsplash.com/it8jfj4eiMc",
    },
    {
      name: "Dish Sponge Holder",
      title: "Stylish Dish Sponge Holder",
      price: 7.99,
      ratings: 4.5,
      category: "Dishwashing Accessories",
      description:
        "Keep your dish sponge organized and within reach with our stylish dish sponge holder. Its compact design saves space on your countertop while keeping your sponge dry and hygienic.",
      flashSale: false,
      _id: "25",
      image: "https://source.unsplash.com/RUg0KMEhlE0",
    },
    {
      name: "Dish Drying Gloves",
      title: "Microfiber Dish Drying Gloves",
      price: 6.99,
      ratings: 4.3,
      category: "Dishwashing Accessories",
      description:
        "Dry dishes quickly and efficiently with our microfiber dish drying gloves. The absorbent microfiber material dries dishes in no time, leaving them spotless and streak-free.",
      flashSale: true,
      _id: "26",
      image: "https://source.unsplash.com/8oz8Uo0WsYk",
    },
    {
      name: "Sink Caddy Organizer",
      title: "Convenient Sink Caddy Organizer",
      price: 9.49,
      ratings: 4.4,
      category: "Dishwashing Accessories",
      description:
        "Keep your kitchen sink organized with our convenient sink caddy organizer. It's perfect for storing dish soap, sponge, and scrub brush, keeping them within easy reach.",
      flashSale: false,
      _id: "27",
      image: "https://source.unsplash.com/LG_Jye1VgAc",
    },
    {
      name: "Dish Scrub Brush",
      title: "Durable Dish Scrub Brush",
      price: 4.99,
      ratings: 4.3,
      category: "Dish Brush",
      description:
        "Our durable dish scrub brush is perfect for tackling tough stains and baked-on food. Its ergonomic handle and sturdy bristles make dishwashing a breeze.",
      flashSale: true,
      _id: "28",
      image: "https://source.unsplash.com/qb0lHR2xJN8",
    },
  ];
  const flashData = data.slice(0, 8);
  return (
    <div>
      {/* <Hero /> */}
      <div className="max-w-[1370px] mx-auto">
        <FlasAndProduct
          data={flashData}
          Sectiontitle={"Flash Sales"}
          route={"/flash-sale"}
        />
        <Category />
        <FlasAndProduct
          data={flashData}
          Sectiontitle={"Trending Products"}
          route={"/category"}
        />
      </div>
    </div>
  );
};

export default HomePage;

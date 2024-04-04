"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  const categoryData = [
    {
      name: "Dish Soap",
      route: "Dish Soap",
      image: "https://i.ibb.co/R008wxb/Screenshot-18.png",
    },
    {
      name: "Dishwasher Detergent",
      route: "Dishwasher Detergent",
      image: "https://i.ibb.co/KN0SyLn/tomato-lotion-body-skin-care.jpg",
    },
    {
      name: "Dish Brush",
      route: "Dish Brush",
      image: "https://i.ibb.co/jR2gGnk/composition-cleaning-objects.jpg",
    },
    {
      name: "Dish Rack",
      route: "Dish Rack",
      image: "https://i.ibb.co/wW7d2XK/Screenshot-1.png",
    },
    {
      name: "Dishwashing Accessories",
      route: "Dishwashing Accessories",
      image:
        "https://i.ibb.co/WzRfx0p/colorful-composition-with-set-bright-cleaning-sponges-cleaning-agent-cleaning-service-concept-backgr.jpg",
    },
    {
      name: "Kitchen Cleaning Sponges",
      route: "Kitchen Cleaning Sponges",
      image: "https://i.ibb.co/HKdkC4J/kitchen-sponge-pink-background.jpg",
    },
  ];

  return (
    <>
      <div className="my-24">
        <p className="text-black text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-center md:text-start">Top Categories</p>

        <div className="md:w-full w-[85%] gap-6 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6  mx-auto ">
          {categoryData.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <Link
              href={`/dishwashing-items?category=${item.route}&price=&rating=`}
            >
              <Card shadow="sm" key={index} className="shadow-lg">
                <CardBody className="overflow-visible p-0">
                  <Image
                    width={300}
                    height={300}
                    alt={item.name}
                    className="w-full object-cover h-[140px] shadow-lg rounded-lg"
                    src={item.image}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.name}</b>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;

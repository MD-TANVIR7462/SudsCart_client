/* eslint-disable react/jsx-key */
"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

const Category = () => {
  const categoryData = [
    {
      name: "Dish Soap",
      route: "dish-soap",
      image: "https://i.ibb.co/R008wxb/Screenshot-18.png",
    },
    {
      name: "Dishwasher Detergent",
      route: "dishwasher-detergent",
      image: "https://i.ibb.co/KN0SyLn/tomato-lotion-body-skin-care.jpg",
    },
    {
      name: "Dish Brush",
      route: "dish-brush",
      image: "https://i.ibb.co/jR2gGnk/composition-cleaning-objects.jpg",
    },
    {
      name: "Dish Rack",
      route: "dish-rack",
      image: "https://i.ibb.co/wW7d2XK/Screenshot-1.png",
    },
    {
      name: "Dishwashing Accessories",
      route: "dishwashing-accessories",
      image:
        "https://i.ibb.co/WzRfx0p/colorful-composition-with-set-bright-cleaning-sponges-cleaning-agent-cleaning-service-concept-backgr.jpg",
    },
    {
      name: "Kitchen Cleaning Sponges",
      route: "kitchen-sponges",
      image: "https://i.ibb.co/HKdkC4J/kitchen-sponge-pink-background.jpg",
    },
  ];

  return (
    <>
      <div className="my-24">
        <p className="text-gray-900 text-3xl font-bold mb-8 ">Top Categories</p>

        <div className="md:w-full w-[85%] gap-6 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6  mx-auto ">
          {categoryData.map((item, index) => (
            <Link href={`/dishwashing-items?category=${item.route}`}>
              <Card shadow="sm" key={item.route} className="shadow-lg">
                <CardBody className="overflow-visible p-0">
                  <Image
                    shadow="md"
                    radius="lg"
                    width="100%"
                    alt={item.name}
                    className="w-full object-cover h-[140px]"
                    src={item.image}
                  />
                </CardBody>
                <CardFooter className="text-small justify-between">
                  <b>{item.name}</b>
                  <p className="text-default-500">{}</p>
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

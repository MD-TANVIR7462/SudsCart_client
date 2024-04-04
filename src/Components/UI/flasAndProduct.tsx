import ProductCard from "./ProductCard";
import Link from "next/link";
import { TflasProduct, Tproduct } from "@/Types/Types";

const FlasAndProduct = ({ data, Sectiontitle, route }: TflasProduct) => {
  return (
    <>
      <div className="my-20">
        <div className="flex justify-between w-full">
          <p className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-3xl font-bold mb-8">
            {Sectiontitle}
          </p>
          <Link href={route}>
            <button className="">
              <p className="relative inline-block text-sm font-medium text-green-500 group active:text-green-500 focus:outline-none focus:ring">
                <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-green-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>

                <span className="relative block px-8 py-3 bg-gray-100 border border-current">
                  View All
                </span>
              </p>
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {data?.map((singleProduct: Tproduct) => (
            <ProductCard
              key={singleProduct._id}
              singleProduct={singleProduct}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FlasAndProduct;

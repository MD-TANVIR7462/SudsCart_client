import ProductCard from "./ProductCard";
import Link from "next/link";
import { TflasProduct, Tproduct } from "@/Types/Types";

const FlasAndProduct = ({ data, Sectiontitle, route }: TflasProduct) => {
  return (
    <>
      <div className="my-20">
        <div className="flex justify-between w-full">
          <p className="text-white text-3xl font-bold mb-8">
            {Sectiontitle}
          </p>
          <Link href={route}>
            <button className="group relative h-12 w-32 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
              View All
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
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

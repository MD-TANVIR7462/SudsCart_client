import DropDownMenubar from "@/Components/UI/DropDownMenubar";
import ProductCard from "@/Components/UI/ProductCard";
import { SearchParams, Tproduct } from "@/Types/Types";

const ALlProductPage = async ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const allproduct = await fetch(
    `https://dishwasing-server.vercel.app/api/v1/products?category=${searchParams.category}&price=${searchParams.price}&rating=${searchParams.rating}`,
    {
      cache: "no-store",
    }
  );
  const products = await allproduct.json();

  return (
    <div className="my-16 sm:my-20 w-[90%] sm:w-[95%] md:w-[90%] lg:w-[95%] xl:w-full max-w-[1370px] mx-auto ">
      <div className="flex justify-between items-center">
        <p className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-2xl sm:text-3xl font-bold mb-8">
          Our Products
        </p>
        <DropDownMenubar />
      </div>
      {products?.message && (
        <p className="text-black text-3xl  min-h-[40dvh] flex  justify-center items-center  w-full">
          {products.message}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2  justify-center items-center mx-auto lg:grid-cols-3 xl:grid-cols-4   sm:gap-4 md:gap-7">
        {products.length > 0 &&
          products &&
          products?.map((singleProduct: Tproduct) => (
            <ProductCard
              key={singleProduct._id}
              singleProduct={singleProduct}
            />
          ))}
      </div>
    </div>
  );
};

export default ALlProductPage;

import DropDownMenubar from "@/Components/UI/DropDownMenubar";
import ProductCard from "@/Components/UI/ProductCard";
import { Tproduct } from "@/Types/Types";

const ALlProductPage = async ({ searchParams }) => {
  const allproduct = await fetch(
    `http://localhost:5000/api/v1/products?category=${searchParams.category}&price=${searchParams.price}&rating=${searchParams.rating}`,
    {
      cache: "no-store",
    }
  );
  const products = await allproduct.json();

  return (
    <div className="my-20 max-w-[1370px] mx-auto ">
      <div className="flex justify-between items-center">
        <p className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-3xl font-bold mb-8">
          Flash Sales
        </p>
        <DropDownMenubar />
      </div>
      {products?.message && (
        <p className="text-black text-3xl  min-h-[40dvh] flex  justify-center items-center  w-full">
          {products.message}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto lg:grid-cols-3 xl:grid-cols-4 gap-7">
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

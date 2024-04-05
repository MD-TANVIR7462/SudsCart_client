import ProductCard from "@/Components/UI/ProductCard";
import { Tproduct } from "@/Types/Types";

const FlashSalePage = async () => {
  const flashProducts = await fetch(
    "https://dishwasing-server.vercel.app/api/v1/flashproduct",
    {
      cache: "no-store",
    }
  );
  const FlashData = await flashProducts.json();

  return (
    <div className="my-16 md:my-20 w-[90%] sm:w-[95%] md:w-[90%] lg:w-[95%] xl:w-full max-w-[1370px] mx-auto ">
     
        <p className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-3xl font-bold mb-8">
          Flash Sales
        </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-center items-center mx-auto lg:grid-cols-3 xl:grid-cols-4  sm:gap-4 md:gap-7">
        {FlashData?.map((singleProduct: Tproduct) => (
          <ProductCard key={singleProduct._id} singleProduct={singleProduct} />
        ))}
      </div>
    </div>
  );
};

export default FlashSalePage;

import ProductCard from "@/Components/UI/ProductCard";
import { Tproduct } from "@/Types/Types";

const FlashSalePage = async () => {
  const flashProducts = await fetch(
    "http://localhost:5000/api/v1/flashproduct",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const FlashData = await flashProducts.json();

  return (
    <div className="my-20 max-w-[1370px] mx-auto ">
      <div className="">
        <p className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 text-3xl font-bold mb-8">
          Flash Sales
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {FlashData?.map((singleProduct: Tproduct) => (
          <ProductCard key={singleProduct._id} singleProduct={singleProduct} />
        ))}
      </div>
    </div>
  );
};

export default FlashSalePage;

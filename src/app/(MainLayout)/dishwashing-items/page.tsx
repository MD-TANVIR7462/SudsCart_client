import DropDownMenubar from "@/Components/UI/DropDownMenubar";
import ProductCard from "@/Components/UI/ProductCard";
import { Tproduct } from "@/Types/Types";

const ALlProductPage = async () => {
  const allproduct = await fetch("http://localhost:5000/api/v1/flashproduct");
  const products = await allproduct.json();
  return (
    <div className="my-20 max-w-[1370px] mx-auto ">
      <div className="flex justify-between items-center">
        <p className="text-gray-900 text-3xl font-bold mb-8">Flash Sales</p>
        <DropDownMenubar />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {products?.map((singleProduct: Tproduct) => (
          <ProductCard key={singleProduct._id} singleProduct={singleProduct} />
        ))}
      </div>
    </div>
  );
};

export default ALlProductPage;

import ProductCard from "./ProductCard";

const FlashSell = ({ data }) => {
  return (
    <div >
      <p className="text-gray-900 text-3xl font-bold mb-8">Flash Sales</p>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mx-auto lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {data?.map((singleProduct) => (
          <ProductCard key={data._id} singleProduct={singleProduct} />
        ))}
      </div>
    </div>

  );
};

export default FlashSell;

import { Tproduct } from "@/Types/Types";
import { Eye, Trash } from "lucide-react";
import Image from "next/image";


const AllProductsPage = async () => {
  const products = await fetch(`http://localhost:5000/api/v1/products`, {
    cache: "no-store",
  });
  const data = await products.json();
  return (
    <div className="flex items-center justify-center min-h-fit">
      <div className="w-full overflow-x-auto">
        <table className=" table  w-full text-black">
          <thead className="bg-white text-black">
            <tr>
              <th className="p-3  text-left ml-4">Image</th>
              <th className="p-3  text-left ">Name</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">price</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((SingleData: Tproduct) => (
              <tr
                key={SingleData?._id}
                className="border border-gray-600  overflow-x-auto w-full  "
              >
                <td className="p-3">
                  <div className="flex items-center">
                    <Image
                      height={100}
                      width={100}
                      alt="image"
                      className="rounded-xl h-12 w-12 object-cover "
                      src={SingleData?.image}
                    />
                  </div>
                </td>
                <td className="p-3">
                  <div className="text-xs md:text-sm    font-normal md:font-semibold ">
                    <div>{SingleData?.name}</div>
                  </div>
                </td>
                <td className="text-xs pl-5 md:text-sm font-normal md:font-semibold ">
                  {SingleData?.category}
                </td>
                <td className="text-xs pl-3 md:text-sm font-normal md:font-semibold ">
                  {SingleData?.price}
                </td>
                <td className="text-xs md:text-sm ">
                  <div className="flex  gap-4">
                    <button className="text-gray-400   cursor-pointer hover:text-green-600">
                      <Eye className=" w-4 h-4 sm:w-5 sm:h-5  " />
                    </button>

                    <button className="text-gray-400   cursor-pointer hover:text-red-600">
                      <Trash className="w-4 h-4 sm:w-5 sm:h-5 " />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProductsPage;

import { Tproduct } from "@/Types/Types";
import Image from "next/image";

export const genarateStaticParams = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/products?category=&price=&rating="
  );
  const products = await res.json();
  return products.slice(0, 10).map((sinGleItem: Tproduct) => ({
    id: sinGleItem._id,
  }));
};

const DetailsPage = async ({ params }: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return (
    <section className=" overflow-hidden  text-black ">
      <div className="container px-5 bg-white shadow-2xl rounded-xl  my-12 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            width={400}
            height={400}
            alt={data?.name}
            className="lg:w-1/2 w-full h-[400px] object-cover object-center rounded "
            src={data?.image}
          />

          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
            <h1 className=" text-3xl title-font font-medium mb-1">
              {data?.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center gap-2">
                {data?.ratings}
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-green-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </span>
            </div>
            <p className="leading-relaxed overflow-y-auto h-[120px] ">
              {data?.description}
            </p>
            <p className="font-semibold"> {data?.category}</p>
            <span className="title-font font-medium text-2xl text-gray-90">
              {data?.price}
            </span>

            <span className="flex  items-center mt-4">
              <button className=" text-black bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">
                Buy
              </button>
              <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsPage;

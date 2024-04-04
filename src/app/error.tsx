"use client";

const error = ({ error, reset }) => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-gray-200/60">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 from-20% via-blue-600 via-30% to-green-600 tracking-widest">
        500
      </h1>
      <div className="bg-green-500 px-2 text-sm rounded rotate-12 absolute">
        {error.message}
      </div>
      <div>
        <button className="mt-5" onClick={() => reset()}>
          <p className="relative inline-block text-sm font-medium text-green-500 group active:text-green-500 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-green-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block px-8 py-3 bg-gray-100 border border-current">
              Try Again
            </span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default error;

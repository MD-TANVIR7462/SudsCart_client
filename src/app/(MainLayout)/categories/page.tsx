import Category from "@/Components/UI/Category";

const page = () => {
  return (
    <div >
      <section
        className="w-full bg-cover bg-center py-32"
        style={{
          backgroundImage: "url('https://i.ibb.co/s53xG6H/Screenshot-18.png')",
        }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-3xl font-medium mb-6">Welcome to Category</h1>
        </div>
      </section>
      <div className="  w-[95%] max-w-[1370px] mx-auto">
        <Category />
      </div>
    </div>
  );
};

export default page;

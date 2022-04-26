import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className=" min-h-screen w-full bg-gray-800">
      <h1 className=" py-10 text-center text-2xl text-gray-200 md:text-4xl xl:text-6xl">
        Daily Ui
      </h1>
      <div className="mx-auto grid max-w-5xl gap-5 px-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        <Link
          to="/rating"
          className="  flex justify-center items-center rounded-lg bg-gray-600 p-5">
          <h1 className=" text-center text-gray-200">Rating Component</h1>
        </Link>
        <Link
          to="/nftPreviewCard"
          className=" flex justify-center items-center  rounded-lg bg-gray-600 p-5">
          <h1 className=" text-center text-gray-200">Nft Preview Card</h1>
        </Link>
        <Link
          to="/tipCalculator"
          className="  flex justify-center items-center rounded-lg bg-gray-600 p-5">
          <h1 className=" text-center text-gray-200">Tip Calculator</h1>
        </Link>
        <Link
          to="ecommerce-product-page"
          className=" flex justify-center items-center  rounded-lg bg-gray-600 p-5">
          <h1 className=" text-center text-gray-200">Ecommerce product page</h1>
        </Link>
      </div>
    </section>
  );
};

export default Home;

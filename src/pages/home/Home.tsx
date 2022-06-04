import { Link } from 'react-router-dom';

const Home = () => {
	const componentJson = [
		{ id: 0, route: '/rating', title: 'Rating Component' },
		{ id: 1, route: '/nftPreviewCard', title: 'NFT Preview Card' },
		{ id: 2, route: '/tipCalculator', title: 'Tip Calculator' },
		{ id: 3, route: '/ecommerce-product-page', title: 'Ecommerce product page' },
	];
	return (
		<section className=' min-h-screen w-full bg-gray-100'>
			<h1 className=' py-10 text-center text-2xl text-gray-800 md:text-4xl xl:text-6xl'>Daily Ui</h1>
			<div className='mx-auto grid max-w-5xl xl:max-w-7xl gap-5 px-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
				{componentJson.map((items) => {
					return (
						<>
							<Link
								to={items.route}
								className=' border-[2px] duration-500 transition-all border-gray-200 hover:border-red-400 flex justify-center items-center rounded bg-gray-600 p-5'
							>
								<h1 className=' text-center text-gray-200'>{items.title}</h1>
							</Link>
						</>
					);
				})}
			</div>
		</section>
	);
};

export default Home;

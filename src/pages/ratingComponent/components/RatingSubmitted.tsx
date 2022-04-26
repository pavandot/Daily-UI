import MobileSVG from "../../../asset/ratingComponent/illustration-thank-you.svg";

const RatingSubmitted = ({ rating }: { rating: number }) => {
	return (
		<section className=' mx-5 min-h-[412px] w-[450px] space-y-8 rounded-3xl bg-gray-800 p-6 sm:mx-0 sm:p-8'>
			<div className=' space-y-6'>
				<img src={MobileSVG} alt='' className=' mx-auto h-[108px]' />
				<div className=' flex justify-center'>
					<h1 className=' rounded-3xl bg-ratingComponent-dark-blue px-4 py-1 text-ratingComponent-orange'>You selected {rating} out of 5</h1>
				</div>
			</div>
			<div className=' space-y-5'>
				<h1 className=' text-center text-2xl font-medium text-ratingComponent-white'>Thank you!</h1>
				<p className=' text-center text-ratingComponent-medium-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime et voluptates dicta odio autem voluptate, delectus reprehenderit.</p>
			</div>
		</section>
	);
};

export default RatingSubmitted;

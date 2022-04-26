import Star from "../../../asset/ratingComponent/icon-star.svg";

interface RatingProps {
	setIsRatingSubmitted: (isRatingSubmitted: boolean) => void;
	setRating: (rating: number) => void;
	rating: number;
}

const Rating = ({ setIsRatingSubmitted, rating, setRating }: RatingProps) => {
	return (
		<div className=' mx-5 min-h-[412px] w-[450px] space-y-7 rounded-3xl bg-gray-800 p-6 sm:mx-0 sm:p-8'>
			{/* Star */}
			<div className=' flex h-12  w-12 items-center justify-center rounded-full bg-gray-600 '>
				<img src={Star} alt='' />
			</div>

			{/* Text */}
			<div>
				<h1 className=' mb-2 text-3xl font-bold text-ratingComponent-white'>How did we do?</h1>
				<p className=' text-ratingComponent-medium-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime error .</p>
			</div>

			{/* Rating */}
			<ul className=' flex items-center justify-between'>
				{[...Array(5)].map((star, i) => {
					const ratingValue = i + 1;
					return (
						<li
							key={i * 0.5}
							className={` flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-gray-600 transition-all duration-300  ${
								rating === ratingValue ? "bg-ratingComponent-orange text-ratingComponent-white" : " text-ratingComponent-white hover:bg-ratingComponent-light-gray "
							}`}
							onClick={() => setRating(ratingValue)}>
							{ratingValue}
						</li>
					);
				})}
			</ul>

			{/* Button */}
			<button
				onClick={() => setIsRatingSubmitted(true)}
				className=' w-full rounded-3xl bg-ratingComponent-orange p-3 text-lg font-medium text-ratingComponent-white transition-colors duration-300 hover:bg-ratingComponent-white hover:text-ratingComponent-orange'>
				Submit
			</button>
		</div>
	);
};

export default Rating;

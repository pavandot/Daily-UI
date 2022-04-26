// Components
import { useState } from "react";
import Rating from "./components/Rating";
import RatingSubmitted from "./components/RatingSubmitted";
const RatingComponent = () => {
	const [isRatingSubmitted, setIsRatingSubmitted] = useState(false);
	const [rating, setRating] = useState(0);

	return (
		<section className=' flex min-h-screen items-center justify-center bg-gray-700 '>
			{isRatingSubmitted && <RatingSubmitted rating={rating} />}
			{!isRatingSubmitted && <Rating setIsRatingSubmitted={setIsRatingSubmitted} rating={rating} setRating={setRating} />}
		</section>
	);
};

export default RatingComponent;

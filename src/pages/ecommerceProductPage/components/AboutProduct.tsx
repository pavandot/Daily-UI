import { useState } from 'react';

// Images
import CartSvg from '../../../asset/ecommerceProductPage/icon-cart-white.svg';
import PluseSvg from '../../../asset/ecommerceProductPage/icon-plus.svg';
import MinusSvg from '../../../asset/ecommerceProductPage/icon-minus.svg';
import ProductOneThumbnail from '../../../asset/ecommerceProductPage/image-product-1-thumbnail.jpg';

export interface CartItemType {
	id: number;
	name: string;
	price: string;
	image: string;
	numberOfItem: number;
	total: number;
}

interface Props {
	setCartProduct: (product: CartItemType[]) => void;
	cartProduct: CartItemType[];
}

const AboutProduct = ({ setCartProduct, cartProduct }: Props) => {
	const [numberOfItem, setNumberOfItem] = useState(1);
	const handelIncrement = () => {
		setNumberOfItem(numberOfItem + 1);
	};
	const handelDecrement = () => {
		if (numberOfItem > 0) {
			setNumberOfItem(numberOfItem - 1);
		}
	};

	const cartItem: CartItemType = {
		id: 1,
		name: 'Fall Limited Edition Sneakers',
		price: '125.00',
		image: ProductOneThumbnail,
		numberOfItem: numberOfItem,
		total: numberOfItem * 125,
	};

	const isProductExist = cartProduct.find((product) => product.id === cartItem.id);

	const handelAddToCart = () => {
		if (numberOfItem > 0 && !isProductExist) {
			setCartProduct([...cartProduct, cartItem]);
			setNumberOfItem(1);
		}
	};
	return (
		<section className=' max-w-2xl mx-auto xl:max-w-none '>
			<div>
				<p className=' text-ecommerceProductPage-orange font-bold mb-5'>SNEAKER COMPANY</p>
				<h1 className=' mb-5 md:mb-10 text-ecommerceProductPage-vary-dark-blue font-bold text-3xl md:text-5xl'>
					Fall Limited Edition Sneakers
				</h1>
				<p className=' text-ecommerceProductPage-dark-grayish-blue mb-8 max-w-xl '>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis architecto doloremque necessitatibus esse ea,
					voluptates praesentium exercitationem nulla, natus eius incidunt. Harum Lorem ipsum dolor sit amet.
				</p>
				<div className=' mb-8 space-y-1 flex justify-between lg:block '>
					<p className=' space-x-5'>
						<span className=' text-ecommerceProductPage-vary-dark-blue font-bold text-2xl'>$125.00</span>
						<span className=' text-2xl text-ecommerceProductPage-orange bg-ecommerceProductPage-pale-orange py-1 px-2 rounded  '>
							50%
						</span>
					</p>
					<p className=' text-ecommerceProductPage-dark-grayish-blue line-through'>$250</p>
				</div>
				<div className=' flex justify-between flex-col sm:flex-row gap-5 items-center'>
					<div className=' flex justify-between items-center bg-ecommerceProductPage-light-grayish-blue py-3 px-3 rounded-lg w-full xs:w-[80%] md:w-[30%]'>
						<img src={MinusSvg} alt='' onClick={handelDecrement} className=' cursor-pointer p-3' />
						<p>{numberOfItem}</p>
						<img src={PluseSvg} alt='' onClick={handelIncrement} className=' cursor-pointer p-3' />
					</div>
					<button
						className={` w-full xs:w-[80%] md:w-1/2 text-white flex justify-center items-center space-x-5 p-3 ${
							numberOfItem === 0 || isProductExist
								? 'bg-ecommerceProductPage-orange cursor-not-allowed'
								: 'bg-ecommerceProductPage-orange '
						} rounded-lg`}
						onClick={handelAddToCart}
					>
						<img src={CartSvg} alt='' className=' fill-white' />
						<span> {isProductExist ? 'Already in cart' : 'Add to cart'} </span>
					</button>
				</div>
			</div>
		</section>
	);
};

export default AboutProduct;

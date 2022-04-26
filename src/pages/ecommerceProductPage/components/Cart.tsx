import { CartItemType } from "./AboutProduct";

// Images
import DeleteSvg from "../../../asset/ecommerceProductPage/icon-delete.svg";

interface Props {
	setCartProduct: (product: CartItemType[]) => void;
	cartProduct: CartItemType[];
}

const Cart = ({ cartProduct, setCartProduct }: Props) => {
	const handelDeleteCartItem = (id: number) => {
		const newCartProduct = cartProduct.filter((product) => product.id !== id);
		console.log(newCartProduct);
		setCartProduct(newCartProduct);
	};
	return (
		<section className='absolute  flex left-0 right-0 justify-center xs:justify-end  top-20 md:top-24'>
			<div className=' bg-white shadow-xl w-[340px] xs:w-96 min-h-56  rounded  border-2'>
				<h1 className=' text-ecommerceProductPage-vary-dark-blue p-4 border-b-2 font-semibold'>Cart</h1>
				{cartProduct.length < 1 && (
					<div className=' p-12'>
						<h1 className=' text-ecommerceProductPage-vary-dark-blue text-center text-lg font-bold'>No Item</h1>
					</div>
				)}
				{cartProduct.map((product) => {
					return (
						<div className='p-5 space-y-10' key={product.id}>
							<div className=' flex justify-center items-center space-x-5 text-ecommerceProductPage-dark-grayish-blue'>
								<img src={product.image} alt='' className=' h-12 rounded w-12' />
								<div>
									<p>{product.name}</p>
									<p>
										${product.price} x {product.numberOfItem} <span className=' text-ecommerceProductPage-vary-dark-blue font-bold'>${product.total}</span>
									</p>
								</div>
								<img src={DeleteSvg} alt='' className=' cursor-pointer' onClick={() => handelDeleteCartItem(product.id)} />
							</div>
							<button className=' bg-ecommerceProductPage-orange rounded-lg text-white p-3 w-full'>Checkout</button>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Cart;

import { CartItemType } from "./AboutProduct";

// Components
import AboutProduct from "./AboutProduct";
import ProductImage from "./ProductImage";

interface Props {
	setCartProduct: (product: CartItemType[]) => void;
	cartProduct: CartItemType[];
}
const Product = ({ setCartProduct, cartProduct }: Props) => {
	return (
		<section className=' max-w-7xl mx-auto px-5 py-5 md:py-10 xl:py-16  md:px-10 2xl:px-0'>
			<section className=' grid lg:grid-cols-2 gap-y-10 lg:gap-y-0 lg:gap-x-10'>
				<ProductImage />
				<AboutProduct cartProduct={cartProduct} setCartProduct={setCartProduct} />
			</section>
		</section>
	);
};

export default Product;

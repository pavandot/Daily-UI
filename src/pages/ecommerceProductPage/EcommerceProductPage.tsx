// Components
import { useState } from "react";
import { CartItemType } from "./components/AboutProduct";

// Components
import Navbar from "./components/Navbar";
import Product from "./components/Product";

const EcommerceProductPage = () => {
	const [cartProduct, setCartProduct] = useState<CartItemType[]>([]);

	return (
		<section className=' min-h-screen bg-ecommerceProductPage-white w-full'>
			<Navbar cartProduct={cartProduct} setCartProduct={setCartProduct} />
			<hr className=' max-w-7xl border-[1px] mx-auto' />
			<Product setCartProduct={setCartProduct} cartProduct={cartProduct} />
		</section>
	);
};

export default EcommerceProductPage;

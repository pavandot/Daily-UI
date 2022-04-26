import { useState } from "react";
import { CartItemType } from "./AboutProduct";

// Images
import Logo from "../../../asset/ecommerceProductPage/logo.svg";
import CartSvg from "../../../asset/ecommerceProductPage/icon-cart.svg";
import Avatar from "../../../asset/ecommerceProductPage/image-avatar.png";
import MenuSvg from "../../../asset/ecommerceProductPage/icon-menu.svg";
import CloseSvg from "../../../asset/ecommerceProductPage/icon-close.svg";

// components
import Cart from "./Cart";

interface Props {
	setCartProduct: (product: CartItemType[]) => void;
	cartProduct: CartItemType[];
}

const Navbar = ({ cartProduct, setCartProduct }: Props) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<section className=' bg-white relative  flex px-5 py-5 md:py-0 md:px-10 2xl:px-0 justify-between items-center max-w-7xl mx-auto'>
			<div className=' flex justify-center items-center space-x-10'>
				<div className=' flex justify-center items-center space-x-3 md:space-x-0'>
					<img src={MenuSvg} alt='' className=' md:hidden' onClick={() => setIsMenuOpen(true)} />
					<img src={Logo} alt='' className=' cursor-pointer' />
				</div>
				<div className=' hidden md:flex text-ecommerceProductPage-dark-grayish-blue justify-center items-center space-x-7'>
					<p className=' hover:text-ecommerceProductPage-vary-dark-blue cursor-pointer border-b-[3px] transition-colors duration-300 border-b-white hover:border-b-ecommerceProductPage-orange pb-8 pt-9'>Collection</p>
					<p className=' hover:text-ecommerceProductPage-vary-dark-blue cursor-pointer border-b-[3px] transition-colors duration-300 border-b-white hover:border-b-ecommerceProductPage-orange pb-8 pt-9'>Men</p>
					<p className=' hover:text-ecommerceProductPage-vary-dark-blue cursor-pointer border-b-[3px] transition-colors duration-300 border-b-white hover:border-b-ecommerceProductPage-orange pb-8 pt-9'>Women</p>
					<p className=' hover:text-ecommerceProductPage-vary-dark-blue cursor-pointer border-b-[3px] transition-colors duration-300 border-b-white hover:border-b-ecommerceProductPage-orange pb-8 pt-9'>About</p>
					<p className=' hover:text-ecommerceProductPage-vary-dark-blue cursor-pointer border-b-[3px] transition-colors duration-300 border-b-white hover:border-b-ecommerceProductPage-orange pb-8 pt-9'>Contact</p>
				</div>
			</div>
			<div className=' flex justify-center items-center space-x-10'>
				<div className=' relative'>
					<p className=' bg-ecommerceProductPage-orange px-2 absolute right-[-7px] top-[-11px] text-center rounded-xl text-[10px] text-white font-bold'>{cartProduct.length}</p>
					<img src={CartSvg} alt='' className=' cursor-pointer' onClick={() => setIsCartOpen(!isCartOpen)} />
				</div>
				<img src={Avatar} alt='' className=' h-10 w-10 md:h-14 md:w-14 border-2 rounded-full border-ecommerceProductPage-orange cursor-pointer' />
			</div>
			{isCartOpen && <Cart cartProduct={cartProduct} setCartProduct={setCartProduct} />}
			{isMenuOpen && (
				<div className='md:hidden z-50 absolute top-0 h-screen left-0 right-0 bg-ecommerceProductPage-black bg-opacity-60'>
					<div className=' w-[70%] xs:w-1/2 p-5 bg-white h-full'>
						<img src={CloseSvg} alt='' className=' mb-10' onClick={() => setIsMenuOpen(false)} />
						<div className=' space-y-5'>
							<p className='text-ecommerceProductPage-vary-dark-blue font-bold'>Collection</p>
							<p className='text-ecommerceProductPage-vary-dark-blue font-bold'>Men</p>
							<p className='text-ecommerceProductPage-vary-dark-blue font-bold'>Women</p>
							<p className='text-ecommerceProductPage-vary-dark-blue font-bold'>About</p>
							<p className='text-ecommerceProductPage-vary-dark-blue font-bold'>Contact</p>
						</div>
					</div>
				</div>
			)}
		</section>
	);
};

export default Navbar;

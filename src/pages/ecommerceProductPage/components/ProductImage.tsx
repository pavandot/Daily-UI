import { useState } from "react";
// Images
import ProductOneImg from "../../../asset/ecommerceProductPage/image-product-1.jpg";
import ProductOneThumbnail from "../../../asset/ecommerceProductPage/image-product-1-thumbnail.jpg";
import ProductTwoImg from "../../../asset/ecommerceProductPage/image-product-2.jpg";
import ProductTwoThumbnail from "../../../asset/ecommerceProductPage/image-product-2-thumbnail.jpg";
import ProductThreeImg from "../../../asset/ecommerceProductPage/image-product-3.jpg";
import ProductThreeThumbnail from "../../../asset/ecommerceProductPage/image-product-3-thumbnail.jpg";
import ProductFourImg from "../../../asset/ecommerceProductPage/image-product-4.jpg";
import ProductFourThumbnail from "../../../asset/ecommerceProductPage/image-product-4-thumbnail.jpg";

const ProductImage = () => {
	const [productImageIndex, setProductImageIndex] = useState(0);
	const productThumbnail = [ProductOneThumbnail, ProductTwoThumbnail, ProductThreeThumbnail, ProductFourThumbnail];
	const productImage = [ProductOneImg, ProductTwoImg, ProductThreeImg, ProductFourImg];
	return (
		<div>
			<div className=' flex space-y-6 flex-col items-center justify-center'>
				<img src={productImage[productImageIndex]} alt='' className=' rounded-2xl xs:h-[350px] xs:w-[350px] xl:h-[450px] xl:w-[450px] bg-gray-400 ' />
				<div className=' flex  items-center w-[95%] xs:w-[350px] xl:w-[450px] justify-between'>
					{productThumbnail.map((product, index) => {
						const isProductActive = index === productImageIndex;
						return (
							<div key={index * 0.65} className={`relative border-2 rounded-lg ${isProductActive && "border-ecommerceProductPage-orange"}  overflow-hidden`}>
								<img src={product} alt='' className={` h-16 w-16 xs:w-20 cursor-pointer xs:h-20 bg-gray-400  `} />
								<div onClick={() => setProductImageIndex(index)} className={` bg-white absolute top-0 w-full left-0 right-0 bottom-0 hover:bg-opacity-50 ${isProductActive ? "bg-opacity-50" : "bg-opacity-0 "}`}></div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default ProductImage;

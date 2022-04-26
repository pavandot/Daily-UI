import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import RatingComponent from "./pages/ratingComponent/RatingComponent";
import NftPreviewCard from "./pages/nftPreviewCard/NftPreviewCard";
import TipCalculator from "./pages/tipCalculator/TipCalculator";
import EcommerceProductPage from "./pages/ecommerceProductPage/EcommerceProductPage";
function App() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/rating' element={<RatingComponent />} />
			<Route path='/nftPreviewCard' element={<NftPreviewCard />} />
			<Route path='/tipCalculator' element={<TipCalculator />} />
			<Route path='/ecommerce-product-page' element={<EcommerceProductPage />} />
		</Routes>
	);
}

export default App;

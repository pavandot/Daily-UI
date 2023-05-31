// Images
import MainImage from '../../asset/nftPreviewCard/image-equilibrium.jpg';
import EthereumSvg from '../../asset/nftPreviewCard/icon-ethereum.svg';
import ClockSvg from '../../asset/nftPreviewCard/icon-clock.svg';
import UserImage from '../../asset/nftPreviewCard/image-avatar.png';
import EyeSvg from '../../asset/nftPreviewCard/icon-view.svg';
const NftPreviewCard = () => {
	return (
		<section className=' flex min-h-screen items-center justify-center bg-gray-700'>
			<div className='  mx-5 w-80 2xl:w-96  rounded-2xl bg-gray-800 p-5 2xl:p-6'>
				<div className=' group relative cursor-pointer overflow-hidden'>
					<img src={MainImage} alt='' className=' h-full w-full rounded-lg' />
					<div className=' absolute top-0 flex h-full  w-full items-center justify-center rounded-lg bg-blue-400 bg-opacity-50 opacity-0 transition-all duration-300 group-hover:opacity-100 '>
						<img src={EyeSvg} alt='' />
					</div>
				</div>
				<div className=' space-y-5 border-b-[1px] border-b-nftPreviewCard-text-gray py-5'>
					<h1 className=' cursor-pointer text-2xl font-bold text-gray-50 transition-colors duration-300 hover:text-nftPreviewCard-ethereum-blue '>
						Equilibrium #3429
					</h1>
					<p className=' text-lg text-nftPreviewCard-text-gray'>Our Equilibrium collection promotes balance and calm. </p>
					<div className=' flex items-center justify-between'>
						<div className=' flex items-center justify-center space-x-2 text-nftPreviewCard-ethereum-blue'>
							<img src={EthereumSvg} alt='' />
							<p className=' text-lg font-semibold'>0.041ETH</p>
						</div>
						<div className=' flex items-center justify-center space-x-2'>
							<img src={ClockSvg} alt='' />
							<p className=' text-lg text-nftPreviewCard-text-gray'>3 days left</p>
						</div>
					</div>
				</div>
				<div className=' flex items-center justify-start space-x-4 py-3 2xl:py-5'>
					<img src={UserImage} alt='' className=' h-10 rounded-full border-2' />
					<p className=' text-lg text-nftPreviewCard-text-gray'>
						Creation of{' '}
						<span className=' cursor-pointer text-gray-50 transition-colors duration-300 hover:text-nftPreviewCard-ethereum-blue'>
							Jules Wyvern
						</span>
					</p>
				</div>
			</div>
		</section>
	);
};

export default NftPreviewCard;

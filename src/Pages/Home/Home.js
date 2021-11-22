import React from 'react';
import Footer from '../Footer/Footer';
import Navigation2 from '../Shared/Navigation/Navigation2';
import Banner from './Banner/Banner';
import MainBanner from './Banner/MainBanner';
import HomeProduct from './HomeProduct/HomeProduct';
import ShowReview from './ShowReview/ShowReview';

const Home = () => {
	return (
		<div>
			<Navigation2 />
			<MainBanner />
			<HomeProduct />
			<Banner />
			<ShowReview />
			<Footer />
		</div>
	);
};

export default Home;

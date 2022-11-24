import React from 'react';
import Header from '../header/Header';
import Fsection from '../fsection/Fsection';
import Footer from '../footer/Footer';
import './Home.css';

const Home = () => {

	return(
			<div className="home">
				<Header />
				<Fsection />
        <Footer/>
			</div>
	);

}


export default Home;

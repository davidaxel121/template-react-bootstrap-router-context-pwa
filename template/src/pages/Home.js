import React from 'react';

import MyNavbar from '../components/Navbar';
import './styles/Home.css';

const Home = () => {
	return (
		<div className="container-fluid home-container">

			<div className="row">
				<div className="col-12">
					<MyNavbar />
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center home-hero">
				<div className="col-12 col-md-6 text-center">
					<h1 className="home-title">Home page</h1>
				</div>
			</div>
		</div>
	)
}

export default Home;
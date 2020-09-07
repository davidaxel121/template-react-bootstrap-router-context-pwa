import React, {useContext} from 'react';
import { Context } from "../store/GlobalContext";

import MyNavbar from '../components/Navbar';

import './styles/Home.css';

const Home = () => {

	const { globalState } = useContext(Context);

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
					<h3>Global state: {globalState.greeting}</h3>
				</div>
			</div>
		</div>
	)
}

export default Home;
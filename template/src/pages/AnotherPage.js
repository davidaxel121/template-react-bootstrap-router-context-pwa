import React, { useContext } from 'react';
import MyNavbar from '../components/Navbar';
import { Context } from "../store/GlobalContext";

import './styles/AnotherPage.css';

const AnotherPage = () => {


	const { globalState } = useContext(Context);

	return (
		<div className="container-fluid another-page-container">
			<div className="row">
				<div className="col-12">
					<MyNavbar />
				</div>
			</div>

			<div className="row d-flex align-items-center justify-content-center another-page-hero">
				<div className="col-12 col-md-6 text-center">
					<h1 className="another-page-title">Another page</h1>
					<h3>Global state: {globalState.greeting}</h3>
				</div>
			</div>

		</div>
	)
}

export default AnotherPage;
// import React, { useState, useMemo } from "react";
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AnotherPage from './pages/AnotherPage';

import './App.css';

// import { Context } from "./store/GlobalContext";

/**
 * Default App with Global Context and Router
 *
 * @version 1.0.0
 * @author [DA]
 */

function App() {

	// const [globalState, setGlobalState] = useState({
	// 	userProfile: null, 
	// 	userSession: false
	// });

	// const value = useMemo(() => ({ globalState, setGlobalState }), [globalState, setGlobalState]);

	return (
		<BrowserRouter>
			<Switch>
				{/* <Context.Provider value={value}> */}
				<Route exact path="/" component={Home} />
				<Route exact path="/anotherpage" component={AnotherPage} />
				{/* </Context.Provider> */}
			</Switch>
		</BrowserRouter>
	);
}

export default App;
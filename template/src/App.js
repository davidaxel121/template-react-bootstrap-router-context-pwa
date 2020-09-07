import React, { useState, useMemo } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import AnotherPage from './pages/AnotherPage';

import './App.css';

import { Context } from "./store/GlobalContext";

function App() {

	const [globalState, setGlobalState] = useState({
		greeting: "Hello again"
	});

	const value = useMemo(() => ({ globalState, setGlobalState }), [globalState, setGlobalState]);

	return (
		<BrowserRouter>
			<Switch>
				<Context.Provider value={value}>
					<Route exact path="/" component={Home} />
					<Route exact path="/anotherpage" component={AnotherPage} />
				</Context.Provider>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
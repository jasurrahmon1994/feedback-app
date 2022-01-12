import React from "react";
import "./main.scss";
import Header from "./components/Header";
import List from "./components/List";
import Stats from "./components/Stats";
import Form from "./components/Form";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutLink from "./components/AboutLink";
import { Provider } from "./components/Context";

function App() {	

	return (
		<Provider>
			<Router>
				<Header text="Izohlar ro'yxati" />
				<div className="container">
					<Routes>
						<Route
							exact
							path="/"
							element={
								<>
									<Form />
									<Stats />
									<List />
								</>
							}
						></Route>
						<Route exact path="/about" element={<About />} />
					</Routes>
					<AboutLink />
				</div>
			</Router>
		</Provider>
	);
}

export default App;

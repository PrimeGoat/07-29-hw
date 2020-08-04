import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function App() {
	return (
		<div style={{
			display: "flex",
			flexDirection: "column",
			width: "100vw",
			height: "100vh"
	}}>
			<div>
				<Header />
				<div style={{
					display: "flex",
					flexDirection: "row",
					width: "100vw"
				}}>
					<Sidebar />
					<Body />
				</div>
				<Footer />
			</div>
		</div>
	);
}

export default App;

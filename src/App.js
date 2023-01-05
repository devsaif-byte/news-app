import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import News from "./components/News";
import AuthProvider from "./contexts/AuthProvider";

function App() {
	const [progress, setProgress] = useState(0);

	return (
		<AuthProvider>
			<Fragment>
				<Router>
					<Navbar />
					<LoadingBar
						color="#FF2400"
						height={3}
						progress={progress}
						onLoaderFinished={() => setProgress(0)}
					/>
					<Routes>
						<Route
							path="/"
							element={
								<News
									setProgress={setProgress}
									key={"general"}
									category={"general"}
								/>
							}
						/>
						<Route
							path="business"
							element={
								<News
									setProgress={setProgress}
									key={"business"}
									category={"business"}
								/>
							}
						/>

						<Route
							path="entertainment"
							element={
								<News
									setProgress={setProgress}
									key={"entertainment"}
									category={"entertainment"}
								/>
							}
						/>
						<Route
							path="general"
							element={
								<News
									setProgress={setProgress}
									key="general"
									category={"general"}
								/>
							}
						/>
						<Route
							path="health"
							element={
								<News
									setProgress={setProgress}
									key="health"
									category={"health"}
								/>
							}
						/>
						<Route
							path="science"
							element={
								<News
									setProgress={setProgress}
									key="science"
									category={"science"}
								/>
							}
						/>
						<Route
							path="sports"
							element={
								<News
									setProgress={setProgress}
									key="sports"
									category={"sports"}
								/>
							}
						/>
						<Route
							path="technology"
							element={
								<News
									setProgress={setProgress}
									key="technology"
									category={"technology"}
								/>
							}
						/>
					</Routes>
				</Router>
				<Footer></Footer>
			</Fragment>
		</AuthProvider>
	);
}

export default App;

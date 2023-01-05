import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
// import initAuthentication from "../firebase/firebase.init";
// Firebase Auth Initialize
// import {
// 	getAuth,
// 	GoogleAuthProvider,
// 	signInWithPopup,
// 	signOut,
// } from "firebase/auth";

import useAuth from "../hooks/useAuth";

function Navbar() {
	const { user, signInGoogle, logOut } = useAuth();
	// console.log(user, signInGoogle, logOut);
	// const [userName, setUserName] = useState({});
	// console.log(userName);
	// // initAuthenticatin();
	// // Google provider
	// const provider = new GoogleAuthProvider();
	// const GoogleAuth = getAuth(initAuthentication());
	// const clickToGoogleSignIn = () => {
	// 	console.log("cliked");
	// 	signInWithPopup(GoogleAuth, provider)
	// 		.then((result) => {
	// 			// This gives you a Google Access Token. You can use it to access the Google API.
	// 			// const credential = GoogleAuthProvider.credentialFromResult(result);
	// 			// const token = credential.accessToken;
	// 			// The signed-in user info.
	// 			const { photoURL, displayName, email } = result.user;
	// 			const userObject = {
	// 				photoURL: photoURL,
	// 				displayName: displayName,
	// 				email: email,
	// 			};
	// 			// ...
	// 			setUserName(userObject);
	// 		})
	// 		.catch((error) => {
	// 			// Handle Errors here.
	// 			const errorCode = error.code;
	// 			const errorMessage = error.message;
	// 			// The email of the user's account used.
	// 			// const email = error.customData.email;
	// 			// The AuthCredential type that was used.
	// 			// const credential = GoogleAuthProvider.credentialFromError(error);
	// 			// ...
	// 		});
	// };
	// const googleSignOut = () => {
	// 	console.log("clicked");
	// 	const auth = getAuth();

	// 	signOut(auth)
	// 		.then((el) => {
	// 			// Sign-out successful.
	// 			setUserName({});
	// 		})
	// 		.catch((error) => {
	// 			// An error happened.
	// 			console.log(error);
	// 		});
	// };
	return (
		<Fragment>
			<div className="container is-fullhd">
				<nav
					className="navbar is-light has-shadow is-fixed-top px-2"
					role="navigation"
					aria-label="main navigation"
				>
					<div className="navbar-brand">
						<NavLink
							className="navbar-item has-text-grey-dark is-uppercase has-text-weight-bold is-size-3"
							to="/"
						>
							News Info
						</NavLink>

						<NavLink
							to="/"
							role="button"
							className="navbar-burger"
							aria-label="menu"
							aria-expanded="false"
							data-target="navbarBasicExample"
						>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</NavLink>
					</div>

					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start mx-auto">
							<NavLink className="navbar-item" to="/home" key="home">
								{"Home"}
							</NavLink>

							<NavLink
								className="navbar-item"
								to="/entertainment"
								key="entertainment"
							>
								{"Entertainment"}
							</NavLink>
							<NavLink className="navbar-item" to="/business" key="business">
								{"Business"}
							</NavLink>
							<NavLink className="navbar-item" to="/general" key="general">
								{"General"}
							</NavLink>
							<NavLink className="navbar-item" to="/health" key="health">
								{"Health"}
							</NavLink>
							<NavLink className="navbar-item" to="/science" key="science">
								{"Science"}
							</NavLink>
							<NavLink className="navbar-item" to="/sports" key="sports">
								{"Sports"}
							</NavLink>
							<NavLink
								className="navbar-item"
								to="/technology"
								key="technology"
							>
								{"Technology"}
							</NavLink>
						</div>

						<div className="navbar-end">
							<div className="navbar-item">
								{user.email && (
									<div>
										<p className="tag is-success is-light mr-3">
											<strong>Welcome, {user.displayName}</strong>
										</p>
									</div>
								)}

								<div className="buttons">
									{!user.displayName ? (
										<div>
											<button className="button is-white">
												<strong>Sign up</strong>
											</button>
											<button onClick={signInGoogle} className="button is-dark">
												<strong>Log in</strong>
											</button>
										</div>
									) : (
										<button
											onClick={logOut}
											className="button is-danger is-light"
										>
											Sign out
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</Fragment>
	);
}

export default Navbar;

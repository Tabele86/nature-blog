import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
	return (
		<header className="bg-green-900 ">
			<div className="container mx-auto flex-wrap justify-between  ">
				<nav className="flex justify-between ">
					<div className="display inline-flex ">
						<NavLink
							to="/"
							exact
							activeClassName="text-green-500"
							className="inline-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-green-800 text-4xl font-bold serif tracking-widest"
						>
							Home
						</NavLink>
						<NavLink
							to="/post"
							activeClassName=" text-green-100 bg-green-500"
							className="serif inline-flex items-center py-3 px-3 my-6 rounded text-green-100 hover:text-green-800 "
						>
							Blog Posts
						</NavLink>

						<NavLink
							to="/about"
							activeClassName=" text-green-100 bg-green-500"
							className="serif  inline-flex items-center py-3 px-3 my-6 rounded text-green-100 hover:text-green-800 "
						>
							About
						</NavLink>
					</div>
					{/* <div className="container h-100px flex justify-end mr-0 my-5">
						<img src={pine} alt="" className="h-14" />
					</div> */}
				</nav>
			</div>
		</header>
	);
}

export default NavBar;

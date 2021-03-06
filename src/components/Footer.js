import React from 'react';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export default function Footer() {
	const build = document.lastModified;

	return (
		<footer className="bg-brown flex flex-col align-center text-center my-8 mx-auto w-100 h-auto pb-16 text-white">
			<div id="to-top" className="hidden md:block">
				<a href="#top" className="cursor-pointer hover:underline">
					<KeyboardArrowUpIcon />
					<br />Back To Top
				</a>
			</div>
			<div className="mt-16 flex flex-col justify-between">
				<p className="text-sm mt-8 mb-4 leading-loose">Thank you for visiting my blog!</p>
				<a
					href="mailto:naturelover@example.com"
					className="cursor-pointer mb-4 font-bold hover:underline hover:text-pink"
				>
					Contact Me
				</a>
				<small>Last build: {build}</small>
			</div>
		</footer>
	);
}

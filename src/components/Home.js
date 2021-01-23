import React from 'react';
import image from '../img/g-w-childs-park.jpg';

function Home() {
	return (
		<main>
			<img src={image} alt="" className="absolute object-cover w-full h-full" />
			<section className="relative flex-col justify-center mx-5 min-h-screen pt-10 lg:pt-64 px-8 ">
				<h1 className="flex-auto my-8 mx-3  text-green-100 font-bold cursive leading-none text-center text-6xl lg:leading-snug text-9xl   ">
					Nature Blog
				</h1>
				<div>
					<p className=" rounded bg-green-900 static-flex text-center text-green-100 font-bold my-3 cursive text-2xl  sm:text-m   ">
						In nature you don't get lost, you find yourself.
					</p>
				</div>
			</section>
		</main>
	);
}

export default Home;

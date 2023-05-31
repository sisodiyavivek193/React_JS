import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminMenu = () => {

	const [add, setadd] = useState(false)


	const btnclick = () => {
		setadd(!add)
		console.log("callad");
	}
	return (
		<>
			<aside id="sidebar" className={add ? "show" : ""} >
				<div class="list" >
					<ul>
						<li><a href="#">home</a></li>
						<li><a href="#">about</a></li>
						<li><a href="#">buy</a></li>
						<li><a href="#">contact</a></li>
					</ul>
				</div>
			</aside>
			<main id="main" className={add ? "mainactive" : ""}>
				<button class="bar" onClick={btnclick}>
					<i className={add ? "fa fa-times" : "fa fa-bars"}></i>
				</button>
				<Outlet></Outlet>
			</main>




		</>
	);
};

export default AdminMenu;






// const btn = document.querySelector(".bar");
// const navbar = document.getElementById("sidebar")
// const main = document.getElementById('main');


// btn.addEventListener("click", () => {
// 	// console.log("hello");
// 	navbar.classList.toggle("show");
// 	main.classList.toggle("mainactive")

// });


// let chokdi = document.querySelector(".bar");
// let way = document.querySelector(".fa-times");
// chokdi.onclick = function () {
// 	if (way.classList.contains("fa-times")) {
// 		way.classList.replace("fa-times", "fa-bars");
// 	} else {
// 		way.classList.replace("fa-bars", "fa-times");
// 	}
// }
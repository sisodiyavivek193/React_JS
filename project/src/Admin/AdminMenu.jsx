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
				<div className="list" >
					<h2 className='text-center text-danger'>Dashbord</h2>
					<ul>
						<li ><Link to="admindashbord">Dashbord</Link></li>
						<li><Link to="alluserdata">All User Data</Link></li>
					</ul>
				</div>
			</aside>
			<main id="main" className={add ? "mainactive" : ""}>
				<header>
					<nav>
						<button className="bar" onClick={btnclick}>
							<i className={add ? "fa fa-times" : "fa fa-bars"}></i>
						</button>
						<div className="box">

							<a href="#"><i className='fa-solid fa-user'></i></a>
						</div>
					</nav>
				</header>
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
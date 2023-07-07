import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';
import CustomHook from '../Hooks/customHook';

const AdminMenu = () => {

	const [add, setadd] = useState(false);
	const navigate = useNavigate();
	const [cookies, setCookie, removeCookie] = useCookies(["username", "id"]);
	// const { handleChange, inp, errors } = CustomHook({ name: "", id: "" }, {});


	const btnclick = () => {
		setadd(!add)
		console.log("callad");
	}
	console.log(removeCookie, "cookies");
	const handleLogout = () => {
		localStorage.removeItem("username")
		localStorage.removeItem("id")
		// console.log(removeCookie('username'));
		// console.log(removeCookie('id'));
		// console.log("id", removeCookie("id"), "Remove Name");

		// removeCookie('username', {});
		// removeCookie("id", {}); // Remove id cookie
		navigate("/loginpage")

		// const store = axios.get(`http://localhost:5000/user?name=${inp.name}&id=${inp.id}`)
		// 	.then((res) => {
		// 				})
		// removeCookie('username', { path: '/' });
		// removeCookie("username"); // Remove username cookie
		// removeCookie("id"); // Remove id cookie
	};
	return (
		<>
			<aside id="sidebar" className={add ? "show" : ""} >
				<div className="list" >
					<h2 className='text-center text-danger'>Dashbord</h2>
					<ul>
						<li ><Link to="admindashbord">Dashbord</Link></li>
						<li><Link to="alluserdata">All User Data</Link></li>
					</ul>
					{cookies.username && <button onClick={handleLogout} className='btn btn-primary '>Logout</button>}
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
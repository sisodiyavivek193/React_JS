import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const AllUserData = () => {

	const [Loginmes, setLoginmes] = useState("");
	const [disperror, setdisperror] = useState("");
	const [lodar, setlodar] = useState(false);

	const [allUser, setAllUser] = useState(null);
	const [search, setSearch] = useState(null);


	const [APIData, setAPIData] = useState([]);
	const [Delete, setData] = useState(false);

	const navigate = useNavigate();



	useEffect(() => {
		loginData();
	}, [Delete]);



	const loginData = async (event) => {
		// console.log("inside the signupdata", inp);

		// console.log("name", inp.name);
		// console.log("passwword", inp.password);
		// console.log("called");
		try {
			const store = await axios.get('http://localhost:5000/user')
				.then((res) => {
					// console.log(inp.name);
					// console.log("than inside response", res);
					setSearch(res.data);
					if (res.status === 200) {
						// console.log("server connect", response);
						// console.log("server connect", response.data[0].role);
						// console.log("inside if");
						// console.log(res.data[0].name);
						// setCookie('name', res.data[0].name);
						// console.log("nandan");
						// console.log(inp.name);

						let alluserdatalist = ""

						alluserdatalist = Object.entries(res.data).map(([key, value], i) => {
							// console.log(key, "key");
							// console.log(value, "value");
							// console.log(i, "i");
							return (
								<tr key={i}>
									<td>{value.id}</td>
									<td>{value.name}</td>
									<td>{value.email}</td>
									<td>{value.password}</td>
									<td className='text-center' >
										<Link className='btn btn-primary' to={`/admin/edituserdata/${value.id}`}>Edit</Link>
									</td >
									<td className='text-center'>
										<Link className='btn btn-danger' onClick={() => deletebtn(value.id)} >Delete</Link>
									</td >
								</tr>
							);
						});
						setAllUser(alluserdatalist)
						setlodar(true)


					} else {
						console.log(" error server  connect");
					}

				}).catch((error) => {
					// console.log("vvvv", error);
					setdisperror(true);
					if (error.response) {
						console.log(error.response);
						console.log("server responded");
					} else if (error.request) {
						console.log("network error");
					} else {
						console.log(error);
					}
				})
		}
		catch (error) {
			console.log(error);
		}
	}


	// const deletebtn = async (id) => {

	// 	const response = await axios.delete(`http://localhost:5000/user/${id}`);

	// }


	const getData = () => {
		axios.get(`http://localhost:5000/user`)
			.then((getData) => {
				setAPIData(getData.data);
			})
	}

	const deletebtn = async (id) => {

		const response = await axios.delete(`http://localhost:5000/user/${id}`)
			.then((res) => {
				// setlodar(false);
				setData();
			})
		// navigate("/admin/alluserdata"); // Navigate to the specified path
	}



	const changeData = (event) => {
		// console.log("allUsers ", SearchData);	
		console.log("handleSearch ", event.target.value);
		const value = event.target.value.toLowerCase();
		console.log(value);

		const result = search.filter((data) => {
			console.log("val", data);
			return (
				data.name.toLowerCase().search(value) !== -1 ||
				data.email.toLowerCase().search(value) !== -1 ||
				data.id.toString().search(value) !== -1
			);
		});



		let alluserdatalist = Object.entries(result).map(([key, value], i) => {
			// console.log(key, "key");
			// console.log(value, "value");
			// console.log(i, "i");
			return (
				<tr key={i}>
					<td>{value.id}</td>
					<td>{value.name}</td>
					<td>{value.email}</td>
					<td>{value.password}</td>
					<td className='text-center' >
						<Link className='btn btn-primary' to={`/admin/edituserdata/${value.id}`}>Edit</Link>
					</td >
					<td className='text-center'>
						<Link className='btn btn-danger' onClick={() => deletebtn(value.id)} >Delete</Link>
					</td >
				</tr>
			);
		});
		setAllUser(alluserdatalist)
		setlodar(true)

	};

	return (
		<>
			<div className="box">
				<input type="text" onChange={(event) => changeData(event)} />
			</div>
			<section>
				<h2 className='text-center m-3 fs-1'>User Data</h2>
				<div className="row">
					<div className="col_12">
						<Link to="/admin/addtuserdata" className='btn btn-primary m-3 text-end '>Add User</Link>
					</div>

					<table className='table table-bordered border-dark table-striped table-success  border-primary'>
						<thead>
							<tr className='table-dark'>
								<th>Id</th>
								<th>Name</th>
								<th>Email</th>
								<th>Password</th>
								<th className='text-center' colSpan={2}>Action</th>
							</tr>
						</thead>
						<tbody>


							{/* {lodar ?
							allUser :
							<tr>
								<td colSpan={5}>No Data Found</td>
							</tr>
						} */}

							{lodar ? (
								allUser.length > 0 ? (
									allUser
								) : (
									<tr>
										<td colSpan={5}>No Data Found</td>
									</tr>
								)
							) : (
								<tr>
									<td colSpan={5}>Loading...</td>
								</tr>
							)}
						</tbody>
					</table>
				</div>

			</section>
		</>
	);
};

export default AllUserData;
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import AdminDashbord from './AdminDashbord';
import AllUserData from './AllUserData';
import EditUserData from './EditUserData.jsx';
import AddUserData from './AddUserData.jsx';
import { useCookies } from 'react-cookie';


const AdminRouter = () => {
	const [cookies] = useCookies(["name", "id"]);
	const navigate = useNavigate();


	useEffect(() => {
		if (!cookies.id && !cookies.username) {
			navigate("/loginpage")
		}

	}, [cookies, navigate]);


	return (
		<>
			<Routes>
				<Route path='/' element={<AdminMenu />} >
					<Route path='admindashbord' element={<AdminDashbord />} />
					<Route path='alluserdata' element={<AllUserData />} />
					<Route path='edituserdata/:id' element={<EditUserData />} />
					<Route path='addtuserdata' element={<AddUserData />} />
				</Route >
			</Routes>
		</>
	);
};

export default AdminRouter;
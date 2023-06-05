import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import AdminDashbord from './AdminDashbord';
import AllUserData from './AllUserData';
import EditUserData from './EditUserData.jsx';

const AdminRouter = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<AdminMenu />} >
					<Route path='admindashbord' element={<AdminDashbord />} />
					<Route path='alluserdata' element={<AllUserData />} />
					<Route path='edituserdata/:id' element={<EditUserData />} />
				</Route >
			</Routes>
		</>
	);
};

export default AdminRouter;
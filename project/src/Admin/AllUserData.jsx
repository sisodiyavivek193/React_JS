import React from 'react';

const AllUserData = () => {
	return (
		<>
			<section>
				<h2 className='text-center m-3 fs-1'>User Data</h2>
				<table className='table'>
					<thead>
						<tr className='table-dark'>
							<th>No</th>
							<th>Name</th>
							<th>Email</th>
							<th>Id</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr className='table-warning'>
							<td>1</td>
							<td>test</td>
							<td>test@gmail.com</td>
							<td>1</td>
							<td><button>edit</button></td>
						</tr>
					</tbody>
				</table>
			</section>
		</>
	);
};

export default AllUserData;
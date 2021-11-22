import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';

const MyOrder = () => {
	const { user } = useAuth();

	const [orders, setOrders] = useState([]);

	// useEffect(() => {
	// 	const url = `http://localhost:5000/order?email=${user.email}`;
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((data) => setOrders(data));
	// }, []);
	useEffect(() => {
		const url = `https://floating-cliffs-55583.herokuapp.com/order`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setOrders(data));
	}, [orders]);

	const userOrder = orders.filter((order) => order.email === user.email);

	const handleDelete = (id) => {
		const proceed = window.confirm('Are you sure,you want to delete?');
		if (proceed) {
			const url = `https://floating-cliffs-55583.herokuapp.com/order/${id}`;
			fetch(url, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					if (data.deletedCount > 0) {
						alert('Deleted');
						const remaining = orders.filter((order) => order.id !== id);
						setOrders(remaining);
					}
				});
		}
	};
	return (
		<Box>
			<Typography
				sx={{ textAlign: 'center' }}
				variant="h5"
				gutterBottom
				component="div"
			>
				My-order: {userOrder.length}
			</Typography>

			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 550 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Name</TableCell>
							<TableCell align="right">Email</TableCell>
							<TableCell align="right">Address</TableCell>
							<TableCell align="right">Model-Number</TableCell>
							<TableCell align="right">Price</TableCell>
							<TableCell align="right">Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{userOrder.map((row) => (
							<TableRow
								key={row.name}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="right">{row.email}</TableCell>
								<TableCell align="right">{row.address}</TableCell>
								<TableCell align="right">{row.modelNumber}</TableCell>
								<TableCell align="right">{row.price}</TableCell>
								<TableCell align="right">
									<Button
										onClick={() => handleDelete(row?._id)}
										variant="outlined"
										color="error"
									>
										Delete
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default MyOrder;

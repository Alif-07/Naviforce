import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';

const MakeAdmin = () => {
	const [email, setEmail] = useState('');
	const [success, setSuccess] = useState(false);
	const handleOnBlur = (e) => {
		setEmail(e.target.value);
	};
	const handleAdminSubmit = (e) => {
		e.preventDefault();
		const user = { email };
		console.log(user, 'ok');
		fetch('https://floating-cliffs-55583.herokuapp.com/users/admin', {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.modifiedCount) {
					console.log(data);
					// setEmail('');
				}
			});
	};

	return (
		<div>
			<Typography variant="h4" gutterBottom component="div">
				MakeAdmin
			</Typography>
			<form onSubmit={handleAdminSubmit}>
				<TextField
					id="standard-basic"
					label="Email"
					type="email"
					onBlur={handleOnBlur}
					variant="standard"
				/>
				<Button type="submit" variant="contained">
					Make Admin
				</Button>
			</form>
			{success && <Alert severity="success">Made Admin successfully</Alert>}
		</div>
	);
};

export default MakeAdmin;

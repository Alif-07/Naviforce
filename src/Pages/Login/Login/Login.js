import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../watch/login.png';

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { loginUser, isLoading } = useAuth();
	const location = useLocation();
	const history = useHistory();

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;

		setLoginData(newLoginData);
	};
	const handleLogin = (e) => {
		loginUser(loginData.email, loginData.password, location, history);
		e.preventDefault();
	};
	return (
		<Container>
			<Grid container spacing={2}>
				<Grid
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						textAlign: 'center',
					}}
					item
					xs={12}
					md={6}
				>
					<Typography variant="body1" gutterBottom>
						Login
					</Typography>
					<form onSubmit={handleLogin}>
						<TextField
							sx={{ width: '75%', m: 1 }}
							id="standard-basic"
							name="email"
							onChange={handleOnChange}
							label="Your Email"
							variant="standard"
						/>
						<TextField
							sx={{ width: '75%', m: 1 }}
							id="standard-basic"
							label="Your Password"
							type="password"
							name="password"
							onChange={handleOnChange}
							variant="standard"
						/>
						<Button
							type="submit"
							sx={{ mt: 2, width: '75%' }}
							variant="contained"
						>
							Login
						</Button>
					</form>

					<Link style={{ textDecoration: 'none' }} to="/register">
						<Button
							type="submit"
							sx={{ mt: 2, width: '100%' }}
							variant="contained"
						>
							New User? Register
						</Button>
					</Link>
					<br />
				</Grid>
				<Grid item xs={12} md={6}>
					<img src={login} style={{ width: '100%' }} alt="" />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Login;

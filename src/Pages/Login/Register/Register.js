import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import login from '../../../watch/login.png';

const Register = () => {
	const [loginData, setLoginData] = useState({});
	const { registerUser } = useAuth();
	const history = useHistory();

	const handleOnBlur = (e) => {
		const field = e.target.name;
		const value = e.target.value;
		const newLoginData = { ...loginData };
		newLoginData[field] = value;

		setLoginData(newLoginData);
	};
	const handleRegister = (e) => {
		e.preventDefault();
		if (loginData.password !== loginData.password2) {
			alert('Wrong password or did not match');
			return;
		}
		registerUser(loginData.name, loginData.email, loginData.password, history);
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
						Register
					</Typography>
					{
						<form onSubmit={handleRegister}>
							<TextField
								sx={{ width: '75%', m: 1 }}
								id="standard-basic"
								name="name"
								onBlur={handleOnBlur}
								type="text"
								label="Your name"
								variant="standard"
							/>
							<TextField
								sx={{ width: '75%', m: 1 }}
								id="standard-basic"
								name="email"
								onBlur={handleOnBlur}
								type="email"
								label="Your Email"
								variant="standard"
							/>
							<TextField
								sx={{ width: '75%', m: 1 }}
								id="standard-basic"
								label="Your Password"
								type="password"
								name="password"
								onBlur={handleOnBlur}
								variant="standard"
							/>
							<TextField
								sx={{ width: '75%', m: 1 }}
								id="standard-basic"
								label="Re-type Your Password"
								type="password"
								name="password2"
								onBlur={handleOnBlur}
								variant="standard"
							/>
							<Button
								type="submit"
								sx={{ mt: 2, width: '75%' }}
								variant="contained"
							>
								Register
							</Button>
						</form>
					}

					<Link style={{ textDecoration: 'none' }} to="/login">
						<Button
							type="submit"
							sx={{ mt: 2, width: '85%' }}
							variant="contained"
						>
							Already Registered? Login
						</Button>
					</Link>
				</Grid>
				<Grid item xs={12} md={6}>
					<img src={login} style={{ width: '100%' }} alt="" />
				</Grid>
			</Grid>
		</Container>
	);
};

export default Register;

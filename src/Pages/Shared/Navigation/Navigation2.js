import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Navigation2 = () => {
	const { user, logOut } = useAuth();
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						<Link style={{ textDecoration: 'none', color: 'white' }} to="/">
							NAVIFORCE
						</Link>
					</Typography>
					<Link
						style={{ textDecoration: 'none', color: 'white' }}
						to="/explore"
					>
						<Button color="inherit">Explore</Button>
					</Link>
					{!user.email ? (
						<NavLink
							style={{ textDecoration: 'none', color: 'white' }}
							to="/login"
						>
							<Button color="inherit">Login</Button>
						</NavLink>
					) : (
						<Box sx={{ display: 'flex' }}>
							<NavLink
								style={{ textDecoration: 'none', color: 'white' }}
								to="/dashboard"
							>
								<Button color="inherit">Dashboard</Button>
							</NavLink>
							<Button
								style={{ textDecoration: 'none', color: 'white' }}
								onClick={logOut}
								color="inherit"
							>
								Logout
							</Button>
							<Typography variant="overline" display="block" gutterBottom>
								{user.displayName}
							</Typography>
						</Box>
					)}
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navigation2;

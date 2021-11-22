import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../Hooks/useAuth';

const Navigation = () => {
	const [state, setState] = React.useState(false);
	const { user, logOut } = useAuth();
	console.log(user);

	const theme = useTheme();
	const useStyle = makeStyles({
		navItem: {
			color: '#fff',
			textDecoration: 'none',
		},
		navIcon: {
			[theme.breakpoints.up('md')]: {
				display: 'none',
			},
		},
		navItemContainer: {
			[theme.breakpoints.down('md')]: {
				display: 'none',
			},
		},
		navLogo: {
			[theme.breakpoints.down('md')]: {
				textAlign: 'right',
			},
		},
		navMobileIcon: {
			[theme.breakpoints.down('md')]: {
				textDecoration: 'none',
				color: '#000000',
			},
		},
	});
	const { navItem, navIcon, navItemContainer, navLogo, navMobileIcon } =
		useStyle();
	const list = (
		<Box sx={{ width: 250 }} role="presentation">
			<List>
				<ListItem button>
					<ListItemText>
						<Link className={navMobileIcon} to="/explore">
							Explore
						</Link>
					</ListItemText>
				</ListItem>
				<ListItem button>
					<ListItemText>
						<Link className={navMobileIcon} to="/dashboard">
							Dashboard
						</Link>
					</ListItemText>
				</ListItem>
				{!user.email ? (
					<NavLink
						style={{ textDecoration: 'none', color: 'white' }}
						to="/login"
					>
						<Button color="inherit">Login</Button>
					</NavLink>
				) : (
					<Box>
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
					</Box>
				)}
			</List>
		</Box>
	);

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							className={navIcon}
							onClick={() => setState(true)}
						>
							<MenuIcon />
						</IconButton>
						<Typography
							className={navLogo}
							variant="h6"
							component="div"
							sx={{ flexGrow: 1 }}
						>
							NAVIFORCE
						</Typography>
						<Box className={navItemContainer}>
							<Link to="/explore" className={navItem}>
								<Button color="inherit">Explore</Button>
							</Link>
							<Link className={navItem}>
								<Button color="inherit">Dashboard</Button>
							</Link>
							<Link to="/login" className={navItem}>
								<Button color="inherit">Login</Button>
							</Link>
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
			<div>
				<React.Fragment>
					<Drawer open={state} onClose={() => setState(false)}>
						{list}
					</Drawer>
				</React.Fragment>
			</div>
		</>
	);
};

export default Navigation;

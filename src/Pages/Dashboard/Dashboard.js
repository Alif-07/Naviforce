import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Button } from '@mui/material';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageAllOrders from './ManageAllOrders/ManageAllOrders';
import AddProducts from './AddProducts/AddProducts';
import ManageProducts from './ManageProducts/ManageProducts';
import useAuth from '../../Hooks/useAuth';
import AdminRoute from '../../PrivateRoute/AdminRoute/AdminRoute';
import Pay from '../Dashboard/User/Pay/Pay';
import Review from '../Dashboard/User/Review/Review';
import MyOrder from '../Dashboard/User/MyOrder/MyOrder';

const drawerWidth = 240;

function Dashboard(props) {
	const { user, logOut } = useAuth();
	// console.log(user);
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);
	let { path, url } = useRouteMatch();
	const [users, setUsers] = React.useState([]);

	React.useEffect(() => {
		fetch('https://floating-cliffs-55583.herokuapp.com/users')
			.then((res) => res.json())
			.then((data) => setUsers(data));
	}, []);
	// console.log(users);
	const findUser = users.find((u) => u.email == user.email);
	// console.log(findUser);
	const admin = findUser?.role;

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Toolbar />
			<Divider />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Link
					style={{ textDecoration: 'none', color: '#000000' }}
					to="/explore"
				>
					<Button color="inherit">Explore</Button>
				</Link>
				<Link style={{ textDecoration: 'none', color: '#000000' }} to={`{url}`}>
					<Button color="inherit">Dashboard</Button>
				</Link>
				{admin ? (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Link
							style={{ textDecoration: 'none', color: '#000000' }}
							to={`${url}/makeAdmin`}
						>
							<Button color="inherit">Make Admin</Button>
						</Link>
						<Link
							style={{ textDecoration: 'none', color: '#000000' }}
							to={`${url}/manage`}
						>
							<Button color="inherit">Manage All Orders</Button>
						</Link>
						<Link
							style={{ textDecoration: 'none', color: '#000000' }}
							to={`${url}/addProducts`}
						>
							<Button color="inherit">Add Products</Button>
						</Link>
						<Link
							style={{ textDecoration: 'none', color: '#000000' }}
							to={`${url}/manageProducts`}
						>
							<Button color="inherit">Manage Products</Button>
						</Link>
					</Box>
				) : (
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<Link
							style={{ textDecoration: 'none', color: '#000000' }}
							to={`${url}/pay`}
						>
							<Button sx={{ color: '#000000' }}>Pay</Button>
						</Link>
						<Link
							style={{ textDecoration: 'none', color: '#000000' }}
							to={`${url}/review`}
						>
							<Button sx={{ color: '#000000' }}>Review</Button>
						</Link>
						<Link
							style={{ textDecoration: 'none', color: '#000000' }}
							to={`${url}/myOrder`}
						>
							<Button sx={{ color: '#000000' }}>My order</Button>
						</Link>
					</Box>
				)}
				<Link
					style={{ textDecoration: 'none', color: '#000000' }}
					to={`${url}/pay`}
				>
					<Button
						style={{ textDecoration: 'none', color: '#000000' }}
						onClick={logOut}
						color="inherit"
					>
						Logout
					</Button>
				</Link>
			</Box>

			<Divider />
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				sx={{
					width: { sm: `calc(100% - ${drawerWidth}px)` },
					ml: { sm: `${drawerWidth}px` },
				}}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						sx={{ mr: 2, display: { sm: 'none' } }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Dashboard
					</Typography>
				</Toolbar>
			</AppBar>
			<Box
				component="nav"
				sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
				>
					{drawer}
				</Drawer>
				<Drawer
					variant="permanent"
					sx={{
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: drawerWidth,
						},
					}}
					open
				>
					{drawer}
				</Drawer>
			</Box>
			<Box
				component="main"
				sx={{
					flexGrow: 1,
					p: 3,
					width: { sm: `calc(100% - ${drawerWidth}px)` },
				}}
			>
				<Toolbar />
				<Switch>
					<AdminRoute path={`${path}/makeAdmin`}>
						<MakeAdmin />
					</AdminRoute>
					<AdminRoute path={`${path}/manage`}>
						<ManageAllOrders />
					</AdminRoute>
					<AdminRoute path={`${path}/addProducts`}>
						<AddProducts />
					</AdminRoute>
					<AdminRoute path={`${path}/manageProducts`}>
						<ManageProducts />
					</AdminRoute>
					<Route path={`${path}/pay`}>
						<Pay />
					</Route>
					<Route path={`${path}/review`}>
						<Review />
					</Route>
					<Route path={`${path}/myOrder`}>
						<MyOrder />
					</Route>
				</Switch>
			</Box>
		</Box>
	);
}

Dashboard.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default Dashboard;

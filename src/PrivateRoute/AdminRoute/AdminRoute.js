import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
	const { user, admin, isLoading } = useAuth();
	console.log(isLoading);
	if (isLoading) {
		return <CircularProgress />;
	}
	return (
		<Route
			{...rest}
			render={({ location }) =>
				admin && user.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: location },
						}}
					/>
				)
			}
		/>
	);
};

export default AdminRoute;

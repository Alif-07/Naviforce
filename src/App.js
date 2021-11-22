import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Explore from './Pages/Home/Explore/Explore';
import ProductDetails from './Pages/Home/HomeProduct/ProductDetails/ProductDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import Purchase from './Pages/Home/Purchase/Purchase';
import Review from './Pages/Dashboard/User/Review/Review';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/explore">
						<Explore />
					</Route>

					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>
					<PrivateRoute exact path="/productDetails/:id">
						<ProductDetails />
					</PrivateRoute>
					<PrivateRoute exact path="/purchase/:id">
						<Purchase />
					</PrivateRoute>
					<PrivateRoute exact path="/review/:id">
						<Review />
					</PrivateRoute>
				</Switch>
			</Router>
		</AuthProvider>
	);
}

export default App;

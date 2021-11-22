import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../Hooks/useAuth';

const Review = () => {
	const [products, setProducts] = useState([]);
	const { id } = useParams();
	const { user } = useAuth();

	useEffect(() => {
		fetch(`https://floating-cliffs-55583.herokuapp.com/watch`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	const findProduct = products.find((product) => product.id == id);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);

		axios
			.post(`https://floating-cliffs-55583.herokuapp.com/review`, data)
			.then((res) => {
				if (res.data.insertedId) {
					alert('Placed review Successfully');
					reset();
				}
			});
	};

	return (
		<Container sx={{ py: 5 }}>
			<Typography
				sx={{ textAlign: 'center', my: 5 }}
				variant="h4"
				gutterBottom
				component="div"
			>
				Share your review
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={12} md={6}>
					<img
						style={{ width: '70%' }}
						src={findProduct?.url}
						alt="watch"
						srcset=""
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<form
						style={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
						}}
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							style={{
								width: '50%',
								marginBottom: 20,
								padding: 10,
								borderRadius: '5px',
							}}
							defaultValue={user.displayName}
							{...register('name')}
						/>

						<input
							style={{
								width: '50%',
								marginBottom: 20,
								padding: 10,
								borderRadius: '5px',
							}}
							defaultValue={user.email}
							{...register('email', { required: true })}
						/>
						<input
							style={{
								width: '50%',
								marginBottom: 20,
								padding: 10,
								borderRadius: '5px',
							}}
							defaultValue={findProduct?.ModelNumber}
							{...register('modelNumber')}
						/>
						<input
							style={{
								width: '50%',
								marginBottom: 20,
								padding: 10,
								borderRadius: '5px',
							}}
							placeholder="price"
							defaultValue={findProduct?.Price}
							{...register('price')}
						/>
						<input
							style={{
								width: '50%',
								marginBottom: 20,
								padding: 10,
								borderRadius: '5px',
							}}
							placeholder="Review"
							{...register('review')}
						/>

						{/* errors will return when field validation fails  */}
						{errors.exampleRequired && <span>This field is required</span>}

						<input
							style={{
								width: '50%',
								marginBottom: 20,
								padding: 10,
								backgroundColor: '#00FFFF',
								borderRadius: '5px',
							}}
							type="submit"
							value="Submit"
						/>
					</form>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Review;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
	const { id } = useParams();
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(`https://floating-cliffs-55583.herokuapp.com/watch`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);
	const findProduct = products.find((product) => product.id == id);

	return (
		<Container>
			<Grid container sx={{ display: 'flex' }} spacing={2}>
				<Grid item xs={12} md={6}>
					<img src={findProduct?.url} style={{ width: '80%' }} alt="watch" />
				</Grid>
				<Grid item xs={12} md={6}>
					<Card sx={{ maxWidth: '80%' }}>
						<CardContent>
							<Typography gutterBottom variant="h3" component="div">
								{findProduct?.Brand}
							</Typography>
							<Typography variant="h5" gutterBottom component="div">
								Model-Number:{findProduct?.ModelNumber}
							</Typography>
							<Typography variant="body1" gutterBottom>
								{findProduct?.Desc}
							</Typography>
							<Typography variant="h5" gutterBottom component="div">
								Water-Resistant:{findProduct?.WaterResistant}
							</Typography>
							<Typography variant="h5" gutterBottom component="div">
								Weight:{findProduct?.Weight}
							</Typography>
							<Typography variant="h5" gutterBottom component="div">
								Price:{findProduct?.Price}
							</Typography>
						</CardContent>
						<CardActions sx={{ textAlign: 'center' }}>
							<Link
								style={{ textDecoration: 'none', color: '#FFFFFF' }}
								to={`/purchase/${findProduct?.id}`}
							>
								<Button
									sx={{
										bgcolor: 'secondary.main',
										color: 'secondary.contrastText',
										p: 2,
									}}
									size="small"
								>
									Buy Now
								</Button>
							</Link>
						</CardActions>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ProductDetails;

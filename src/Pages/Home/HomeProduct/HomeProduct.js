import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const HomeProduct = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		fetch(`https://floating-cliffs-55583.herokuapp.com/watch`)
			.then((res) => res.json())
			.then((data) => setProducts(data.slice(0, 6)));
	}, []);

	return (
		<Container>
			<Typography variant="h3" gutterBottom component="div">
				Hot Sale
			</Typography>
			<Grid container spacing={2}>
				{products.map((product) => (
					<Grid item xs={12} md={4} key={product.id}>
						<Card sx={{ maxWidth: 400 }}>
							<CardMedia
								component="img"
								alt="green iguana"
								height="140"
								image={product.url}
							/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="div">
									{product.Brand}
								</Typography>
								<Typography variant="h6" gutterBottom component="div">
									Model-Number: {product.ModelNumber}
								</Typography>
								<Typography variant="button" display="block" gutterBottom>
									Price: {product.Price}
								</Typography>
							</CardContent>
							<Box sx={{ display: 'flex' }}>
								<CardActions>
									<Link
										style={{ textDecoration: 'none', color: '#FFFFFF' }}
										to={`productDetails/${product.id}`}
									>
										<Button
											sx={{
												bgcolor: 'text.primary',
												color: 'secondary.contrastText',
												p: 1,
											}}
											size="small"
										>
											More Info
										</Button>
									</Link>
								</CardActions>
								<CardActions>
									<Link
										style={{ textDecoration: 'none', color: '#FFFFFF' }}
										to={`review/${product.id}`}
									>
										<Button
											sx={{
												bgcolor: 'text.primary',
												color: 'secondary.contrastText',
												p: 1,
											}}
											size="small"
										>
											Review
										</Button>
									</Link>
								</CardActions>
							</Box>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default HomeProduct;

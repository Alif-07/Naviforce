import { Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const ShowReview = () => {
	const [review, setReview] = useState([]);

	useEffect(() => {
		fetch(`https://floating-cliffs-55583.herokuapp.com/review`)
			.then((res) => res.json())
			.then((data) => setReview(data));
	}, []);

	return (
		<Container sx={{ py: 5 }}>
			<Typography variant="h4">Our reviews</Typography>
			<Grid container spacing={2}>
				{review.map((r) => (
					<Grid item xs={6} md={3} key={r.email}>
						<Card
							sx={{
								minWidth: 275,
								borderRadius: 1,
								py: 5,
								m: 2,
							}}
						>
							<CardContent>
								<Typography
									sx={{ fontSize: 14, color: 'success.main' }}
									gutterBottom
								>
									{r.name}
								</Typography>

								<Typography
									sx={{ mb: 1.5, color: 'error.main' }}
									color="text.secondary"
								>
									Model_Number{r?.modelNumber}
								</Typography>
								<Typography
									sx={{ mb: 1.5, color: 'error.main' }}
									color="text.secondary"
								>
									Price:{r?.price}
								</Typography>
								<Typography variant="body2" sx={{ color: 'primary.main' }}>
									{r?.review}
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default ShowReview;

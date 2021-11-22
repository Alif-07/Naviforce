import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const Banner = () => {
	return (
		<ImageList sx={{ width: '100%', height: '80vh' }}>
			{/* <ImageListItem key="Subheader" cols={2}>
				<ListSubheader component="div">December</ListSubheader>
			</ImageListItem> */}
			{itemData.map((item) => (
				<ImageListItem key={item.id}>
					<img
						src={`${item.url}?w=248&fit=crop&auto=format`}
						srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
						alt={item.Brand}
						loading="lazy"
					/>
					<ImageListItemBar
						title={item.Brand}
						subtitle={item.ModelNumber}
						actionIcon={
							<IconButton
								sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
								aria-label={`info about ${item.ModelNumber}`}
							>
								<InfoIcon />
							</IconButton>
						}
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};

const itemData = [
	{
		id: 1,
		Brand: 'NAVIFORCE',
		ModelNumber: 'NF9183',
		'Water-Resistant': '3ATM',
		Weight: '173Gram',
		'Case-Diameter:': '45.5MM',
		Price: '$199',
		url: 'https://i.ibb.co/54Y1cFC/NF9183.jpg',
	},
	{
		id: 2,
		Brand: 'NAVIFORCE',
		ModelNumber: 'NF9186',
		'Water-Resistant': '3ATM',
		Weight: '152g',
		'Case-Diameter:': '45.5MM',
		Price: '$229',
		url: 'https://i.ibb.co/ZVxw8B7/NF9184.jpg',
	},
	{
		id: 3,
		Brand: 'NAVIFORCE',
		ModelNumber: 'NF9186',
		'Water-Resistant': '3ATM',
		Weight: '152g',
		'Case-Diameter:': '45MM',
		Price: '$99',
		url: 'https://i.ibb.co/1245fyF/NF9177.jpg',
	},
	{
		id: 4,
		Brand: 'NAVIFORCE',
		ModelNumber: 'NF9175',
		'Water-Resistant': '3ATM',
		Weight: '175g',
		'Case-Diameter:': '46.5mm',
		Price: '$139',
		url: 'https://i.ibb.co/LxC8vcZ/NF9175.jpg',
	},
	{
		id: 5,
		Brand: 'NAVIFORCE',
		ModelNumber: 'NF9099',
		'Water-Resistant': '3ATM',
		Weight: '89g',
		'Case-Diameter:': '45mm',
		Price: '$69',
		url: 'https://i.ibb.co/vZQ8XfJ/NF9099.jpg',
	},
	{
		id: 6,
		Brand: 'NAVIFORCE',
		ModelNumber: 'NF9155A',
		'Water-Resistant': '3ATM',
		Weight: '127g',
		'Case-Diameter:': '46mm',
		Price: '$42',
		url: 'https://i.ibb.co/ZMXfH0T/NF9155A.jpg',
	},
];

export default Banner;

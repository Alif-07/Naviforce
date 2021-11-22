import { Box } from '@mui/system';
import React from 'react';
import banner from '../../../watch/banner.jpg';

const MainBanner = () => {
	return (
		<Box
			component="img"
			sx={{
				height: 550,
				width: '100%',
				// maxHeight: { xs: 233, md: 167 },
				// maxWidth: { xs: 350, md: 250 },
			}}
			alt="NAVIFORCE"
			src={banner}
		/>
	);
};

export default MainBanner;

import React, { Component } from 'react';

import {
	Grid,
	Typography,
	Paper,
	Toolbar,
	withStyles,
	TextField,
	IconButton,
	Button,
	Box,
	Divider,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import dummyImg from '../../../shared/assets/png/dummyimage1.png';
import LinearBuffer from '../../../shared/components/LinerBuffer';
import profile_pic from './../../dummy_data/images/image2.jpg';
import Table from './Table';
const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},

	divider: {
		width: 400,
		height: 2,
	},
	subHead: {
		fontWeight: 500,
		marginBottom: 10,
	},
	editProfileTextFieldSection: {
		width: 200,
	},
	editProfileTypographySection: {
		width: 200,

		alignSelf: 'center',
	},
	editProfileTypography: {
		marginBottom: 20,
		width: 240,

		alignSelf: 'center',
	},

	editProfileTextField: {
		marginBottom: 20,
		width: 250,
		backgroundColor: 'white',
	},
	profilePic: {
		borderRadius: 200,
		width: 200,
		height: 200,
		marginLeft: '25%',
	},

	gridTypo: {
		width: 240,

		alignSelf: 'center',
		marginBottom: 20,
	},
	editProfile: {
		width: 600,

		// marginBottom: 20,
	},
});
class Profile extends Component {
	render() {
		const { classes } = this.props;

		return (
			<div className={classes.root}>
				<div style={{ marginLeft: 50 }}>
					<Typography variant='h5' className={classes.subHead}>
						SETTINGS
					</Typography>
					<Divider className={classes.divider} />
					<Typography className={classes.subHead} variant='h4'>
						Manage Profile
					</Typography>
					<Grid
						container
						direction='row'
						style={{ marginTop: 37 }}
					>
						<Grid
							item
							direction='column'
							className={classes.editProfile}
						>
							<Grid
								container
								direction='row'
								// style={{ padding: 10 }}
							>
								<Typography
									className={
										classes.editProfileTypography
									}
								>
									Name
								</Typography>

								<TextField
									variant='outlined'
									placeholder='Full Name '
									className={
										classes.editProfileTextField
									}
								/>
								<Typography
									className={
										classes.editProfileTypography
									}
								>
									Email ID
								</Typography>

								<TextField
									className={
										classes.editProfileTextField
									}
									variant='outlined'
									placeholder='Email ID'
								/>
								<Typography
									className={
										classes.editProfileTypography
									}
								>
									Phone Number
								</Typography>

								<TextField
									className={
										classes.editProfileTextField
									}
									variant='outlined'
									placeholder='Phone Number'
								/>
							</Grid>
							<Button
								style={{
									marginTop: 72,
									marginBottom: 50,
									marginLeft: 240,
									width: 258,
									height: 60,
								}}
								variant='contained'
								color='primary'
								component='span'
								type='file'
							>
								UPDATE
							</Button>
						</Grid>

						<img
							src={profile_pic}
							className={classes.profilePic}
							alt='profile_pic'
						/>
					</Grid>
				</div>

				<div style={{ marginRight: 32 }}>
					<Table />
				</div>
				<Button
					style={{
						marginTop: 50,
						marginLeft: '83%',

						width: 256,
						height: 60,
						// x
					}}
					variant='contained'
					color='primary'
					component='span'
					type='file'
				>
					ADD TO COMPANY
				</Button>
			</div>
		);
	}
}

export default withStyles(styles)(Profile);

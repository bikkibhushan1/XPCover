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
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import dummyImg from '../../../shared/assets/png/dummyimage1.png';
import LinearBuffer from '../../../shared/components/LinerBuffer';
import {
	AutoCompleteTextField,
	dataToSendToParent,
} from './AutoCompleteTextField';
import axios from 'axios';

const styles = (theme) => ({
	subRoot: {
		flexGrow: 1,
		marginLeft: 20,
	},
	root: {
		padding: theme.spacing(2),

		color: theme.palette.text.secondary,
	},
	leftSide: {
		width: 600,
		marginBottom: 20,
	},
	rightSide: {
		width: 300,
	},
	gridTypo: {
		width: 240,
		fontWeight: 700,
		color: '#383b41',

		alignSelf: 'center',
	},
	image: {
		width: 300,
		height: 200,
	},
	input: {
		display: 'none',
	},
	heading: {
		// height: 32,
		// overflow: 'visible',
		// fontFamily: `"Avenir-Black", serif`,
		color: '#383b41',
		// fontSize: 24,
		// letterSpacing: 0,
		// lineHeight: 1.3333333333333333,
		textAlign: 'center',
		fontWeight: 900,
	},
	box: {
		boxSizing: 'border-box',
		width: 'auto',
		height: 'auto',
		overflow: 'visible',
		borderRadius: 8,
		border: '1px solid #c1c7d0',
		// alignItems: "center",
		// alignContent: "center",
		// justifyItems: "center",
		// justifyContent: "center",
		padding: 4,
	},
	linearBuffer: {
		width: 250,
		marginLeft: 250,

		marginTop: 10,
	},
});
let wholeStepData = {};
let listData = {};
const data = [
	{
		typo: ' Select Product',
		placeHold: 'Travel Insurance ',
		id: 'SelectProduct',
	},
	{
		typo: ' Select Insurance Company',
		placeHold: 'Bharti AXA GI ',
		id: 'SelectInsuranceCompany',
	},
	{ typo: 'Select Partner', placeHold: 'LG ', id: 'SelectPartner' },
	{
		typo: ' Select Language',
		placeHold: 'Hindi ',
		id: 'SelectLanguage',
	},
];

class AddPolicyDesign extends Component {
	constructor(props) {
		super();
		this.state = {
			isStep1: true,
			isStep2: false,
			isStep3: false,
			isProgressBar: false,
			isRightSide: false,
			isRightSideSubPart: false,
			filex: null,
			addAName: null,
		};
	}

	async postWholeData(whole) {
		let data = new FormData();

		data.append('file', this.state.filex);
		data.append('document', JSON.stringify(whole));

		await axios
			.post('http://9eabe9bdf4c0.ngrok.io/addCompany', data)

			.catch((err, response) => {
				// console.error(err + "error" + response);
			});
	}
	handleErrorAndAddDesignButton() {
		if (
			listData['SelectProduct'] !== undefined &&
			String(listData['SelectProduct']).length > 0 &&
			listData['SelectInsuranceCompany'] !== undefined &&
			String(listData['SelectInsuranceCompany']).length > 0 &&
			listData['SelectPartner'] !== undefined &&
			String(listData['SelectPartner']).length > 0 &&
			listData['SelectLanguage'] !== undefined &&
			String(listData['SelectLanguage']).length > 0 &&
			this.state.filex !== null &&
			this.state.filex !== undefined
		) {
			this.setState({
				isRightSide: true,
			});
		} else {
			alert(
				'Please Select  all required Fields And ReUpload the file',
			);
		}
	}
	handleErrorAndConfirm() {
		if (
			String(this.state.addAName).length > 0 &&
			this.state.addAName !== null
		) {
			wholeStepData = {
				...listData,
				...{
					addAName: this.state.addAName,
				},
			};

			this.postWholeData(wholeStepData);
		} else {
			console.log(this.state.addAName);
			alert('Please Add a Name then Confirm');
		}
	}
	render() {
		const { classes } = this.props;
		const {
			isProgressBar,
			isStep1,
			isStep2,
			isStep3,
			isRightSide,
			isRightSideSubPart,
		} = this.state;

		return (
			<div>
				<div className={classes.root}>
					<Toolbar>
						<Typography
							variant='h4'
							className={classes.heading}
						>
							Add Policy Design
						</Typography>
					</Toolbar>

					<div className={classes.subRoot}>
						<Grid container direction='row'>
							<Grid
								item
								direction='column'
								className={classes.leftSide}
							>
								{data.map((item) => (
									<Grid
										container
										direction='row'
										style={{ padding: 10 }}
									>
										{/* <Typography
											className={
												classes.gridTypo
											}
										>
											{item.typo}
										</Typography> */}
										<AutoCompleteTextField
											item={item}
										/>

										{/* <TextField
											style={{
												backgroundColor:
													'white',
											}}
											variant='outlined'
											placeholder={
												item.placeHold
											}
											InputProps={{
												endAdornment: (
													<InputAdornment>
														<IconButton>
															<SearchIcon />
														</IconButton>
													</InputAdornment>
												),
											}}
										/> */}
									</Grid>
								))}
								<Grid container direction='row'>
									<Typography
										style={{ marginLeft: 10 }}
										className={classes.gridTypo}
									>
										Upload HTML Design
									</Typography>
									<input
										accept='image/*'
										className={classes.input}
										id='contained-button-file'
										type='file'
										onChange={(e) => {
											this.setState({
												filex:
													e.target
														.files[0],
											});
										}}
									/>
									<label htmlFor='contained-button-file'>
										<Button
											style={{
												marginTop: 10,
											}}
											variant='contained'
											color='primary'
											component='span'
											type='file'
										>
											UPLOAD FILE
										</Button>
									</label>
								</Grid>

								{/* {isProgressBar && (
									<div
										className={
											classes.linearBuffer
										}
									>
										<LinearBuffer />
									</div>
								)} */}

								<Button
									onClick={() => {
										listData = dataToSendToParent;
										this.handleErrorAndAddDesignButton();
									}}
									className={classes.uploadBtn}
									style={{
										marginLeft: 250,
										width: 250,
										marginTop: 10,
									}}
									variant='contained'
									color='primary'
									component='span'
								>
									ADD DESIGN
								</Button>
							</Grid>
							{isRightSide && (
								<Grid
									item
									direction='column'
									className={classes.rightSide}
								>
									<img
										src={dummyImg}
										alt='dummyImage'
										className={classes.image}
									/>

									<Grid
										container
										direction='row'
										justify='space-between'
									>
										<Button
											style={{ width: 130 }}
											variant='contained'
											color='primary'
											endIcon={<SearchIcon />}
										>
											PREVIEW
										</Button>
										<Button
											style={{ width: 130 }}
											variant='contained'
											color='primary'
											onClick={() =>
												this.setState({
													isRightSideSubPart: true,
												})
											}
										>
											ACTIVATE
										</Button>
									</Grid>

									{isRightSideSubPart && (
										<Grid
											container
											direction='column'
										>
											<TextField
												onChange={(event) =>
													this.setState({
														addAName:
															event
																.target
																.value,
													})
												}
												variant='outlined'
												placeholder='Add a Name'
												style={{
													marginTop: 10,
													backgroundColor:
														'white',
													width: '80%',
												}}
											/>
											<Button
												onClick={() => {
													this.handleErrorAndConfirm();
												}}
												variant='contained'
												color='primary'
												style={{
													marginTop: 10,
													width: '80%',
												}}
											>
												CONFIRM
											</Button>
										</Grid>
									)}
								</Grid>
							)}
						</Grid>
					</div>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(AddPolicyDesign);

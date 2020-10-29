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
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';

import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import BackupIcon from '@material-ui/icons/Backup';
import {
	AutoCompleteTextField,
	AsynchronousMultiple,
	dataToSendToParent,
} from './AutoCompleteTextField';

import { dummydata } from './dummydata.js';
import axios from 'axios';
const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: 10,
	},
	paper: {
		padding: theme.spacing(2),

		color: theme.palette.text.secondary,
	},
	leftSide: {
		width: 600,
		marginBottom: 20,
		marginLeft: 16,
		marginTop: 16,
	},

	rightSide: {
		width: 'auto',
		marginTop: -20,
		marginLeft: 20,
	},
	gridTypo: {
		width: 240,

		alignSelf: 'center',
		fontWeight: 700,
	},
	image: {
		width: 300,
		height: 200,
	},
	input: {
		display: 'none',
	},
	textField: {
		width: 250,
		backgroundColor: 'white',
	},
});
let wholeStepData = {};
let postDataJsonStep1 = {};
let postDataJsonStep2 = {};
let postDataJsonStep3_1 = {};
let postDataJsonStep3_2 = {};
const step1 = [
	{
		id: 'company_name',
		typo: 'Partner Registered Company Name',
		placeHold: 'Registered Name',
		data: null,
	},
	{
		id: 'brand_name',
		typo: 'Partner Brand Name',
		placeHold: 'Brand Name',
		data: null,
	},
	{
		id: 'registration_id',
		typo: 'Company Registration ID',
		placeHold: 'Registration ID ',
		data: null,
	},
	{
		id: 'vat',
		typo: 'Company TAX ID',
		placeHold: 'GST?VAT ID',
		data: null,
	},
	// {
	// 	id: 'SelectLanguage',
	// 	typo: 'Select Language',
	// 	placeHold: 'Hindi',
	// 	data: null,
	// },
	{
		id: 'MainDomain',
		typo: 'Main Domain',
		placeHold: 'www.abc.com',
		data: null,
	},
];
const step2 = [
	{
		id: 'country_present_in',
		typo: 'Country Present In',
		placeHold: 'Country',
		data: null,
	},
	{
		id: 'state_present_in',
		typo: 'States Present In',
		placeHold: 'All State',
		data: null,
	},
	{
		id: 'main_product',
		typo: 'Main Product',
		placeHold: 'Add Product Type',
		data: null,
	},
	{
		id: 'insurance_product_name',
		typo: 'Insurance Product Interested to Sell',
		placeHold: 'Product name',
		data: null,
	},
];
const step3_1 = [
	{
		id: 'selectCountry',
		typo: 'Select Country',
		placeHold: 'Country Name',
		data: null,
	},
	{
		id: 'SalesHeadName',
		typo: 'Sales Head Name',
		placeHold: 'Full Name',
		data: null,
	},

	{
		id: 'SalesheadEmailID',
		typo: 'Sales head Email ID',
		placeHold: 'Email ID',
		data: null,
	},
	{
		id: 'AdminName',
		typo: 'Admin Name',
		placeHold: 'Full Name',
		data: null,
	},
	{
		id: 'AdminEmailID',
		typo: 'Admin Email ID',
		placeHold: 'Email ID',
		data: null,
	},
];
const step3_2 = [
	{
		id: 'selectCountry',
		typo: 'Select Country',
		placeHold: 'Download Template',
		data: null,
	},
];

class CreateMerchant extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isStep1: true,
			isStep2: false,
			isStep3_1: false,
			// isStep3_2: false,

			isNext: false,
			isConfirm: true,
			isShowMerchantId: false,
			merchantIdAssigned: null,
			filex: null,
		};
	}

	// async getData() {
	// 	fetch('http://jsonplaceholder.typicode.com/todos');

	// 	try {
	// 		let result = await fetch(
	// 			'http://jsonplaceholder.typicode.com/todos',
	// 		)
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				this.setState({ todos: data });
	// 				console.log(this.state.id);
	// 			})
	// 			.catch(console.log);
	// 		console.log('Result' + result);
	// 	} catch (e) {
	// 		console.log(e);
	// 	}
	// }

	async postWholeData(whole) {
		let data = new FormData();

		data.append('file', this.state.filex);
		data.append('document', JSON.stringify(whole));

		await axios
			.post('http://f2635d186ab8.ngrok.io/addPartner', data)

			.catch((err, response) => {
				// console.error(err + "error" + response);
			});
	}
	async postData(data) {
		await axios
			.post('http://f2635d186ab8.ngrok.io/addPartner', data)
			.then((response) => {
				this.setState({
					insuranceIdAssigned:
						response.data.insuranceCompanyIdAssigned,
				});
				console.log(response);
			})
			.catch((err, response) => {
				console.error(err + 'error' + response);
			});
	}
	handleErrorAndConfirmStep1() {
		var urlExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
		var urlRegex = new RegExp(urlExpression);

		if (
			postDataJsonStep1['company_name'] !== undefined &&
			String(postDataJsonStep1['company_name']).length > 0 &&
			postDataJsonStep1['brand_name'] !== undefined &&
			String(postDataJsonStep1['brand_name']).length > 0 &&
			postDataJsonStep1['registration_id'] !== undefined &&
			String(postDataJsonStep1['registration_id']).length > 0 &&
			postDataJsonStep1['vat'] !== undefined &&
			String(postDataJsonStep1['vat']).length > 0 &&
			// postDataJsonStep1['SelectLanguage'] !== undefined &&
			// String(postDataJsonStep1['SelectLanguage']).length > 0 &&
			postDataJsonStep1['MainDomain'] !== undefined &&
			String(postDataJsonStep1['MainDomain']).match(urlRegex)
		) {
			// this.setState({ step1ErrorStatus: false });
			this.setState({
				isNext: true,
				isConfirm: false,
				isShowMerchantId: true,
			});
			this.postData({
				confirm: true,
			});
		} else
			alert(' Unable to proceed!!! Please Enter all/correct details');
	}
	handleErrorAndNextStep2() {
		if (
			postDataJsonStep2['country_present_in'] !== undefined &&
			String(postDataJsonStep2['country_present_in']).length > 0 &&
			postDataJsonStep2['state_present_in'] !== undefined &&
			String(postDataJsonStep2['state_present_in']).length > 0 &&
			postDataJsonStep2['main_product'] !== undefined &&
			String(postDataJsonStep2['main_product']).length > 0 &&
			postDataJsonStep2['insurance_product_name'] !== undefined &&
			String(postDataJsonStep2['insurance_product_name']).length > 0 &&
			this.state.filex !== null &&
			this.state.filex !== undefined
		) {
			this.setState({
				isStep1: false,
				isStep2: false,
				isStep3_1: true,
				// isStep3_2: false,
			});
		} else {
			alert('Please Select  all required Fields or ReUpload the file');
		}
	}
	handleErrorAndStep3_1() {
		var emailExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		var emailRegex = new RegExp(emailExpression);

		if (
			postDataJsonStep3_1['SalesHeadName'] !== undefined &&
			String(postDataJsonStep3_1['SalesHeadName']).length > 0 &&
			postDataJsonStep3_1['SalesheadEmailID'] !== undefined &&
			String(postDataJsonStep3_1['SalesheadEmailID']).match(
				emailRegex,
			) &&
			postDataJsonStep3_1['AdminName'] !== undefined &&
			String(postDataJsonStep3_1['AdminName']).length > 0 &&
			postDataJsonStep3_1['AdminEmailID'] !== undefined &&
			String(postDataJsonStep3_1['AdminEmailID']).match(emailRegex)
		) {
			// this.setState({ step1ErrorStatus: false });
			wholeStepData = {
				...postDataJsonStep1,
				...postDataJsonStep2,
				...postDataJsonStep3_1,

				...{
					confirm: false,
				},
			};
			this.postWholeData(wholeStepData);
			// this.setState({
			// 	isStep1: false,
			// 	isStep2: false,
			// 	isStep3_1: false,
			// 	// isStep3_2: true,
			// });
		} else
			alert(' Unable to proceed!!! Please Enter all/correct details');
	}
	// submitRegProof() {
	// 	let file = this.state.filex;
	// 	let formdata = new FormData();
	// 	formdata.append('file', file);
	// 	this.setState({
	// 		reg_proof: formdata,
	// 	});
	// }

	render() {
		const {
			isStep1,
			isStep2,
			isStep3_1,
			isStep3_2,
			isNext,
			isConfirm,
			isShowMerchantId,
			merchantIdAssigned,
		} = this.state;
		const { classes } = this.props;
		const step = this.state.isStep1
			? step1
			: this.state.isStep2
			? step2
			: step3_1;

		return (
			<div className={classes.root}>
				<Toolbar>
					<Typography style={{ fontWeight: 900 }} variant='h4'>
						Add Merchant
					</Typography>
				</Toolbar>

				<div>
					<Grid container direction='row'>
						<Grid
							item
							direction='column'
							className={classes.leftSide}
						>
							{step.map((item, index) => (
								<Grid
									container
									direction='row'
									style={{ padding: 10 }}
								>
									<Typography
										className={classes.gridTypo}
									>
										{item.typo}
									</Typography>
									{isStep1 && (
										<TextField
											className={
												classes.textField
											}
											onChange={(event) => {
												item.data =
													event.target.value;
												postDataJsonStep1[
													item.id
												] = item.data;
											}}
											variant='outlined'
											placeholder={
												item.placeHold
											}
										/>
									)}
									{isStep2 && (
										<div>
											{/* <AutoCompleteTextField
												item={item}
											/> */}
											<AsynchronousMultiple
												item={item}
											/>
										</div>
									)}
									{isStep3_1 && (
										<TextField
											disabled={
												index === 0
													? true
													: false
											}
											className={
												classes.textField
											}
											onChange={(event) => {
												item.data =
													event.target.value;
												postDataJsonStep3_1[
													item.id
												] = item.data;
											}}
											variant='outlined'
											placeholder={
												item.placeHold
											}
											InputProps={{
												endAdornment: (
													<InputAdornment>
														{index ===
															0 && (
															<IconButton>
																<SearchIcon />
															</IconButton>
														)}
													</InputAdornment>
												),
											}}
										/>
									)}
								</Grid>
							))}
							{/* {isStep3_2 && (
								<Grid
									container
									direction='row'
									style={{ marginLeft: 10 }}
								>
									<Typography
										className={classes.gridTypo}
										style={{ paddingRight: 40 }}
									>
										Create Countrywise Managers
									</Typography>

									<input
										accept='image/*'
										className={classes.input}
										id='contained-button-file'
										multiple
										type='file'
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
											endIcon={<BackupIcon />}
										>
											UPLOAD CSV
										</Button>
									</label>
								</Grid>
							)} */}

							{isStep2 && (
								<Grid
									container
									direction='row'
									style={{ marginLeft: 10 }}
								>
									<Typography
										className={classes.gridTypo}
									>
										Upload Registration Proof
									</Typography>
									<input
										accept='image/*'
										className={classes.input}
										id='contained-button-file'
										multiple
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
							)}
							{isConfirm && (
								<Button
									style={{
										marginLeft: 250,
										width: 240,
										marginTop: 10,
									}}
									variant='contained'
									color='primary'
									component='span'
									onClick={() => {
										this.handleErrorAndConfirmStep1();
										// this.setState({
										// 	isNext: true,
										// 	isConfirm: false,
										// });
									}}
								>
									CONFIRM
								</Button>
							)}
							{isNext && (
								<Button
									style={{
										marginLeft: 250,
										width: 240,
										marginTop: 10,
									}}
									variant='contained'
									color='primary'
									component='span'
									onClick={() => {
										this.setState({
											isShowMerchantId: false,
										});
										if (isStep1) {
											this.setState({
												isStep1: false,
												isStep2: true,
												isStep3_1: false,
												// isStep3_2: false,
											});
											// this.postData(
											// 	postDataJsonStep1
											// );
										} else if (isStep2) {
											this.setState({
												isStep1: false,
												isStep2: false,
												isStep3_1: true,
												// isStep3_2: false,
											});
											postDataJsonStep2 = dataToSendToParent;
											//uncooment this.handleErrorAndNextStep2(); when step2 is fetched properly to run validation on step2//
											// this.handleErrorAndNextStep2();
										} else if (isStep3_1) {
											this.handleErrorAndStep3_1();
										}
									}}
								>
									NEXT
								</Button>
							)}
						</Grid>
						{isShowMerchantId && (
							<Grid
								justify='center'
								container
								direction='row'
								className={classes.rightSide}
							>
								<Grid
									container
									direction='row'
									style={{
										height: '30%',
										alignItems: 'center',
									}}
								>
									<Typography
										className={classes.gridTypo}
									>
										Merchant ID Assigned
									</Typography>
									<TextField
										className={classes.textField}
										value={merchantIdAssigned}
										disabled
										variant='outlined'
									/>
								</Grid>
							</Grid>
						)}
					</Grid>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(CreateMerchant);

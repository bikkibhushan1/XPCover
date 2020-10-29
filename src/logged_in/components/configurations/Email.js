import React, { Component } from 'react';
import {
	withStyles,
	Typography,
	Toolbar,
	Divider,
	Button,
	Box,
	TextField,
} from '@material-ui/core';
import dummyImg from '../../../shared/assets/png/dummyimage1.png';

const styles = (theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: 10,
	},
	header: {
		width: 'auto',
		height: 'auto',
		overflow: 'visible',
		fontFamily: `"Avenir-Black", serif`,
		color: '#383b41',
		fontSize: 25,
		letterSpacing: 0,
		lineHeight: 2.2857142857142856,
		textAlign: 'left',
	},
	divider: {
		width: 276,
		height: 2,
	},
	button: {
		width: 209,
		height: 52,
		overflow: 'visible',
		backgroundColor: '#c1c7d0',
		position: 'absolute',
		right: 32,
		color: 'white',
	},
	policyDesigns: {
		marginTop: 83,
	},
	// policyImg: { width: "16.5%", height: "16.5%", padding: 10 },
	policyImg: { width: 300, height: 260, padding: 10 },
	box: {
		boxSizing: 'border-box',
		width: 190,
		height: 40,
		overflow: 'visible',
		borderRadius: 8,
		border: '1px solid #c1c7d0',
	},
});
// var s3 = require('s3');

// var client = s3.createClient({
// 	maxAsyncS3: 20, // this is the default
// 	s3RetryCount: 3, // this is the default
// 	s3RetryDelay: 1000, // this is the default
// 	multipartUploadThreshold: 20971520, // this is the default (20 MB)
// 	multipartUploadSize: 15728640, // this is the default (15 MB)
// 	s3Options: {
// 		accessKeyId: 'your s3 key',
// 		secretAccessKey: 'your s3 secret',
// 		// any other options are passed to new AWS.S3()
// 		// See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property
// 	},
// });
// var params = {
// 	localFile: 'some/local/file',

// 	s3Params: {
// 		Bucket: 's3 bucket name',
// 		Key: 'some/remote/file',
// 		// other options supported by getObject
// 		// See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#getObject-property
// 	},
// };
// var downloader = client.downloadFile(params);
// downloader.on('error', function (err) {
// 	console.error('unable to download:', err.stack);
// });
// downloader.on('progress', function () {
// 	console.log(
// 		'progress',
// 		downloader.progressAmount,
// 		downloader.progressTotal,
// 	);
// });
// downloader.on('end', function () {
// 	console.log('done downloading');
// });

class Email extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<Typography className={classes.header}>
					EMAIL DESIGNS
				</Typography>
				<Divider className={classes.divider} />

				<Button
					variant='contained'
					className={classes.button}
					href='/c/addEmailDesign'
				>
					ADD A DESIGN
				</Button>
				<div className={classes.policyDesigns}>
					{[0, 1, 2, 3, 4, 5, 6, 7].map((item) => (
						<img
							src={dummyImg}
							alt='dummyImage'
							className={classes.policyImg}
						/>
					))}
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(Email);

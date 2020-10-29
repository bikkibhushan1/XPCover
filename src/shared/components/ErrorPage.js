import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const img_src = require('./../assets/jpg/er.jpg');

const styles = (theme) => ({
	root: {
		flexGrow: 1,
	},
});

class ErrorPage extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<img src={img_src} alt='error' width='100%' height='100%' />
			</div>
		);
	}
}
export default withStyles(styles)(ErrorPage);

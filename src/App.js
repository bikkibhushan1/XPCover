import React, { Fragment, Suspense, lazy } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import * as serviceWorker from './serviceWorker';
import Pace from './shared/components/Pace';

const LoggedInComponent = lazy(() => import('./logged_in/components/Main'));

const LoggedOutComponent = lazy(() => import('./logged_out/components/Main'));
const TypeMerchantComponent = lazy(() =>
	import('./logged_in/TypeMerchant/Main'),
);
const TypeBrokerComponent = lazy(() => import('./logged_in/TypeBroker/Main'));
const ErrorPage = lazy(() => import('../src//shared/components/ErrorPage'));

function App() {
	return (
		<BrowserRouter>
			<MuiThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles />
				<Pace color={theme.palette.primary.light} />
				<Suspense fallback={<Fragment />}>
					<Switch>
						<Route path='/c'>
							<LoggedInComponent />
						</Route>
						<Route path='/typeMerchant'>
							<TypeMerchantComponent />
						</Route>
						<Route path='/typeBroker'>
							<TypeBrokerComponent />
						</Route>
						<Route path='/error'>
							<ErrorPage />
						</Route>
						<Route>
							<LoggedOutComponent />
						</Route>
					</Switch>
				</Suspense>
			</MuiThemeProvider>
		</BrowserRouter>
	);
}

serviceWorker.register();

export default App;

import React, { Suspense } from 'react';
import store from '../BLL/redux-store';
import { HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { getLogout } from '../BLL/auth-reducer';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { appInitialization } from '../BLL/app-reducer';
import Preloader from './components/samples/Preloader/Preloader';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import AppWrapper from './AppWraper';
import { Box } from '@material-ui/core';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			light: '#757ce8',
			main: purple[500],
			dark: '#030303',
			contrastText: '#d7dadc'
		},
		secondary: {
			light: '#ff7961',
			main: purple[500],
			dark: '#1a1a1b',
			contrastText: '#d7dadc'
		},
		background: {
			paper: `#1a1a1b`,
			default: '#030303'
		}
	}
});

const DialogContainer = React.lazy(() => import('./components/Dialogs/DialogsItem/Dialog/DialogContainer'));

class App extends React.Component {
	componentDidMount() {
		this.props.appInitialization();
	}
	render() {
		if (!this.props.initializationApp) {
			return <Preloader />;
		}
		return (
			<ThemeProvider theme={theme}>
				<Suspense fallback={<Preloader />}>
					{/* <Header /> */}
					{/* <Navbar isAuth={this.props.isAuth} /> */}
					<Box
						style={{
							borderWidth: '2px',
							borderStyle: 'solid',
							borderImage: ` 
                linear-gradient(
                  to bottom, 
                  purple, 
                  rgba(0, 0, 0, 0)
                ) 1 100%`
						}}
					>
						<Switch>
							<Route path="/login" render={() => <LoginContainer />} />
							<Route
								path="/"
								render={() => (
									<AppWrapper
										getLogout={this.props.getLogout}
										currentContent={() => {
											return (
												<div className="app-wrapper">
													<Route
														path="/profile/:userID?"
														render={() => <ProfileContainer />}
													/>

													<Route
														path="/dialogs"
														render={() => <Dialogs dialogsData={this.props.dialogsPage} />}
														exact
													/>

													<Route path="/users" render={() => <UsersContainer />} />

													<Route path="/settings" render={() => <Settings />} />

													<Route path="/dialogs/1" render={() => <DialogContainer />} />
												</div>
											);
										}}
									/>
								)}
							/>
						</Switch>
					</Box>
					{/* <SidebarContainer sidebarData={this.props.sidebarPage} /> */}
					{/* <Footer /> */}
				</Suspense>
			</ThemeProvider>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	sidebarPage: state.sidebarPage,
	dialogsPage: state.dialogsPage,
	initializationApp: state.app.initializationSuccess
});
const AppContainer = compose(connect(mapStateToProps, { appInitialization, getLogout }))(App);

const SocialNetworkApp = () => {
	return (
		<HashRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</HashRouter>
	);
};

export default SocialNetworkApp;

import React, { Suspense } from 'react';
import store from '../BLL/redux-store';
import { HashRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { getLogout } from '../BLL/auth-reducer';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Settings from './components/Settings/Settings';
import Footer from './components/Footer/Footer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { appInitialization } from '../BLL/app-reducer';
import Preloader from './components/samples/Preloader/Preloader';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import yellow from '@material-ui/core/colors/yellow';
import green from '@material-ui/core/colors/green';
import AppWrapper from './AppWraper';

const theme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			light: '#757ce8',
			main: '#3f50b5',
			dark: '#002884',
			contrastText: '#fff'
		},
		secondary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000'
		},
		background: {
			paper: '#000',
			default: '#000'
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
												<Route path="/profile/:userID?" render={() => <ProfileContainer />} />

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

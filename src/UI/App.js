import React, { Suspense } from 'react';
import store from '../BLL/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
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
			<Suspense fallback={<Preloader />}>
				<div className="app-wrapper">
					<Header />
					<Navbar isAuth={this.props.isAuth} />
					<div className="app-wrapper-container">
						<Route path="/profile/:userID?" render={() => <ProfileContainer />} />
						<Route path="/dialogs" render={() => <Dialogs dialogsData={this.props.dialogsPage} />} exact />
						<Route path="/login" render={() => <LoginContainer />} />
						<Route path="/users" render={() => <UsersContainer />} />
						<Route path="/settings" render={() => <Settings />} />
						<Route path="/dialogs/1" render={() => <DialogContainer />} />
					</div>
					<SidebarContainer sidebarData={this.props.sidebarPage} />
					<Footer />
				</div>
			</Suspense>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	sidebarPage: state.sidebarPage,
	dialogsPage: state.dialogsPage,
	initializationApp: state.app.initializationSuccess
});
const AppContainer = compose(connect(mapStateToProps, { appInitialization }))(App);

const SocialNetworkApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};

export default SocialNetworkApp;

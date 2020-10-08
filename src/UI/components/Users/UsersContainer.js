import React from 'react';
import { connect } from 'react-redux';
import {
	setUsers,
	followThunk,
	unfollowThunk,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleInProgress,
	getUsers,
	setPortionNumber
} from './../../../BLL/users-reducer';
import Users from './Users';
import Preloader from '../samples/Preloader/Preloader';
import { addVisitedUser } from './../../../BLL/sidebar-reducer';

class UsersAPIComponent extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}

	changePage = (page) => {
		this.props.setCurrentPage(page);
		this.props.getUsers(page, this.props.pageSize);
	};

	render() {
		return (
			<div>
				{this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						follow={this.props.followThunk}
						unfollow={this.props.unfollowThunk}
						users={this.props.users}
						changePage={this.changePage}
						currentPage={this.props.currentPage}
						inProgress={this.props.inProgress}
						toggleInProgress={this.props.toggleInProgress}
						addVisitedUser={this.props.addVisitedUser}
						setPortionNumber={this.props.setPortionNumber}
						portionNumber={this.props.portionNumber}
					/>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		users: state.usersPage.usersData,
		pageSize: state.usersPage.pageSize,
		portionNumber: state.usersPage.portionNumber,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		inProgress: state.usersPage.inProgress
	};
};

const UsersContainer = connect(mapStateToProps, {
	followThunk,
	unfollowThunk,
	setUsers,
	setCurrentPage,
	setTotalUsersCount,
	toggleIsFetching,
	toggleInProgress,
	getUsers,
	addVisitedUser,
	setPortionNumber
})(UsersAPIComponent);

export default UsersContainer;

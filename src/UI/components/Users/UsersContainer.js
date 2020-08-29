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
	getUsers
} from './../../../BLL/users-reducer';
import Users from './Users';
import Preloader from '../samples/Preloader/Preloader';

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
	getUsers
})(UsersAPIComponent);

export default UsersContainer;

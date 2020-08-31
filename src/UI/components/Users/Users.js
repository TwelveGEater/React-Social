import React from 'react';
import style from './Users.module.css';
import Pagination from '../samples/Pagination/Pagination';
import User from './User/User';

class Users extends React.Component {
	render() {
		return (
			<div>
				<Pagination
					totalItemsCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					changePage={this.props.changePage}
					portionSize="6"
				/>
				<div className={style.users}>
					{this.props.users.map((user) => {
						return (
							<User
								user={user}
								inProgress={this.props.inProgress}
								unfollow={this.props.unfollow}
								follow={this.props.follow}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Users;

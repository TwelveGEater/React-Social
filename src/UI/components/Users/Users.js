import React from 'react';
import style from './Users.module.css';
import PaginationList from '../samples/Pagination/Pagination';
import User from './User/User';

class Users extends React.Component {
	render() {
		return (
			<div>
				<PaginationList
					totalItemsCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					changePage={this.props.changePage}
					portionSize="6"
					setPortionNumber={this.props.setPortionNumber}
					portionNumber={this.props.portionNumber}
				/>
				<div className={style.users}>
					{this.props.users.map((user) => {
						return (
							<User
								user={user}
								inProgress={this.props.inProgress}
								unfollow={this.props.unfollow}
								follow={this.props.follow}
								addVisitedUser={this.props.addVisitedUser}
								key={user.id}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Users;

import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Pagination from '../samples/Pagination/Pagination';

class Users extends React.Component {
	render() {
		return (
			<div>
				<Pagination
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					currentPage={this.props.currentPage}
					changePage={this.props.changePage}
				/>
				<div className={style.users}>
					{this.props.users.map((user) => {
						return (
							<div key={user.id} className={style.user}>
								<span>
									<div>
										<NavLink to={'/profile/' + user.id}>
											<img
												src={user.photos.small == null ? userPhoto : user.photos.small}
												className={style.userPhoto}
												alt=""
											/>
										</NavLink>
									</div>
									<div>
										{user.followed ? (
											<button
												disabled={this.props.inProgress.some((id) => id === user.id)}
												onClick={() => {
													this.props.unfollow(user.id);
												}}
											>
												Unfollow
											</button>
										) : (
											<button
												disabled={this.props.inProgress.some((id) => id === user.id)}
												onClick={() => {
													this.props.follow(user.id);
												}}
											>
												Follow
											</button>
										)}
									</div>
								</span>
								<span>
									<div>{user.name}</div>
								</span>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Users;

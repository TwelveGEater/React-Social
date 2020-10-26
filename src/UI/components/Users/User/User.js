import React from 'react';
import style from './User.module.css';
import userPhoto from '../../../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const User = ({ user, inProgress, unfollow, follow, addVisitedUser }) => {
	return (
		<div key={user.id} className={style.user}>
			<span>
				<div>
					<NavLink to={'/profile/' + user.id} onClick={() => addVisitedUser(user)}>
						<img
							src={user.photos.small == null ? userPhoto : user.photos.small}
							className={style.userPhoto}
							alt=""
						/>
					</NavLink>
				</div>
				<div>
					{user.followed ? (
						<Button
							variant="contained"
							color="secondary"
							disabled={inProgress.some((id) => id === user.id)}
							onClick={() => {
								unfollow(user.id);
							}}
						>
							Unfollow
						</Button>
					) : (
						<Button
							variant="contained"
							color="secondary"
							disabled={inProgress.some((id) => id === user.id)}
							onClick={() => {
								follow(user.id);
							}}
						>
							Follow
						</Button>
					)}
				</div>
			</span>
			<span>
				<div>{user.name}</div>
			</span>
		</div>
	);
};

export default User;

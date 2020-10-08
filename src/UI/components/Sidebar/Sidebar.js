import React from 'react';
import style from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Authorization from '../samples/Authorization/Authorization';
import { NavLink, withRouter } from 'react-router-dom';
import userPhoto from './../../../assets/images/user.png';

const Sidebar = (props) => {
	if (!props.isAuth) return <Authorization />;
	const goToLoginPage = () => {
		props.getLogout().then(() => {
			props.history.push(`/login`);
		});
	};
	return (
		<aside className={style.sidebar}>
			<div className={style.search_container}>
				<form action="/action_page.php" className="form-inline">
					<input type="text" placeholder="Search.." name="search" className="form-control" />
					<button type="button" className="btn btn-info">
						Search
					</button>
				</form>
			</div>
			<div className={style.loginBar}>
				<div className={style.loginBarHover}>
					<h1>{props.login}</h1>
					<FontAwesomeIcon className={style.loginBarArrow} icon={faAngleDown} size="2x" />
				</div>
			</div>

			<button onClick={goToLoginPage}>exit</button>
			{props.visitedUsers.length > 0 && (
				<div className={style.topFriends}>
					<h2>Last Visited</h2>
					<div className={style.friendList}>
						{props.visitedUsers.map((friend) => {
							return (
								<NavLink to={`/profile/${friend.id}`}>
									<div className={style.friendItem} key={friend.id}>
										<img
											src={friend.photos.small || userPhoto}
											className={style.friendPhoto}
											alt="user photo"
										/>
										<span>{friend.name}</span>
									</div>
								</NavLink>
							);
						})}
					</div>
				</div>
			)}
			<a href="#" target="_blank" className="tw-interactive tw-link">
				<img
					src="https://panels-images.twitch.tv/panel-30814134-image-79bc862e-042a-4581-871d-f94d09617a69"
					alt="Содержимое панели"
				/>
			</a>
			{/* <a href="#">Home</a>
			<a href="#">Friends</a>
			<a href="#">Messages</a> */}
		</aside>
	);
};

export default withRouter(Sidebar);

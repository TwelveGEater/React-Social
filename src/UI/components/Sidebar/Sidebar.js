import React from 'react';
import style from './Sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Authorization from '../samples/Authorization/Authorization';
import { withRouter } from 'react-router-dom';

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
			<div className={style.topFriends}>
				<h2>Friends</h2>
				<div className={style.friendList}>
					{props.sidebarData.friendList.map((friend) => {
						return (
							<div className={style.friendItem} key={friend.id}>
								<img src={friend.userPhoto} className={style.friendPhoto} alt="" />
								<span>{friend.username}</span>
							</div>
						);
					})}
				</div>
			</div>
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

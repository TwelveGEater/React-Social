import React from 'react';
import style from './DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
	return (
		<NavLink to={'/dialogs/' + props.dialog.id}>
			<div className={style.dialog}>
				<div className={style.dialog_data}>
					<div className={style.user_photo}>
						<img
							src="https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg"
							alt=""
						/>
					</div>

					<div>
						{/* <NavLink to={'/dialogs/' + props.dialog.id}> */}
						<div className={style.username}>
							<h3>{props.dialog.username}</h3>
						</div>

						<div className={style.user_message}>
							<span>{props.dialog.message}</span>
						</div>
					</div>
				</div>
				<time>{props.dialog.time}</time>
			</div>
		</NavLink>
	);
};

export default DialogsItem;

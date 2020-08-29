import React from 'react';
import style from './Dialog.module.css';
import { Form, Field } from 'react-final-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import userPhoto from '../../../../../assets/images/user.png';

const Dialog = (props) => {
	const sendMyMessage = (value) => {
		if (value.newMessage) {
			props.sendMessage(value.newMessage);
			value.newMessage = null;
		}
	};

	return (
		<div className={style.dialog}>
			<div className={style.dialogField}>
				<div className={style.userMessages}>
					<div className={style.user_photo}>
						<img
							src="https://iso.500px.com/wp-content/uploads/2016/11/stock-photo-159533631-1500x1000.jpg"
							alt=""
						/>
					</div>
					<span>Hello!</span>
				</div>
				{props.dialogData.map((message) => {
					return (
						<div className={style.myMessages} key={message.id}>
							<div className={style.user_photo}>
								<img src={props.profile ? props.profile.photos.small : userPhoto} alt="" />
							</div>
							<span>{message.message}</span>
						</div>
					);
				})}
			</div>
			<div className={style.newMessageField}>
				<Form onSubmit={sendMyMessage}>
					{({ handleSubmit }) => (
						<div className={style.newMessageContainer}>
							<form onSubmit={handleSubmit} className={style.newMessage}>
								<Field component="textarea" name="newMessage" placeholder="Message" />
								<div>
									<button className={style.sendButton} onClick={sendMyMessage} type="submit">
										<FontAwesomeIcon
											className={style.sendArrow}
											icon={faArrowCircleRight}
											size="2x"
										/>
									</button>
								</div>
							</form>
						</div>
					)}
				</Form>
			</div>
		</div>
	);
};

export default Dialog;

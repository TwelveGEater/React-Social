import React from 'react';
import { sendMessageActionCreator } from '../../../../../BLL/dialog-reducer';
import Dialog from './Dialog';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		dialogData: state.dialogPage.dialogData,
		newMessageBody: state.dialogPage.newMessageText,
		profilePhoto: state.profilePage.profile ? state.profilePage.profile.photos.large : null
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		sendMessage: (newMessage) => {
			dispatch(sendMessageActionCreator(newMessage));
		}
	};
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;

// const DialogContainer = (props) => {
// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				const state = store.getState();

// 				const sendMyMessage = () => {
// 					store.dispatch(sendMessageActionCreator());
// 				};
// 				const onNewMessageText = (text) => {
// 					store.dispatch(updateNewMessageTextActionCreator(text));
// 				};
// 				return (
// 					<Dialog
// 						sendMessage={sendMyMessage}
// 						updateNewMessageText={onNewMessageText}
// 						newMessageBody={state.dialogPage.newMessageText}
// 						dialogData={state.dialogPage.dialogData}
// 					/>
// 				);
// 			}}
// 		</StoreContext.Consumer>
// 	);
// };

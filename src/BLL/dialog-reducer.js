const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const initialState = {
	dialogData: [
		{
			id: '1',
			message:
				"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an  unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
			time: '12:55'
		}
	],
	userData: {
		username: 'Pasha @PashaBest'
	}
};

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			return {
				...state,
				dialogData: [
					...state.dialogData,
					{
						id: 5,
						message: action.newMessage,
						time: '12:55'
					}
				]
			};

		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newMessageText: action.newMessageText
			};
		default:
			return state;
	}
};

export const sendMessageActionCreator = (newMessage) => {
	return { type: SEND_MESSAGE, newMessage };
};

export default dialogReducer;

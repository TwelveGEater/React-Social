import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';

const store = {
	_state: {
		dialogsPage: {
			dialogsList: [
				{
					id: '1',
					username: 'Pasha @PashaBest',
					message:
						"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an  unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
					time: '12:55'
				},
				{
					id: '2',
					username: 'Cloud9 @Cloud9',
					message:
						"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an  unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
					time: '12:55'
				},
				{
					id: '3',
					username: 'Cr1t- @Cr1tdota',
					message:
						"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an  unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
					time: '12:55'
				},
				{
					id: '4',
					username: 'Liquipedia Dota 2 @LiquipediaDota',
					message:
						"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web  designs. The passage is attributed to an  unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book",
					time: '12:55'
				}
			]
		},
		dialogPage: {
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
			},
			newMessageText: ''
		},
		profilePage: {
			posts: [
				{
					id: 1,
					likeCount: 10,
					postText: 'Hello'
				},
				{
					likeCount: 20,
					postText: "YO! What's up?"
				},
				{
					id: 2,
					likeCount: 100,
					postText: "YO! What's up?"
				},
				{
					id: 3,
					likeCount: 5,
					postText: "YO! What's up?"
				},
				{
					id: 4,
					likeCount: 12,
					postText: "YO! What's up?"
				}
			],
			newPostText: ''
		},
		sidebarPage: {
			friendList: [
				{
					id: '1',
					username: 'Pasha @PashaBest',
					userPhoto: 'https://pbs.twimg.com/profile_images/1231048883683418114/QJ580r2t_400x400.jpg'
				},
				{
					id: '2',
					username: 'Cloud9 @Cloud9',
					userPhoto: 'https://pbs.twimg.com/profile_images/1231048883683418114/QJ580r2t_400x400.jpg'
				},
				{
					id: '3',
					username: 'Cr1t- @Cr1tdota',
					userPhoto: 'https://pbs.twimg.com/profile_images/1231048883683418114/QJ580r2t_400x400.jpg'
				}
			]
		}
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {},

	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogPage = dialogReducer(this._state.dialogPage, action);
		this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

		this._callSubscriber(this._state);
	}
};

export default store;

const initialState = {
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
};

const sidebarReducer = (state = initialState, action) => {
	return state;
};

export default sidebarReducer;

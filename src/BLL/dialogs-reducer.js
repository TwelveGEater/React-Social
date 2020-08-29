const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
	return state;
};

export default dialogsReducer;

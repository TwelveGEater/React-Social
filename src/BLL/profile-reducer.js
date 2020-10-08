import { FORM_ERROR } from 'final-form';
import { profileAPI } from './../DAL/api';

const ADD_POST = 'react-social/profile/ADD-POST';
const SET_USER_PROFILE = 'react-social/profile/SET-USER-PROFILE';
const SET_USER_STATUS = 'react-social/profile/SET-USER-STATUS';
const SET_USER_PHOTO = 'react-social/profile/SET-USER-PHOTO';
const IS_EDIT_MODE = 'react-social/profile/IS-EDIT-MODE';

const initialState = {
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
	profile: null,
	userStatus: '',
	editModeProfile: false
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [
					...state.posts,
					{
						id: 5,
						likeCount: 0,
						postText: action.newPostText
					}
				]
			};
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile };
		case SET_USER_STATUS:
			return { ...state, userStatus: action.userStatus };
		case SET_USER_PHOTO:
			return { ...state, profile: { ...state.profile, photos: action.userPhotos } };
		case IS_EDIT_MODE:
			return { ...state, editModeProfile: action.value };
		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => {
	return { type: ADD_POST, newPostText };
};

export const setUserProfile = (profile) => {
	return { type: SET_USER_PROFILE, profile };
};

export const setUserStatus = (userStatus) => {
	return { type: SET_USER_STATUS, userStatus };
};

export const setUserPhoto = (userPhotos) => {
	return { type: SET_USER_PHOTO, userPhotos };
};

export const isEditMode = (value) => {
	return { type: IS_EDIT_MODE, value };
};

export const getUserProfile = (userID) => async (dispatch) => {
	const data = await profileAPI.getProfile(userID);
	dispatch(setUserProfile(data));
	return data;
};

export const getUserStatus = (userID) => async (dispatch) => {
	const data = await profileAPI.getUserStatus(userID);
	dispatch(setUserStatus(data));
};

export const setStatus = (status) => async (dispatch) => {
	const data = await profileAPI.setStatus(status);
	if (data.resultCode === 0) {
		dispatch(setUserStatus(status));
	}
};

export const setPhoto = (img) => async (dispatch) => {
	const data = await profileAPI.setPhoto(img);
	if (data.resultCode === 0) {
		dispatch(setUserPhoto(data.data.photos));
	}
};

export const setProfileData = (data) => async (dispatch) => {
	const response = await profileAPI.setProfileData(data);
	if (response.resultCode === 0) {
		const userProfile = await dispatch(getUserProfile(data.userId));
		dispatch(isEditMode(false));
	} else {
		return { [FORM_ERROR]: 'Login Failed' };
	}
};

export default profileReducer;

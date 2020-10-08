import React from 'react';
import store from './../../../../BLL/redux-store';

export const isPageOwner = {
	check() {
		return store.getState().profilePage.profile.userId === store.getState().auth.id ? true : false;
	}
};

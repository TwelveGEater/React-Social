import * as axios from 'axios';

const replicaAxios = axios.create({
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	withCredentials: true,
	headers: {
		'API-KEY': 'c3da59ca-5c4f-4aec-a050-4825d52fa10c'
	}
});

export const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return replicaAxios.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data);
	},
	unfollowRequest(userID) {
		return replicaAxios.delete(`follow/${userID}`).then((response) => response.data);
	},
	followRequest(userID) {
		return replicaAxios.post(`follow/${userID}`).then((response) => response.data);
	}
};

export const authAPI = {
	me() {
		return replicaAxios.get(`auth/me`).then((response) => {
			return response.data;
		});
	},
	login(email, password, rememberMe) {
		return replicaAxios.post(`auth/login`, { email, password, rememberMe }).then((response) => {
			return response;
		});
	},
	logout() {
		return replicaAxios.delete(`auth/login`);
	}
};

export const profileAPI = {
	getProfile(userID) {
		return replicaAxios.get(`profile/${userID}`).then((response) => {
			return response.data;
		});
	},
	getUserStatus(userID) {
		return replicaAxios.get(`profile/status/${userID}`).then((response) => {
			return response.data;
		});
	},
	setStatus(status) {
		return replicaAxios.put(`/profile/status`, { status }).then((response) => {
			return response.data;
		});
	},
	setPhoto(img) {
		const formData = new FormData();
		formData.append('image', img);
		return replicaAxios
			.put(`/profile/photo`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data'
				}
			})
			.then((response) => {
				return response.data;
			});
	},
	setProfileData(data) {
		return replicaAxios.put(`/profile`, data).then((response) => {
			return response.data;
		});
	}
};

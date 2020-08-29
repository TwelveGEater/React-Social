import React from 'react';
import { addPostActionCreator } from '../../../../BLL/profile-reducer';
import Posts from './Posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText,
		postPhoto: !state.profilePage.profile ? null : state.profilePage.profile.photos.small
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (newPostText) => {
			dispatch(addPostActionCreator(newPostText));
		}
	};
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;

// const PostsContainer = (props) => {
// 	const state = props.store.getState();

// 	const addPost = () => {
// 		props.store.dispatch(addPostActionCreator());
// 	};

// 	const postOnChange = (text) => {
// 		props.store.dispatch(updateNewPostTextActionCreator(text));
// 	};

// 	return (
// 		<Posts
// 			addPost={addPost}
// 			updateNewPostText={postOnChange}
// 			posts={state.profilePage.posts}
// 			newPostText={state.profilePage.newPostText}
// 		/>
// 	);
// };

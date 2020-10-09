import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css';
import { Form, Field } from 'react-final-form';
import { Container, Paper } from '@material-ui/core';

const Posts = (props) => {
	const addPost = (values) => {
		if (values.postBody) {
			props.addPost(values.postBody);
			values.postBody = null;
		}
	};
	return (
		<Paper elevation={3} style={{ marginTop: '50px' }}>
			<div>
				<Form onSubmit={addPost}>
					{({ handleSubmit }) => (
						<div className={style.addPostContainer}>
							<form onSubmit={handleSubmit} className={style.addPost}>
								<Field component="textarea" name="postBody" placeholder="What new?" />
								<div>
									<button className="btn btn-primary" onClick={addPost} type="submit">
										Post
									</button>
								</div>
							</form>
						</div>
					)}
				</Form>
				<section className={style.posts}>
					{props.posts.map((posts) => (
						<Post
							postText={posts.postText}
							key={posts.likeCount}
							likeCount={posts.likeCount}
							postPhoto={props.postPhoto}
						/>
					))}
				</section>
			</div>
		</Paper>
	);
};

export default Posts;

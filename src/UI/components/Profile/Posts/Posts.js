import React from 'react';
import Post from './Post/Post';
import style from './Posts.module.css';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Hidden, Paper, Grid, Button } from '@material-ui/core';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1)
		}
	},
	postForm: {
		margin: theme.spacing(4),
		width: '100%'
	},
	btnPost: {
		marginTop: '20px'
	}
}));

const Posts = (props) => {
	const classes = useStyles();
	const formik = useFormik({
		initialValues: {
			postBody: ''
		},
		onSubmit: (value, { resetForm }) => {
			if (value.postBody) {
				props.addPost(value.postBody);
				resetForm({});
			}
		}
	});

	return (
		<Paper elevation={3} style={{ marginTop: '50px' }}>
			<div>
				<Grid container className={classes.addPostContainer}>
					<form onSubmit={formik.handleSubmit} className={classes.postForm} noValidate autoComplete="off">
						<TextField
							name="postBody"
							placeholder="What new?"
							fullWidth
							multiline
							value={formik.values.postBody}
							onChange={formik.handleChange}
							type="textarea"
						/>

						<Grid item>
							<Button variant="outlined" color="primary" className={classes.btnPost} type="submit">
								Post
							</Button>
						</Grid>
					</form>
				</Grid>

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

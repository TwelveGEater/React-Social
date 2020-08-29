import React from 'react';
import style from './Post.module.css';
const Post = React.memo((props) => {
	return (
		<section className={style.post}>
			<a href="#">
				<img src={props.postPhoto} alt="avatar_mini" />
			</a>
			<article>
				<span className={style.postText}>{props.postText}</span>
				<div className={style.like}>
					<div className={style.heart} />
					<div className={style.likeCount}>{props.likeCount}</div>
				</div>
			</article>
		</section>
	);
});

export default Post;

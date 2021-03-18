import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}<br />
				{props.post.stamp}<br />
				<button>Like</button> {props.post.likes} Likes
			</div>
		</div>
	)
}

export default Post;

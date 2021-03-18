import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}<br />
				{"posted on: " + props.post.stamp.substring(8, 10) + "/"}
				{props.post.stamp.substring(5, 7) + "/"}
				{props.post.stamp.substring(0, 4)}
				{" at: " + props.post.stamp.substring(11, 16)}
			</div>
		</div>
	)
}

export default Post;

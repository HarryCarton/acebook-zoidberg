import React from 'react';

const Post = (props) => {
	return (
		<div className='post-main'>
			<div className='post-content'>
				{props.post.content}<br />
				{props.post.stamp}
			</div>
		</div>
	)
}

export default Post;

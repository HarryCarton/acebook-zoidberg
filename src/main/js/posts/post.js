import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.content = props.post.content;
        this.stamp = props.post.stamp;
        this.likes = props.post.likes;
    }

    render() {
       return (
       		<div className='post-main'>
       			<div className='post-content'>
       				{this.content}<br />
       				{this.stamp}<br />
       				<button>Like</button> {this.likes} Likes
       			</div>
       		</div>
       	)
    }
}

export default Post;

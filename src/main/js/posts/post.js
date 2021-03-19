import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.id = props.post.id;
        this.content = props.post.content;
        this.stamp = props.post.stamp;
        this.likes = props.post.likes;
        this.host = 'http://' + window.location.host + '/api/posts/' + props.post.id;
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(this.host, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({likes: this.likes += 1}),
            }).then((response) => {
                return response.json();
            }).then((data) => {
                this.props.updatePosts(data);
            })
        }


    render() {
       return (
       		<div className='post-main'>
       			<div className='post-content'>
       				{this.content}<br />
       				{this.stamp}<br />
       				<form onSubmit={this.handleSubmit}>
       				    <button type="submit">Like</button> {this.likes} Likes
       				</form>
       			</div>
       		</div>
       )
    }
}

export default Post;

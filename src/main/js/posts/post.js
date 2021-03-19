import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.content = props.post.content;
        this.stamp = props.post.stamp;
        this.likes = props.post.likes;
        this.href = props.post._links.self.href;
    }

    handleSubmit(event) {
        event.preventDefault();
        let currentLikes = parseInt(event.target.children[1].innerHTML);
        currentLikes += 1;
        currentLikes = currentLikes.toString();
        fetch(event.target.id, {
            method: 'PATCH',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({likes: currentLikes})
        }).then((response) => {
            return response.json();
        }).then((data) =>{
            window.location.reload(true);
        })
    }

    render() {
       return (
       		<div className='post-main'>
       			<div className='post-content'>
       				{this.content}<br />
       				{this.stamp}<br />
       				<form id={this.href} onSubmit={this.handleSubmit}>
       				    <button type='submit'>Like</button>
       				    <label class='likes'>{this.likes}</label> Likes
       				</form>
       			</div>
       		</div>
       )
    }
}

export default Post;

//
//    handleSubmit(event) {
//        event.preventDefault();
//        fetch(this.host, {
//            method: 'PATCH',
//            headers: {'Content-Type': 'application/json'},
//            body: JSON.stringify({likes: this.likes += 1}),
//            }).then((response) => {
//                return response.json();
//            }).then((data) => {
//                this.props.updatePosts(data);
//            })
//        }
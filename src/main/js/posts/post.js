import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.content = props.post.content;
        this.stamp = props.post.stamp;
        this.likes = props.post.likes;
        this.href = props.post._links.self.href;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let newLikes = this.likes += 1;
        newLikes = newLikes.toString();
        fetch(this.href, {
            method: 'PATCH',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body: JSON.stringify({likes: newLikes})
        }).then((response) => {
            return response.json();
        }).then((data) =>{
            this.setState({});
        })
    }

    render() {
       return (
       		<div className='post-main'>
       			<div className='post-content'>
       				{this.content}<br />
       				{this.stamp}<br />
       				<form id={this.href} onSubmit={this.handleSubmit}>
       				    <button type='submit'>Like</button> {this.likes} {
       				        this.likes === 1 ? "Like" : "Likes"
       				    }
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
import React from 'react';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

 handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:8080/api/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({content: this.input.current.value}),
    }).then((response) => {
        return response.json();
    }).then((data) => {
        this.props.updatePosts(data);
        this.input.current.value= '';
    })
  }

  render() {
    return (
        <div className="posts-form">
            <form onSubmit={this.handleSubmit}>
                <textarea id="post" rows = "5" cols="35" wrap="hard" ref={this.input} /><br/>
                <button type="submit">Post</button>
            </form>
        </div>
    );
  }
}

export default NewPost; 

import React from 'react';
const client = require('../client');

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {content: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({content: event.target.value});
  }

  handleSubmit(event) {
      client({
				method: 'POST',
				path: response.entity._links.self.href,
				entity: Post(this.state.content),
				headers: {'Content-Type': 'application/json'}
			})
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.content} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewPost;

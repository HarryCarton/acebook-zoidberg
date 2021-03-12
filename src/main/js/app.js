const React = require('react');
const ReactDOM = require('react-dom');

import PostsBuilder from './posts/postsBuilder'
import NewPost from './posts/newPost'

class App extends React.Component {

  render() {
    return (
        <div>
          <NewPost />
          <PostsBuilder />
        </div>
    )
  }
}

ReactDOM.render(
	<App />,
	document.getElementById('app')
)

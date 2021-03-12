import React from 'react'; // this file uses React framework
const client = require('../client'); // require the 'client' file from the dir above

class NewPost extends React.Component {
    constructor(props) {
        super(props); // inherit the prop(ertie?)s from Component
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit(event) { // this is the function that will be fired upon submission of the form
        event.preventDefault(); // prevent the default action and use this one instead
        fetch('http://localhost:8080/api/posts', { // use the fetch method (research)
            method: 'POST', // Obviously use the POST http request
            headers: {
                'Content-Type': 'application/json', // send it as a json. Does this let the server know that it can accept it because it is json?
            },
            body: JSON.stringify({content: this.input.current.value}), // Sting-ify (make a string) of the object so it is easier for the server to read?
        }).then((response) => {return response.json()}).then((data) => {this.props.updatePosts(data)} ) // no idea what this line is doing. Yet.
    }

    render() { // renders a component with a form in it
        return(
        <form onSubmit={this.handleSubmit}> // On submission of this form, fire the handleSubmit function
            <label>
                Name:
                <input type="text" ref={this.input} /> // This may need to be changed for the feature request where posts can have new lines
            </label>
            <input type="submit" value="Submit" /> // onSubmit listens for this
        </form>
        );
    }
}

export default NewPost; // ???

// CODE USED FROM EDDIE'S BRANCH ON acebook-template

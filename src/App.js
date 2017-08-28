// React, Redux, React-Redux, React-Router, Jest and Redux Form

/*
 Task 1
 Setting up the environment
 For this task you will need to setup a simple NodeJS server to implement
 server-side rendering. We recommend using the Express.
 Please install Webpack and setup Babel for your application.
 Try to make your configuration simple, as for the small SPA.
 You will also need to install React, Redux, React-Redux, React-Router, Jest
 and Redux Form.
 */

import React, {Component} from 'react';
import './App.css';

//Components
import BookList from './componets/books/bookList';
import Movie from './componets/movie/movie';
import Search from './componets/search/search';
import TestList from './componets/test-list';
import TestSelected from './componets/test-selected';



import axios from 'axios';

//Data
// import booksData from './dummydata/data.json';

var searchStyles = {
    border: "1px solid"
}


function Header(props) {
    return (
        <div style={searchStyles}>
            {props.name}
            <Search movieSearch={props.movieSearch}/>
            ================
        </div>
    )
}

function MainContent(props) {

    console.log("props.response",props.response);

    return (
        <div>
            {props.name}
            <Movie response={props.response}/>
        </div>
    )
}

function Footer(props) {
    return (
        <div>
            {props.name}
        </div>
    )
}

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            movie:null,
            mode:true
        };
    }

    handleResponse(data) {
        this.setState({movie: data});
        console.log("chenage state app.js",this.state.movie);
    }

    movieSearch({term = 'Quentin%20Tarantino',type}) {

        axios.get(`https://netflixroulette.net/api/api.php?${type}=${term}`)
            .then((response) => {
                this.handleResponse(response.data);
            })

    }


    render() {
        return (
            <div className="App">
                <TestList />
                <TestSelected/>
                <Header name="Header" movieSearch={this.movieSearch.bind(this)}/>
                <MainContent name="MainContent" response={this.state.movie}/>
                <Footer name="Foooter"/>

            </div>
        );
    }
}

export default App;

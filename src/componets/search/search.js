import React, {Component} from 'react';
import axios from 'axios';

import Movie from '../movie/movie';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            mode:'director'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        console.log("SEARCH CONSTRUCTOR");
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.movieSearch(this.state.value);
    }

    componentDidMount() {
        this.props.movieSearch({
            term:'Quentin%20Tarantino',
            type:this.state.mode
        });
    }

    movieSearch() {
        this.props.movieSearch({
            term:this.state.value,
            type:this.state.mode
        });
    }

    render() {

        return (
            <div className="search" onSubmit={this.handleSubmit}>
                <form>
                    <input type="text" onChange={this.handleChange} value={this.state.value}
                           placeholder="Enter smth..."/>

                    <div className="radio">
                        <label>
                            <input type="radio" value="director" checked={true} />
                            Director
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                            <input type="radio" value="title" />
                            Title
                        </label>
                    </div>
                </form>
            </div>
        )
    }
}

export default Search;

import React, { Component } from 'react';
import Loading from '../utils/loading';

class MovieList extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        console.log("Movie: "+this.state.movie)

        if(!this.state.movie) {
            return <Loading />
        } else {

            return (
                <div className="movie-list">
MovieList
                </div>
            );
        }


    }
}

export default MovieList;

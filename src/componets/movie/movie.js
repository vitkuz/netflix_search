import React, { Component } from 'react';
import Loading from '../utils/loading';
import MovieList from '../movie/movieList';


var videoStyles = {
    border:'1px solid red',
    marginBottom:'20px'
}

class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: props.response
        }

        console.log('Movie state',props);
    }

    render() {



        if (!this.props.response) {
            return <Loading />
        } else if (Array.isArray(this.props.response)) {

            const movies = this.props.response.map((video) => {
                return <div key={video.show_title} className="video" style={videoStyles}><img src={video.poster}/>{video.summary}</div>
            })

            return (

                <div className="movie-list">
                    PRINT LIST
                    {movies}
                </div>

            );

        }
        else {

            var {
                show_title,
                category,
                poster,
                release_year,
                summary
            } = this.props.response;

            return (
                <div className="movie">
                    PRINT OBJECT

                    <span>
                        {category}
                    </span>
                    <span>
                        <img src={poster}/>
                    </span>
                    <span>
                        {release_year}
                    </span>
                    <span>
                        {summary}
                    </span>
                </div>
            );
        }

    }
}

export default Movie;

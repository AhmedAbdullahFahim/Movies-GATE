import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Container, Row } from 'react-bootstrap'
import NavBar from '../Navbar/container'
import MovieItem from './view'

class Home extends Component{

    state = {
        movies: [],
        genres: [],
        moviesFilter: [],
        callingMoviesApi: true,
        callingGenresApi: true,
        isLoading: false
    }

    componentDidMount(){
        const options = {
            url: 'https://api.themoviedb.org/3/list/1?api_key=dc793ed90ff7391d980cf3d7c9f27fef&language=en-US',
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            }
        };

        const genreOptions = {
            url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=dc793ed90ff7391d980cf3d7c9f27fef&language=en-US',
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json;charset=UTF-8'
            }
        };

        axios(genreOptions)
            .then((result) => {
                this.setState({
                    genres: result.data,
                    callingGenresApi: false
                })
            }).catch((err) => {
                console.log(err);
            });
        axios(options)
            .then((result) => {
                this.setState({
                    movies: result.data.items,
                    callingMoviesApi: false,
                }, () => this.setState({ moviesFilter: this.state.movies }))
            }).catch((err) => {
                console.log(err);
            });
    }

    filter = (cat) => {
        if (cat === 'all'){
            this.setState({ moviesFilter: this.state.movies })
        }
        else if(cat === 'action'){
            this.setState({ moviesFilter: this.state.movies.filter((movie) => movie.genre_ids.includes(28))})
        }
        else if(cat === 'drama'){
            this.setState({ moviesFilter: this.state.movies.filter((movie) => movie.genre_ids.includes(18))})
        }
        else if(cat === 'adventure'){
            this.setState({ moviesFilter: this.state.movies.filter((movie) => movie.genre_ids.includes(12))})
        }
        else if(cat === 'comedy'){
            this.setState({ moviesFilter: this.state.movies.filter((movie) => movie.genre_ids.includes(35))})
        }
        else if(cat === 'scifi'){
            this.setState({ moviesFilter: this.state.movies.filter((movie) => movie.genre_ids.includes(878))})
        }
    }

    overview(title, oview, imgSrc){
        Swal.fire({
            title: title,
            text: oview,
            imageUrl: imgSrc,
            imageWidth: 600,
            imageHeight: 400,
            confirmButtonColor: '#0B0C10',
            background: '#1F2833',
            imageAlt: 'Movie Poster',
          })
    }

    render(){

        const movieItem = this.state.moviesFilter.map((item) => ( 
            <MovieItem 
                movies={item}
                key={item.id}
                title={item.original_title}
                date={item.release_date}
                rate={item.vote_average}
                imgSrc={item.poster_path}
                callingMoviesApi={this.state.callingMoviesApi}
                isLoading={this.state.isLoading}
                overview={() => this.overview(item.original_title, item.overview, 'https://image.tmdb.org/t/p/w500' + item.poster_path)}
            /> 
        ))

        return(
            <>
                <NavBar
                    filter={this.filter}
                />
                <Container>
                    <Row>
                        {movieItem}
                    </Row>
                </Container>
            </>
        );
    }
}

export default Home;
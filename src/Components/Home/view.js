import React from 'react'
import ReactLoading from 'react-loading'
import { Card, Col } from 'react-bootstrap'
import './style.css'

function MovieItem(props) {
    return (
        props.callingMoviesApi === true ? 
            <ReactLoading 
                type={"bubbles"} 
                color={"white"}  
                height={'20%'} 
                width={'20%'}
            /> 
        :
            <div className="justify-content-center movieDiv">
                <Col md={6} xs={12}>
                    <Card style={{ width: '18rem' }} className="movieCard">
                        <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500" + props.imgSrc} alt="Movie Poster" />
                        <Card.Body className="movieBody text-center">
                            <Card.Title>{props.title}</Card.Title>
                            <Card.Text>
                                {props.date}
                            </Card.Text>
                            <Card.Text>
                                {props.rate}
                            </Card.Text>
                            <Card.Link variant="bottom" className="view" onClick={props.overview}>Overview</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
    );
}

export default MovieItem
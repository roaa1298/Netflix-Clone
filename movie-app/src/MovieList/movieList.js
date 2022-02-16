import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';
import Movie from '../Movie/movie';

function MovieList(){
    const [data, setData] = useState([]);

    const getAllMovies = async () => {
        return await axios.get(`https://movie-roaa.herokuapp.com/trending`)
            .then(result => {
                return result.data;
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(()=>{
        void(async()=>{
          let data = await getAllMovies();
          setData(data);
        })();   
    },[]);

    return(
        <>
        <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map((ele) => (
                            <Movie ele={ele}/>
                        ))
                    }
                </Row>
            </Container>
            
            {
                !data.length && <div><h2>No Such Results, Please try again later</h2></div>
            }
        </>
    );
}
export default MovieList;
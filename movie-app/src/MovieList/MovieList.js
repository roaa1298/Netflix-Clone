import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Row,Card, Col } from 'react-bootstrap';
import Movie from '../Movie/Movie';

function MovieList(){
    const [data, setData] = useState([]);

    const getAllMovies = async () => {
        try {
            const res= await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=b9aff9f95537f4e2ba6688719f5c1bef&language=en-US`)
            setData(res.data.results);
        } catch (error) {
            
        }
        
           
    }

    useEffect(()=>{
        getAllMovies()
    },[]);
console.log(data);
    return(
        <>
        <Container className='div-container'>
                <Row md={3}>
                    {
                        data.length && data.map(m=>(
                            <Movie ele={m}/>
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
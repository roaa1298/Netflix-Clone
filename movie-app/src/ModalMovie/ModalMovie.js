import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import { useRef } from 'react';

function ModalMovie({cardInfo, show, handleClose}){
    const commentInputRef=useRef("");

    const addToFav = async ()=>{
        let comment = commentInputRef.current.value;
       let fav = {id:cardInfo.id,title:cardInfo.title, overview:cardInfo.overview, release_date:cardInfo.release_date, poster_path:cardInfo.poster_path,comment:comment}
      
       await axios.post(`https://movie-roaa.herokuapp.com/addMovie`,fav)
                  .then(()=>{
                      console.log("Done :) ");
                  }).catch((err)=>{
                      console.log(err);
                  });
  
   }

    return(
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img alt="" src={`https://image.tmdb.org/t/p/w500${cardInfo.poster_path}`} />
                    <div>
                        <label htmlFor="op">Write a Comment</label>
                        <input ref={commentInputRef} placeholder="Write a Comment" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={()=>{
                        addToFav();
                        handleClose();
                    }}> Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMovie;
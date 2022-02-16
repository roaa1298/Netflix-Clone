import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';

function UpdateModal({show,handleClose,ele,getFavMovie,commentInput,setCommentInput}){

    const update = async(id)=>{

        let updated = {id:ele.id, title:ele.title, overview:ele.overview, release_date:ele.release_date, poster_path:ele.poster_path, comment:commentInput}
        
      await axios.put(`https://movie-roaa.herokuapp.com/UPDATE/${id}`,updated)
                  .then(()=>{
                    getFavMovie();
                  }).catch(err=>{
                      console.log(err);
                  })
    }

    return(
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <div>
                    <h3>{ele.title}</h3>
                    <img alt="" src={`https://image.tmdb.org/t/p/w500${ele.poster_path}`} />
                    </div>
                    <div>
                        <label htmlFor="op">Write Your Comment</label>
                        <textarea value={commentInput} onChange={(e) => setCommentInput(e.target.value)} placeholder="Write Your Comment" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                     onClick={()=>{
                        update(ele.id);
                        handleClose();
                     }}
                    >
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default UpdateModal;
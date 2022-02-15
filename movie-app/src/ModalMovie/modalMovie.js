import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap';

function ModalMovie({cardInfo, show, handleClose}){
    return(
        <>
        <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add It To Favorite</Modal.Title>
                </Modal.Header>
                <Modal.Body className="body">
                    <h3>{cardInfo.title}</h3>
                    <img alt="" src={cardInfo.poster_path} />
                    <div>
                        <label htmlFor="op">Write a Comment</label>
                        <input placeholder="Write a Comment" type="text" id="op" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"> Add To Favorite </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalMovie;
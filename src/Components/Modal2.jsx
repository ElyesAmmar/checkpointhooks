import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function OpenModal({add}) {
  const [show, setShow] = useState(false);
  const [title , setTitle] =useState("")
  const [posterURL , setPosterURL] =useState("")
  const [description , setDescription] =useState("")
  const [rating , setRating] =useState("")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
         <Modal.Body >
          <form>
              <label>
              Title:
              <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
              </label>
              <label>
              PosterURL:
              <input type="text" name="PosterURL" onChange={(e)=>setPosterURL(e.target.value)}  />
              </label>
              <label>
              Description:
              <input type="text" name="Description" onChange={(e)=>setDescription(e.target.value)}  />
              </label>
              <label>
              rating:
              <input type="number" name="rating" onChange={(e)=>setRating(e.target.value)}  />
              </label>
              
          </form>
     

         </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>add({id:Math.random(),title,posterURL,description,rating})}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OpenModal;
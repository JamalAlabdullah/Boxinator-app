
import { useState } from 'react';
import {Modal, Form, Button } from 'react-bootstrap'
import '../PackageModal/packagemodal.css'

import ColorPicker from './ColorPicker';
import DropdownWeight from '../Dropdown/DropdownWeight';
import DropdownDestination from '../Dropdown/DropdownDestination';

const PackageModal = ({setIsOpen}) => {
const handleClose = () => setIsOpen(false);

const [showColorPicker, setShowColorPicker] = useState(false)


return (

  <Modal show={setIsOpen} onHide={handleClose}>

<Modal.Header>
      <Modal.Title id="modal-title">Who is the lucky receiver?</Modal.Title>
      <button id="modal-close-button" onClick={handleClose}>X</button>
    </Modal.Header>
    <Modal.Body id="modal-body">
      {/* RECEIVER NAME*/}
      <Form id="form-container">
        <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Receiver name</Form.Label>
          <Form.Control
          id="form-control"
            type="name"
            autoFocus
          />
        </Form.Group>

             {/* BOX COLOR*/}
             <label id="form-label">Box colour</label>
          <Button id="button-color-box" onClick={() => setShowColorPicker(true)}></Button>
          {showColorPicker && <ColorPicker  setShowColorPicker/>}
         

        {/* WEIGHT OPTIONS DROPDOWN*/}
            <DropdownWeight/>
       

          {/* DESTINATION DROPDOWN*/}
           <DropdownDestination/>

          
          <Button>Send package</Button>
      </Form>
    </Modal.Body>
  </Modal>
    
    
    )}

export default PackageModal

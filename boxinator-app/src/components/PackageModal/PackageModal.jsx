
import {Modal, Form, Dropdown, Button } from 'react-bootstrap'
import '../PackageModal/packagemodal.css'

const PackageModal = ({setIsOpen}) => {


const handleClose = () => setIsOpen(false);

return (

  <Modal show={setIsOpen} onHide={handleClose}>

<Modal.Header>
      <Modal.Title id="modal-title">Fill out form to send a package</Modal.Title>
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
           <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Box colour</Form.Label>
          <Form.Control
            type="name"
            autoFocus
          />
        </Form.Group>



        {/* WEIGHT OPTIONS DROPDOWN*/}

        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-toggle">
        Weight
      </Dropdown.Toggle>

      <Dropdown.Menu id="dropdown-menu">
        <Dropdown.Item id="dropdown-item" href="#/action-1">Basic 1 kg</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Humble 2 kg</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Deluxe 5 kg</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Premium 8 kg</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
       



          {/* DESTINATION DROPDOWN*/}
          <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Destination
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Norway</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sweden</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Denmark</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Finland</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

<Button>Send package</Button>


      </Form>
    </Modal.Body>

<Button onClick={handleClose}>X</Button>
  </Modal>
    
    
    )}

export default PackageModal

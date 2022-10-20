import {Modal } from 'react-bootstrap'
import './packagemodal.css';
import TotalAmount from '../Form/TotalAmount';

import PackageForm from '../Form/PackageForm';





const PackageModal = ({setIsOpen}) => {
const handleClose = () => setIsOpen(false);

return (

  <Modal show={setIsOpen} onHide={handleClose}>

<Modal.Header>
      <Modal.Title id="modal-title">Who is the lucky receiver?</Modal.Title>
      <button id="modal-close-button" onClick={handleClose}>X</button>
    </Modal.Header>
    <Modal.Body id="modal-body">
     <PackageForm/>

 

    </Modal.Body>
    <Modal.Footer>
       <TotalAmount/>
    </Modal.Footer>

  </Modal>
    
    
    )}

export default PackageModal

import {Modal } from 'react-bootstrap'
import DebugForm from './DebugForm';

const DebugModal = ({setIsOpen}) => {
    const handleClose = () => setIsOpen(false);
    
    
    
    return (
    
      <Modal show={setIsOpen} onHide={handleClose}>
    
    <Modal.Header>
          <Modal.Title id="modal-title">Change status on shipment</Modal.Title>
          <button id="modal-close-button" onClick={handleClose}>X</button>
        </Modal.Header>
        <Modal.Body id="modal-body">
         <DebugForm/>
    
     
    
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
    
      </Modal>
        
        
        )}
    
    export default DebugModal
    
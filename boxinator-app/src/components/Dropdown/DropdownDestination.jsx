import { Dropdown } from "react-bootstrap"; 
import '../PackageModal/packagemodal.css';
 
 // DESTINATION DROPDOWN//

 const DropdownDestination = () => {
    return <div>
<Dropdown>
          <label id="form-label">Destination</label>
      <Dropdown.Toggle id="dropdown-basic">
        Destination
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Norway</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sweden</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Denmark</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Finland</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    </div>
}

export default DropdownDestination;
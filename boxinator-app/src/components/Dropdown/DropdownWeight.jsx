import { Dropdown } from "react-bootstrap";
import '../PackageModal/packagemodal.css'

//WEIGHT OPTIONS DROPDOWN//

export const DropdownWeight = () => {
    return <div>
            <Dropdown>
          <label id="form-label">Weight</label>
      <Dropdown.Toggle  id="dropdown-toggle">
        Weight
      </Dropdown.Toggle>
      <Dropdown.Menu id="dropdown-menu">
        <Dropdown.Item id="dropdown-item" href="#/action-1">Basic 1 kg</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Humble 2 kg</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Deluxe 5 kg</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Premium 8 kg</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
}

export default DropdownWeight;




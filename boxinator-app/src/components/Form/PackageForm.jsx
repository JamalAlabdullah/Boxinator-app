
import { Form, Button } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import '../Modal/packagemodal.css'


const packageConfig = {
  required: true,
}
const PackageForm = () => {
    const {register, handleSubmit} = useForm()

  const onSubmit = (data )=> {
    console.log(data)
  }
 return <div>
     {/* RECEIVER NAME*/}
     <Form onSubmit={handleSubmit(onSubmit)} id="form-container" >
        <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Receiver name</Form.Label>
          <Form.Control
          type="text"
          name="name"
          placeholder=" receiver name..."
          { ... register("name", packageConfig)}
          />
        </Form.Group>

         {/* BOX COLOR*/}
        <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Box color</Form.Label>
          <Form.Control
          //id="button-color-box"
          type="color"
          name="color"
          { ... register("color", packageConfig)}
          />
        </Form.Group>

      
        {/* WEIGHT OPTIONS SELECT*/}
         <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Weight</Form.Label>
          <Form.Select 
          name="weight" 
          { ... register("weight", packageConfig)} >
          <option></option> 
          <option value="Basic">Basic 1 kg</option>
          <option value="Humble">Humble 2 kg</option>
          <option value="Deluxe">Deluxe 5 kg</option>
          <option value="Premium">Premium 8 kg</option>
          </Form.Select> 
        </Form.Group>

          {/* DESTINATION SELECT*/}
          <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Destination</Form.Label>
          <Form.Select name="destination" { ... register("destination", packageConfig)}>
          <option></option>
            <option value="Norway">Norway</option>
            <option value="Sweden">Sweden</option>
            <option value="Denmark">Denmark</option>
            <option value="Finland">Finland</option>
          </Form.Select > 
          
        </Form.Group>
          <Button type="submit">Send package</Button>
         
      </Form>
 </div>
}

export default PackageForm
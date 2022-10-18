import { Form, Button } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {useState} from 'react'
import { useCountry } from '../../context/CountryContext';
import { useWeight } from '../../context/WeightContext';
import '../Modal/packagemodal.css';
import axios from 'axios';



const baseURL = 'http://localhost:8080/api/v1'; 
//const baseURLWeight = '';
const userId = "pernille.ofte@no.experis.com";

const packageConfig = {
  required: true,
}

const PackageForm = () => {

  //HOOKS
  const {register, handleSubmit, reset} = useForm()


  const {countries, setCountries} = useCountry()
  const {weights, setWeights} = useWeight()
  const [resStatus, setResStatus] = useState("");

  
 

  let shipment = 200

  
  
    
  const onSubmit = (data)=> {
    console.log("Data: " + data.weight.value);
    axios
    .post(baseURL + '/shipments', {
      receiver_name: data.receiver_name,
      weight: data.weight,
      color: data.color, 
      appUser: userId,
      country: data.country,
      totalSum: shipment
      
    })
    .then(function (response) {
      console.log(response.status);
      if (response.status === 200) {
        setResStatus("Successful Registration!");
      } else {
        setResStatus("error");
      }
    })
    .catch(function (error) {
      console.log(error);
    });
    reset()
    window.location = "/home"
    console.log(resStatus);

};




 return <div>
     <Form onSubmit={handleSubmit(onSubmit)} id="form-container" >
     {/* RECEIVER FIRST NAME*/}
        <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Receivers First name</Form.Label>
          <Form.Control
          type="text"
          name="receiver_name"
          placeholder="first name..."
          { ... register("receiver_name", packageConfig)}
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
          {weights && weights.map((weight) => (
            <option key={weight.id} value={weight.value}>{weight.id}</option>
          ))}
          </Form.Select> 
        </Form.Group>

          {/* DESTINATION SELECT */}
          <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Destination</Form.Label>
          <Form.Select name="country" 
         
         { ... register("country", packageConfig)}>
          <option></option> 
           {countries && countries.map((country)  => ( 
            <option key={country.id} value={country.multiplier} >{country.id}</option>
            
           ))}
          </Form.Select > 
        </Form.Group>
          <Button type="submit" >Send package</Button>
      </Form>




    
 </div>
}

export default PackageForm

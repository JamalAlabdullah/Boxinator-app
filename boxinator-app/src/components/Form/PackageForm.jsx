import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react'
import { useCountry } from '../../context/CountryContext';
import { useWeight } from '../../context/WeightContext';
import '../Modal/packagemodal.css';
import axios from 'axios';
import keycloak from '../../keycloak';

const baseURL = 'http://localhost:8080/api/v1';
let userId = "";

const packageConfig = {
  required: true,
}

const PackageForm = () => {


  userId = keycloak.subject;

  //HOOKS
  const { register, handleSubmit, reset } = useForm()

  const { countries } = useCountry();
  const { weights } = useWeight();
  const [ resStatus, setResStatus ] = useState("");
 

  let shipment = 200
    
  const onSubmit = (data)=> {
    console.log(data)
    axios
    .post(baseURL + '/shipments', {
      headers: { Authorization: `Bearer ${keycloak.token}` },
      receiver_name: data.receiver_name,
      weight: data.weight,
      color: data.color, 
      appUser: userId,
      country: data.country,
      status: "CREATED",  
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

  const totalAmount = () => {
    let sum = document.getElementById("selectId").value;
    console.log("Sum: " + sum);
  }


  return <div>
    <Form onSubmit={handleSubmit(onSubmit)} id="form-container" >
      {/* RECEIVER FIRST NAME*/}
      <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Receivers First name</Form.Label>
        <Form.Control
          type="text"
          name="receiver_name"
          placeholder="first name..."
          {...register("receiver_name", packageConfig)}
        />
      </Form.Group>

      {/* BOX COLOR*/}
      <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Box color</Form.Label>
        <Form.Control
          //id="button-color-box"

          type="color"
          name="color"
          {...register("color", packageConfig)}
        />
      </Form.Group>


      {/* WEIGHT OPTIONS SELECT*/}
      <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Weight</Form.Label>
        <Form.Select
          name="weight"
          id="selectId"
          

          {...register("weight", packageConfig)} >
         
          {weights && weights.map((weight) => (
            <option id={weight.value} key={weight.id} value={weight.id}>{weight.id}</option>
          ))}
          </Form.Select > 
        </Form.Group>

          {/* DESTINATION SELECT */}
          <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Destination</Form.Label>
          <Form.Select name="country" 
         
         { ... register("country", packageConfig)}>
          <option></option> 
           {countries && countries.map((country)  => ( 
            <option key={country.id} value={country.id} >{country.id}</option>
            
           ))}
          </Form.Select > 
        </Form.Group>
          <Button type="submit" >Send package</Button>
      </Form>




  </div>
}

export default PackageForm

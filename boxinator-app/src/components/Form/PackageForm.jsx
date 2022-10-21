import { Form, Button, FormGroup } from 'react-bootstrap';
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

// Variables to find Total value
let shipment = 200;
let weightMultiply = 0;
let countryMultiply = 0;
let totalSum = 0;

const PackageForm = () => {

  userId = keycloak.subject;

  //HOOKS
  const { register, handleSubmit, reset } = useForm()

  const { countries } = useCountry();
  const { weights } = useWeight();
  const [ resStatus, setResStatus ] = useState("");

  const [sum, setSum ] = useState(200);

  const handleWeightChange = (e) => { // Updates weight value based on selected option in dropdown

      for(let i=0; i < weights.length; i++) {
        if(e.target.value === weights[i].id) {
          weightMultiply = weights[i].value;
        }
      }
  
      //console.log(weightMultiply);
      totalSum = shipment + (weightMultiply * countryMultiply);
      console.log(totalSum);
      setSum(totalSum);
  }

  const handleCountryChange = (e) => { // Updates country multiplier based on selected option in dropdown

    for(let i=0; i < countries.length; i++) {
      if(e.target.value === countries[i].id) {
        countryMultiply = countries[i].multiplier;
      }
    }

    //console.log(countryMultiply);
    totalSum = shipment + (weightMultiply * countryMultiply);
    console.log(totalSum);
    setSum(totalSum);
}

    
  const onSubmit = (data)=> { //Creates a package

    axios
    .post(baseURL + '/shipments', {
      headers: { Authorization: `Bearer ${keycloak.token}` },
      receiver_name: data.receiver_name,
      weight: data.weight,
      color: data.color, 
      appUser: userId,
      country: data.country,
      status: "CREATED",  
      totalSum: sum
      
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
          {...register("weight", packageConfig)} 
          onChange={handleWeightChange}>

          <option></option>
          {weights && weights.map((weight) => (
            <option key={weight.id} value={weight.id}>{weight.id}</option>
          ))}
          </Form.Select> 
        </Form.Group>

          {/* DESTINATION SELECT */}
          <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Destination</Form.Label>
          <Form.Select 
          name="country"
          { ... register("country", packageConfig)}
          onChange={handleCountryChange}>
          <option></option> 
           {countries && countries.map((country)  => ( 
            <option key={country.id} value={country.id} >{country.id}</option>
            
           ))}
          </Form.Select > 
        </Form.Group>
        <FormGroup>
          <p name="sum">kr. {sum},00 </p>
        </FormGroup>
          <Button type="submit" >Send package</Button>
      </Form>

  </div>
}

export default PackageForm

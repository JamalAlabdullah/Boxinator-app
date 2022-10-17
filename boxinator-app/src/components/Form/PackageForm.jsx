import { Form, Button } from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {useEffect, useState} from 'react'
import { useCountry } from '../../context/CountryContext';
import '../Modal/packagemodal.css';
import axios from 'axios';

const baseURL = 'http://localhost:8080/api/v1';
const userId = "pernille.ofte@no.experis.com";  

const packageConfig = {
  required: true,
}

const PackageForm = () => {

  //HOOKS
  const {register, handleSubmit, reset} = useForm()

  //const {user, setUser} = useUser()

  const {countries, setCountries} = useCountry()
  const [resStatus, setResStatus] = useState("");

    useEffect(() => {
      axios.get(baseURL +'/settings/countries')
      .then(res => {
        console.log(res.data)
        setCountries(res.data)
      })
      .catch(error => {
        console.log(error)
      })
    }, [setCountries])

    
  const onSubmit = (data)=> {
    console.log("Data: " + data.country);
    axios
    .post(baseURL + '/shipments', {
      receiver_name: data.receiver_name,
      weight: data.weight,
      color: data.color, 
      appUser: userId,
      country: data.country
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
          <option value="1">Basic 1 kg</option>
          <option value="2">Humble 2 kg</option>
          <option value="5">Deluxe 5 kg</option>
          <option value="8">Premium 8 kg</option>
          </Form.Select> 
        </Form.Group>

          {/* DESTINATION SELECT */}
          <Form.Group id="form-group" className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Destination</Form.Label>
          <Form.Select name="country"  { ... register("country", packageConfig)}>
          <option></option> 
           {countries.map((country)  => ( 
            <option key={country.id}>{country.id}</option>
           ))}
          </Form.Select > 
        </Form.Group>
          <Button type="submit" >Send package</Button>
      </Form>

     
 </div>
}

export default PackageForm

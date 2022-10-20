import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import "../Modal/packagemodal.css";
import axios from "axios";

import { useRef } from "react";

import emailjs from '@emailjs/browser';

const baseURL = "http://localhost:8080/api/v1/settings/countries";

const packageConfig = {
  required: true,
};

const PackageFormGuest = () => {
  const form = useRef();

  // send email to the receiver
  const sendEmail = (e) => {
    console.log("send email");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l9m9lqc",
        "template_oj01046",
        form.current,
        "V_2P5fiDzw13IJkRm"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  //HOOKS
  const { register, handleSubmit, reset } = useForm();

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data);
        setCountries(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setCountries]);

  const onSubmit = (data) => {
    console.log(data);

    alert("success" + JSON.stringify(data, null, 4));
    reset();
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)} id="form-container">
        <form ref={form} onSubmit={sendEmail}>
          <Form.Group
            id="form-group"
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Sender's email</Form.Label>
            <Form.Control
              type="email"
              name="user_email"
              required
              placeholder="Email"
              {...register("user_email", packageConfig)}
            />
          </Form.Group>
        </form>
        {/* RECEIVER FIRST NAME*/}
        <Form.Group
          id="form-group"
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Receivers First name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="first name..."
            {...register("first_name", packageConfig)}
          />
        </Form.Group>

        {/* RECEIVER LAST NAME*/}
        <Form.Group
          id="form-group"
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Receivers Last name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="last name..."
            {...register("last_name", packageConfig)}
          />
        </Form.Group>

        {/* BOX COLOR*/}
        <Form.Group
          id="form-group"
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Box color</Form.Label>
          <Form.Control
            //id="button-color-box"

            type="color"
            name="color"
            {...register("color", packageConfig)}
          />
        </Form.Group>

        {/* WEIGHT OPTIONS SELECT*/}
        <Form.Group
          id="form-group"
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Weight</Form.Label>
          <Form.Select name="weight" {...register("weight", packageConfig)}>
            <option></option>
            <option value="1">Basic 1 kg</option>
            <option value="2">Humble 2 kg</option>
            <option value="5">Deluxe 5 kg</option>
            <option value="8">Premium 8 kg</option>
          </Form.Select>
        </Form.Group>

        {/* DESTINATION SELECT*/}
        <Form.Group
          id="form-group"
          className="mb-3"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label>Destination</Form.Label>
          <Form.Select
            name="destination"
            {...register("destination", packageConfig)}
          >
            <option></option>
            {countries.map((country) => (
              <option key={country.country_id}>{country.country_name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button sendEmail type="submit" onClick={sendEmail}>
          Send package
        </Button>
      </Form>
    </div>
  );
};

export default PackageFormGuest;

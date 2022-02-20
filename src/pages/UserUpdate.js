import React from "react";
import * as s from '../styles/UserUpdateStyles'; // Emotion s
import { useState } from "react";
import FormInput from '../components/FormInput'
import FormTextArea from '../components/FormTextArea'

function UserUpdate() { 
  const [values, setValues] = useState({
    firstname: "Donald",
    lastname: "Norman",
    email: "useremail@gmail.com",
    phone: "(+089) 63648018",
    day: "15",
    month: "May",
    year: "1990",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });

  const inputs = [
    {
      id: 1,
      label: "First Name*",
      name: "firstname",
      type: "text",
      value: values.firstname,
      required: true,
      errorMessage: "No numbers or special characters"
    },
    {
      id: 2,
      label: "Last Name*",
      name: "lastname",
      type: "text",
      value: values.lastname,
      required: true,
      errorMessage: "No numbers or special characters"
    },
    {
      id: 3,
      label: "Email*",
      name: "email",
      type: "text",
      value: values.email,
      required: true,
      errorMessage: "Invalid Email"
    },
    {
      id: 4,
      label: "Phone*",
      name: "phone",
      type: "text",
      value: values.phone,
      required: true,
      errorMessage: "Invalid Phone number"
    } 
  ]

  const textArea = {
    label: "Bio*",
    name: "bio",
    value: values.bio,
    required: true,
    errorMessage: ""
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values)
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <s.MainContainer>
      <s.Frame668>
        
        <s.Form onSubmit={handleSubmit}>

          <s.Frame667>
            <s.ServiceTitle>Settings</s.ServiceTitle>

            {inputs.map((input) => (
              <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
          
            <s.InputContainer>
              <s.Label htmlFor="date_of_birth">Select your date of birth*</s.Label>
              <s.Input type="date" name="date_of_birth" />
            </s.InputContainer>

            <FormTextArea label="Bio*" name="bio" value={values.bio} onChange={onChange}/>
            
          </s.Frame667>
          
          <s.Frame171>
            <s.Separator></s.Separator>
            <s.Frame168>
              <s.Submit type="submit">Submit</s.Submit>
              <s.Discard>Discard</s.Discard>
            </s.Frame168>
          </s.Frame171>  
        </s.Form>

      </s.Frame668>

      <s.Frame668>
        <s.InputContainer>
          <s.Label htmlFor="first_name">First Name*</s.Label>
          <s.Input type="text" name="first_name" />
        </s.InputContainer>
      </s.Frame668>
    </s.MainContainer>
    );
};

export default UserUpdate;

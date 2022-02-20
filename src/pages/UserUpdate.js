import React from "react";
import * as s from '../styles/UserUpdateStyles'; // Emotion s
import { useState } from "react";

import FormInput from '../components/FormInput'
import FormTextArea from '../components/FormTextArea'
import ProfilePic from '../components/ProfilePic'

import UserData from '../data/UserData'
import "../styles.css"

function UserUpdate() { 
  
  const [values, setValues] = useState(UserData);

  const inputs = [
    {
      id: 1,
      label: "First Name*",
      name: "firstname",
      type: "text",
      value: values.firstname,
      required: true,
      pattern: "^[a-zA-Z]+$",
      errorMessage: "No numbers or special characters"
    },
    {
      id: 2,
      label: "Last Name*",
      name: "lastname",
      type: "text",
      value: values.lastname,
      required: true,
      pattern: "^[a-zA-Z]+$",
      errorMessage: "No numbers or special characters"
    },
    {
      id: 3,
      label: "Email*",
      name: "email",
      type: "email",
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
      pattern: "^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{6}$",
      errorMessage: "Invalid Phone number. Accepted format: (0xx) xxxxxxxxx "
    } 
  ]

  const textArea = {
    label: "Bio*",
    name: "bio",
    value: values.bio,
    required: true,
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleDiscard = (e) => {
    e.preventDefault();
    setValues(UserData)
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
              <FormInput 
                key={input.id} 
                {...input} 
                onChange={onChange}
              />
            ))}
          
            <s.InputContainer>
              <s.Label htmlFor="date_of_birth">Select your date of birth*</s.Label>
              <s.Input type="date" name="date_of_birth" />
            </s.InputContainer>

            <FormTextArea {...textArea} onChange={onChange}/>
            
          </s.Frame667>
          
          <s.Frame171>
            <s.Separator></s.Separator>
            <s.Frame168>
              <s.Submit type="submit">Submit</s.Submit>
              <s.Discard onClick={handleDiscard}>Discard</s.Discard>
            </s.Frame168>
          </s.Frame171>  
        </s.Form>

      </s.Frame668>

      <s.Frame668>
        <ProfilePic />
      </s.Frame668>
    </s.MainContainer>
    );
};

export default UserUpdate;

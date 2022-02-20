import React from "react";
import * as s from '../styles/UserUpdateStyles'; // Emotion s
import { useState } from "react";
import FormInput from '../components/FormInput'

function UserUpdate() { 
  const [values, setValues] = useState({
    firstname: "Donald",
    lastname: "Norman",
    email: "useremail@gmail.com",
    phone: "(+089) 63648018",
    day: "15",
    month: "May",
    year: "1990",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <s.MainContainer>
      <s.Frame668>
        
        <s.Form>

          <s.Frame667>
            <s.ServiceTitle>Settings</s.ServiceTitle>
            
            <FormInput label="First Name*" name="firstname" type="text" placeholder={values.firstname} onChange={onChange}/>
            <FormInput label="Last Name*" name="lastname" type="text" placeholder={values.lastname} onChange={onChange}/>
            <FormInput label="Email*" name="email" type="email" placeholder={values.email} onChange={onChange}/>
            <FormInput label="Phone*" name="phone" type="text" placeholder={values.phone} onChange={onChange}/>
          
            <s.InputContainer>
              <s.Label htmlFor="date_of_birth">Select your date of birth*</s.Label>
              <s.Input type="date" name="date_of_birth" />
            </s.InputContainer>

            <s.InputContainer>
              <s.Label htmlFor="bio">Bio*</s.Label>
              <s.TextArea name="bio" />
            </s.InputContainer>
            
          </s.Frame667>
          
          <s.Frame171>
            <s.Separator></s.Separator>
            <s.Frame168>
              <s.Submit type="submit" onSubmit={handleSubmit}/>
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

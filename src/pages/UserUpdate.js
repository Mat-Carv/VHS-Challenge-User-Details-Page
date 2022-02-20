import React from "react";
import * as s from '../styles/UserUpdateStyles'; // Emotion s
import { useForm } from "react-hook-form";
import { useState, setState } from "react";

function UserUpdate() { 
    
  const { register, handleSubmit, errors } = useForm();
  
  return (
    <s.MainContainer>
      <s.Frame668>
        
        <s.Form>

          <s.Frame667>
            <s.ServiceTitle>Settings</s.ServiceTitle>
            
            <s.InputContainer>
              <s.Label htmlFor="first_name">First Name*</s.Label>
              <s.Input type="text" name="first_name" />
            </s.InputContainer>

            <s.InputContainer>
              <s.Label htmlFor="last_name">Last Name*</s.Label>
              <s.Input type="text" name="last_name" />
            </s.InputContainer>
            
            <s.InputContainer>
              <s.Label htmlFor="email">Email*</s.Label>
              <s.Input type="email" name="email" />
            </s.InputContainer>

            <s.InputContainer>
              <s.Label htmlFor="phone">Phone*</s.Label>
              <s.Input type="text" name="phone" />
            </s.InputContainer>

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
              <s.Submit type="submit"/>
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

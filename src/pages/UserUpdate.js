import React from "react";
import * as Styles from '../styles/UserUpdateStyles';
import { useForm } from "react-hook-form";
import { useState, setState } from "react";

function UserUpdate() { 
    
  const { register, handleSubmit, errors } = useForm();
  
  return (
    <>
      <Styles.Frame668>
        
        <Styles.Form>

          <Styles.Frame667>
            <Styles.ServiceTitle>Settings</Styles.ServiceTitle>
            
            <Styles.InputContainer>
              <Styles.Input type="text" placeholder="First Name*" name="first_name" />
            </Styles.InputContainer>

            <Styles.InputContainer>
              <Styles.Input type="text" placeholder="Last Name*" name="last_name" />
            </Styles.InputContainer>
            
            <Styles.InputContainer>
              <Styles.Input type="email" placeholder="Email*" name="email" />
            </Styles.InputContainer>

            <Styles.InputContainer>
              <Styles.Input type="text" placeholder="Phone*" name="phone" />
            </Styles.InputContainer>

            <Styles.InputContainer>
              <Styles.Input type="date" name="day_of_birth" />
            </Styles.InputContainer>
            
          </Styles.Frame667>

          <Styles.Frame171>
            
            <Styles.Frame168>
              <Styles.Submit type="submit"/>
              <Styles.Discard>Discard</Styles.Discard>
            </Styles.Frame168>
          </Styles.Frame171>  
        </Styles.Form>

      </Styles.Frame668>
    </>
    );
};

export default UserUpdate;

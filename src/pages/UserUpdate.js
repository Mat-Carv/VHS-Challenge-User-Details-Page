import React from "react";
import * as Styles from '../styles/UserUpdateStyles'

function UserUpdate() { 
    return (
    <>
      <Styles.Frame668>
        
        <Styles.Form>

          <Styles.Frame667>
            <Styles.ServiceTitle>Settings</Styles.ServiceTitle>

            <Styles.Input type="text" placeholder="First Name*" name="first_name" />
            <Styles.Input type="text" placeholder="Last Name*" name="last_name" />
            <Styles.Input type="email" placeholder="Email*" name="email" />
            <Styles.Input type="text" placeholder="Phone*" name="phone" />
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

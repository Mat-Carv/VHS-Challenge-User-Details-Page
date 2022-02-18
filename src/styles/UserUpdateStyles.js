import styled from '@emotion/styled'

// Container for the Form side of the page
export const Frame668 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 489px;
height: 867px;
left: 460px;
top: 132px;
`

// Container for the main body of the Form
export const Frame667 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 488px;
height: 752px;
left: 0px;
top: 0px;

flex: none;
order: 0;
flex-grow: 0;
margin: 40px 0px;
`

// Container for the Save Changes & Discard Buttons
export const Frame171 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 489px;
height: 75px;
left: 0px;
top: 792px;

flex: none;
order: 1;
flex-grow: 0;
margin: 40px 0px;
`

export const Frame168 = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: static;
width: 495px;
height: 44px;
left: 0px;
top: 31px;

flex: none;
order: 1;
flex-grow: 0;
margin: 30px 0px;
`

export const ServiceTitle = styled.h3`
position: static;
width: 106px;
height: 32px;
left: 0px;
top: 0px;

font-family: Montserrat, sans-serif, Helvetica;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 32px;
/* identical to box height, or 133% */

letter-spacing: 0.1px;

color: #F0F8FF;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 32px 0px;
`

export const Form = styled.form`
background-color: #22262D;
`

export const Input = styled.input`
/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 16px;

position: static;
width: 488px;
left: calc(50% - 488px/2);
top: 35.29%;
bottom: 0%;

/* white/06.slight */

background: rgba(240, 248, 255, 0.04);
/* white/03.help */

border: 1px solid rgba(240, 248, 255, 0.32);
&:hover {
    border: 1px solid #F0F8FF;
}
&:focus {
    outline: 1px solid #27B18A;
}
box-sizing: border-box;
border-radius: 4px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 8px 0px;
`

export const Submit = styled.input`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 24px;

position: static;
width: 167px;
height: 44px;
left: 0px;
top: 0px;

/* Gradients/Green Button */

background: linear-gradient(90deg, #27B18A 0%, #317D6C 100%);
box-shadow: 0px 0px 8px rgba(39, 177, 138, 0.32);
border-radius: 8px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 16px;
`

export const Discard = styled.button`
/* Auto layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 10px 24px;

position: static;
width: 113px;
height: 44px;
left: 183px;
top: 0px;

/* White/Help */

background: rgba(240, 248, 255, 0.32);
border-radius: 8px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 16px;
`
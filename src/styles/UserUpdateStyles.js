import styled from '@emotion/styled'

//----------------------------------------------------- Containers
// Container for the Form side of the page
export const Frame668 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 489px;

`

// Container for the main body of the Form
export const Frame667 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: static;
width: 100%;

left: 0px;
top: 0px;

flex: none;
order: 0;
flex-grow: 0;
margin: 32px 0px;
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
margin: 30px 0px;
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

export const InputContainer = styled.div`
flex: none;
order: 1;
flex-grow: 0;
margin: 16px 0px;
`

//----------------------------------------------------- Page Components
export const ServiceTitle = styled.h3`
position: relative;
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

export const Separator = styled.hr`
position: relative;
width: 100%;
top: 0%;
bottom: 98.67%;
background: rgba(240, 248, 255, 0.1225);
margin-block-start: 0;
margin-block-end: 0;
border-style: solid;
border-color: rgba(240, 248, 255, 0.0425);
`

//----------------------------------------------------- Form Components

export const Form = styled.form`
background-color: #22262D;
`

export const Label = styled.label`
position: static;
height: 16px;
left: 0px;
right: 0px;
top: 0px;

font-family: Montserrat, sans-serif, Helvetica;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
/* identical to box height, or 133% */

letter-spacing: 0.857143px;
text-transform: uppercase;

/* white/03.help */

color: rgba(240, 248, 255, 0.32);


/* Inside auto layout */

flex: none;
order: 0;
align-self: stretch;
flex-grow: 0;
margin: 8px 0px;
`

export const Input = styled.input`
/* Auto layout */

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 16px;


width: 489px;
left: calc(50% - 488px/2);
top: 35.29%;
bottom: 0%;

&, select, textarea {
    color: rgba(240, 248, 255, 0.64);
}

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

export const TextArea = styled.textarea`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 16px;

position: static;
width: 488px;
height: 140px;
left: calc(50% - 488px/2);
top: 14.63%;
bottom: 0%;

background: rgba(240, 248, 255, 0.04);

border: 1px solid rgba(240, 248, 255, 0.32);
box-sizing: border-box;
border-radius: 4px;

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;
margin: 8px 0px 0px;

&, select, textarea {
    color: rgba(240, 248, 255, 0.64);
}
&:hover {
    border: 1px solid #F0F8FF;
}
&:focus {
    outline: 1px solid #27B18A;
}
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

font-family: Montserrat, sans-serif, Helvetica;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;

text-align: center;
letter-spacing: 0.0666667px;

color: #F0F8FF;

background: linear-gradient(90deg, #27B18A 0%, #317D6C 100%);
box-shadow: 0px 0px 8px rgba(39, 177, 138, 0.32);
border-radius: 8px;

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 16px;
border-style: none;
`

export const Discard = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 24px;

position: static;
width: 113px;
height: 44px;
left: 183px;
top: 0px;

font-family: Montserrat, sans-serif, Helvetica;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;

text-align: center;
letter-spacing: 0.0666667px;

color: #F0F8FF;

background: rgba(240, 248, 255, 0.32);
border-radius: 8px;

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 16px;
border-style: none;
`
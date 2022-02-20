import styled from '@emotion/styled'

//----------------------------------------------------- Containers

// Main Container
export const MainContainer = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: center;
flex-wrap: wrap;
max-width: 70em;
margin: 5em auto 0;
`

// Container for the Form side of the page
export const Frame668 = styled.section`
display: flex;
flex-direction: column;
align-items: flex-start;
margin: 11px;
position: static;
width: 350px;
@media (min-width: 520px) {
    width: 420px;
  }
@media (min-width: 1100px) {
    width: 489px;
}
`

// Container for the main body of the Form
export const Frame667 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
position: static;
width: 100%;
margin: 0 0 32px;
`

// Container for the Save Changes & Discard Buttons
export const Frame171 = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
position: static;
width: 100%;
height: 75px;
margin: 30px 0px;
`

export const Frame168 = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
position: static;
width: 100%;
height: 44px;
margin: 30px 0px;
`

export const InputContainer = styled.div`
margin: 16px 0px;
width: 100%;
`

//----------------------------------------------------- Page Components
export const ServiceTitle = styled.h3`
position: static;
width: 106px;
height: 32px;
font-family: Montserrat, sans-serif, Helvetica;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 32px;
letter-spacing: 0.1px;
color: #F0F8FF;
margin: 0 0 32px;
`

export const Separator = styled.hr`
position: static;
width: 100%;
background: rgba(240, 248, 255, 0.1225);
margin-block-start: 0;
margin-block-end: 0;
border-style: solid;
border-color: rgba(240, 248, 255, 0.0001);
`

//----------------------------------------------------- Form Components

export const Form = styled.form`
background-color: #22262D;
width: 100%;
`

export const Label = styled.label`
position: static;
height: 16px;
font-family: Montserrat, sans-serif, Helvetica;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.857143px;
text-transform: uppercase;
color: rgba(240, 248, 255, 0.32);
margin: 8px 0px;

&#piclabel {
    text-align: center
}
`

export const Input = styled.input`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 16px;
width: 100%;

&, select, textarea {
    color: rgba(240, 248, 255, 0.64);
}

background: rgba(240, 248, 255, 0.04);
border: 1px solid rgba(240, 248, 255, 0.32);

&:hover {
    border: 1px solid #F0F8FF;
}
&:focus {
    outline: 1px solid #27B18A;
}

box-sizing: border-box;
border-radius: 4px;
margin: 8px 0px;
`

export const TextArea = styled.textarea`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 10px 16px;
position: static;
width: 100%;
height: 140px;
background: rgba(240, 248, 255, 0.04);
border: 1px solid rgba(240, 248, 255, 0.32);
box-sizing: border-box;
border-radius: 4px;
align-self: stretch;
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

export const Submit = styled.button`
display: flex;
flex-direction: column;
align-items: center;
padding: 10px 24px;
position: static;
width: 167px;
height: 44px;

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

margin: 0;
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

margin: 0px 16px;
border-style: none;
`

// --------------------------------------------- Profile Picture

export const ProfilePictureContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
max-width: 100px;
margin: 0px auto 50px;
@media (min-width: 900px) {
    margin: 80px auto 0px;
  }
`

export const ProfilePic = styled.img`
border: 2px solid rgba(240, 248, 255, 0.64);
border-radius: 50%;
height: 100px;
width: 100px;
margin: 10px 0;
`

export const RemoveButton = styled.span`
position: static;
width: 69px;
height: 24px;
text-align: center;
font-family: Montserrat, sans-serif, Helvetica;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 24px;

color: rgba(240, 248, 255, 0.64);
`
// --------------------------------------------- Errors

export const InvalidError = styled.span`
font-family: Montserrat, sans-serif, Helvetica;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.2475px;
color: #E32636;
mix-blend-mode: normal;
display: none;
`

export const RequiredError = styled.span`
font-family: Montserrat, sans-serif, Helvetica;
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
letter-spacing: 0.2475px;
color: #E32636;
mix-blend-mode: normal;
display : ${props => props.status}
`
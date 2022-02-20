import * as s from '../styles/UserUpdateStyles';

const FormTextArea = (props) => {
    return(
        <s.InputContainer>
            <s.Label>{props.label}</s.Label>
            <s.TextArea  
                name={props.name} 
                value={props.value} 
                onChange={props.onChange}
            />
        </s.InputContainer>
    )
}

export default FormTextArea
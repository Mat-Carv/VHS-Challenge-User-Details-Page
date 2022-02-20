import * as s from '../styles/UserUpdateStyles';

const FormTextArea = (props) => {
    const { label, onChange, id, ...inputProps} = props
    return(
        <s.InputContainer>
            <s.Label>{label}</s.Label>
            <s.TextArea  
                {...inputProps} 
                onChange={onChange}
            />
            <span>{props.errorMessage}</span>
        </s.InputContainer>
    )
}

export default FormTextArea
import * as s from '../styles/UserUpdateStyles';

const FormInput = (props) => {
    console.log(props.value)
    const { label, onChange, id, ...inputProps} = props
    return(
        <s.InputContainer>
            <s.Label>{label}</s.Label>
            <s.Input 
                {...inputProps} 
                onChange={onChange}
            />
            <span>{props.errorMessage}</span>
        </s.InputContainer>
    )
}

export default FormInput
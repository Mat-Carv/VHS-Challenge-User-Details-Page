import * as s from '../styles/UserUpdateStyles';
import "../styles.css"

const FormInput = (props) => {
    const { label, onChange, errorMessage, id, ...inputProps} = props

    const required = () => {
        let display = ""
        if (props.value) {
            display = "none"
        } else {
            display = "block"
        }
        return display
    }

    return(
        <s.InputContainer>
            <s.Label>{label}</s.Label>
            <s.Input 
                {...inputProps} 
                onChange={onChange}
            />
            <s.InvalidError id="invaliderror">{errorMessage}</s.InvalidError>
            <s.RequiredError id="required" status={required}>This field is required</s.RequiredError>
            
        </s.InputContainer>
    )
}

export default FormInput
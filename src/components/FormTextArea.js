import * as s from '../styles/UserUpdateStyles';
import "../styles.css"

const FormTextArea = (props) => {
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
            <s.TextArea 
                {...inputProps} 
                onChange={onChange}
            />
            <s.RequiredError id="required" status={required}>This field is required</s.RequiredError>

        </s.InputContainer>
    )
}

export default FormTextArea
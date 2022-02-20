import * as s from '../styles/UserUpdateStyles';

const FormInput = (props) => {
    console.log(props.value)
    return(
        <s.InputContainer>
            <s.Label>{props.label}</s.Label>
            <s.Input 
                type={props.type} 
                name={props.name} 
                value={props.value} 
                onChange={props.onChange}
            />
        </s.InputContainer>
    )
}

export default FormInput
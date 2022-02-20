import * as s from '../styles/UserUpdateStyles';

const FormInput = (props) => {
    return(
        <s.InputContainer>
            <s.Label>{props.label}</s.Label>
            <s.Input 
                type={props.type} 
                name={props.name} 
                placeholder={props.placeholder} 
                onChange={props.onChange}
            />
        </s.InputContainer>
    )
}

export default FormInput
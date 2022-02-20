import * as s from '../styles/UserUpdateStyles';

const ToastMsg = (props) => {
    return (
        <s.ToastNotification id="toast" status={props.trigger}>Changes have been saved successfully</s.ToastNotification>
    )
};

export default ToastMsg
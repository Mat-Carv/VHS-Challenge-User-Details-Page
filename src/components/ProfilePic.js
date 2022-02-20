import React from "react";
import ReactDOM from "react-dom";
import * as s from '../styles/UserUpdateStyles';

const ProfilePic = () => {
    const uploadedImage = React.useRef(null);

    const handleRemove = () => {
        console.log("yeah it works")
    };

    const handleImageUpload = (e) => {
        const [file] = e.target.files;
        if (file) {
        const reader = new FileReader();
        const {current} = uploadedImage;
        current.file = file;
        reader.onload = (e) => {
            current.src = e.target.result;
        }
        reader.readAsDataURL(file);
        }
    };
    return (
    <s.ProfilePictureContainer>
        <s.Label id="piclabel">Image</s.Label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <s.ProfilePic ref={uploadedImage}></s.ProfilePic>
        <s.RemoveButton onClick={handleRemove}>Remove</s.RemoveButton>
    </s.ProfilePictureContainer>
    )
}

export default ProfilePic
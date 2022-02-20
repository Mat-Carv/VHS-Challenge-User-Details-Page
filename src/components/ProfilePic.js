import React from "react";
import * as s from '../styles/UserUpdateStyles';
import img from '../data/placeholder.jpeg'

const ProfilePic = () => {
    const uploadedImage = React.useRef(null);
    const imageUploader = React.useRef(null);
    
    const handleRemove = () => {
        const {current} = uploadedImage;
        current.src = img;
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
        <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload}
            ref={imageUploader}
            style={{
            display: "none"
            }} 
        />
        <s.ProfilePic 
            src={img}
            ref={uploadedImage}
            onClick={() => imageUploader.current.click()}
        ></s.ProfilePic>
        <s.RemoveButton onClick={handleRemove}>Remove</s.RemoveButton>
    </s.ProfilePictureContainer>
    )
}

export default ProfilePic
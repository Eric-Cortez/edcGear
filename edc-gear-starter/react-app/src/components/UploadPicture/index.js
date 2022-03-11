import React, { useState } from "react";

import "./UploadPicture.css"
const UploadPicture = ({ setImageUrl }) => {
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [preview, setPreview] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        e.stopPropagation()
        const formData = new FormData();
        formData.append("image", image);

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch('/api/images', {
            method: "POST",
            body: formData,
        });


        if (res.ok) {
            const response = await res.json();
            setImageLoading(false);
            setPreview(response.url)
            setImageUrl(response.url)
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <form className="post-upload-form" onSubmit={handleSubmit}>
            <input
                className="choose-photo-input"
                type="file"
                accept="image/*"
                onChange={updateImage}
            />
            <div className="upload-btn-div">
                <button className="upload-btn" type="submit"><i className="fa fa-cloud-upload"></i></button>
                {(imageLoading) && <p>Loading...</p>}
            </div>
        </form>
    )
}

export default UploadPicture;
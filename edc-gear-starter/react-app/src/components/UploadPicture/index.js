import React, { useState } from "react";
// import { useHistory } from "react-router-dom";


const UploadPicture = ({ setImageUrl }) => {
    // const history = useHistory(); // so that we can redirect after the image upload is successful
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
           const response =  await res.json();
            setImageLoading(false);
            setPreview(response.url)
            setImageUrl(response.url)
            // history.push("/");
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
            <form onSubmit={handleSubmit}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                />
            <button type="submit"><i class="fa fa-cloud-upload"></i></button>
                {(imageLoading) && <p>Loading...</p>}
            </form>
        )
}

export default UploadPicture;
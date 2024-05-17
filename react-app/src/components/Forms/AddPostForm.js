import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getAllPosts, postPost } from '../../store/post';
import "./GlobalForm.css"
import UploadPicture from '../UploadPicture';
import { brokenUrl } from '../../utils/broken_image_url.js';

const AddPostForm = ({ setShowModal }) => {
    const history = useHistory()
    const dispatch = useDispatch();

    const [imageUrl, setImageUrl] = useState('')
    const [caption, setCaption] = useState('');
    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const user = useSelector(state => state?.session?.user);


    const onSubmit = async (e) => {
        e.preventDefault();
        let post;
        if (user && errors.length === 0) {
            post = await dispatch(postPost({ userId: user?.id, imageUrl, body: caption }));
        } else {
            setDisplayErrors(true);
        }
        if (post) {
            await dispatch(getAllPosts())
            history.push(`/`);
            setShowModal(false)
        }
    };


    useEffect(() => {
        const errors = [];
        if (caption?.length > 255) errors.push("Caption must be less than 255 characters")
        // if (imageUrl?.length > 255 || imageUrl?.length <= 0) errors.push("Image Url is must be less 255 characters")
        // if (!imageUrl?.includes("http" || "https") || !imageUrl?.includes(".")) errors.push("Please provide a valid image Url")
        if (errors) setErrors(errors)

    }, [imageUrl, caption])

    // const updateImageUrl = (e) => {
    //     setImageUrl(e.target.value);
    // };

    const updateCaption = (e) => {
        setCaption(e.target.value);
    };


    return (
        <div id="create-new-post-div">
            <div id="create-new-post-title">
                <h2 id="new-post-h2"> Create new post</h2>
            </div>
            <UploadPicture setImageUrl={setImageUrl} />
            <form onSubmit={onSubmit}>

                <div className='image-input-div new'>
                    <h6 className='sign-up-image-preview-title'>Profile Image Preview</h6>
                    {!imageUrl || !imageUrl?.includes("http" || "https") ?
                        <img className="post-image-preview" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='placeholder' />
                        : <img className="post-image-preview" src={imageUrl} alt="post-preview"
                            onError={(e) => { e.target.src = brokenUrl; e.target.onError = null; }}
                        />
                    }
                </div>
                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div id="each-post-error-div" key={ind}>{`* ${error}`}</div>
                    ))}
                </div>

                <div id="post-caption-div" className='new-add-post'>
                    <div id="left-post-div-new">
                        {/* <input
                        className='image-url-input post-new'
                        placeholder='Image Url'
                        type='text'
                        name='image_url'
                        required
                        onChange={updateImageUrl}
                        value={imageUrl}
                    ></input> */}
                        <textarea
                            placeholder='Add an optional caption...'
                            className='image-url-input post-new'
                            type='text'
                            name='Caption'
                            onChange={updateCaption}
                            value={caption}
                        ></textarea>
                    </div>

                    <div className='post-submit-btn-div'>
                        <button className="post-submit-btn org-btn" type='submit'>Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AddPostForm;

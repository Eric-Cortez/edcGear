import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { getAllPosts, postPost } from '../../store/post';

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

        if (imageUrl?.length > 255 || imageUrl?.length <= 0) errors.push("Image Url is must be less 255 characters")
        if (!imageUrl?.includes("http" || "https")) errors.push("Please provide a valid image Url")
        if (errors) setErrors(errors)

    }, [imageUrl])

    const updateImageUrl = (e) => {
        setImageUrl(e.target.value);
    };

    const updateCaption = (e) => {
        setCaption(e.target.value);
    };


    return (
        <div id="create-new-post-div">

            <form onSubmit={onSubmit}>
                <div id="create-new-post-title">
                    <h2 id="new-post-h2"> Create new post</h2>
                </div>

                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{`* ${error}`}</div>
                    ))}
                </div>

                <div className='image-input-div'>
                    <label
                        className='input-label'
                    >Image Url</label>
                    <input
                        className='title-input'
                        placeholder='Image Url'
                        type='text'
                        name='image_url'
                        required
                        onChange={updateImageUrl}
                        value={imageUrl}
                    ></input>
                </div>
                
                <div id="post-caption-div">
                    <div id="captions-textarea-div">
                        {/* <label
                            className='input-label'
                        >Caption...</label> */}
                        <textarea
                            placeholder='Add a caption...'
                            className='text-area'
                            type='text'
                            name='Caption'
                            onChange={updateCaption}
                            value={caption}
                        ></textarea>
                    </div>

                    <div >
                        <button className="post-submit-btn" type='submit'>Submit</button>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AddPostForm;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAllPosts, updatePost } from '../../store/post';
import "./GlobalForm.css"
const EditPostForm = ({ postId, setShowModal, setEditShowModal}) => {
 
    const history = useHistory()
    const dispatch = useDispatch();
    // const { postId } = useParams()
    
    const posts = useSelector(state => state?.post?.list)
    const currPost = posts.find(post => post?.id === +postId)


    const [caption, setCaption] = useState(currPost?.body);
    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const user = useSelector(state => state?.session?.user);

    useEffect(()=> {
        (async () => {
            await  dispatch(getAllPosts())
          
        })();
        if(caption) localStorage.setItem("caption", caption)

    }, [dispatch])

    useEffect(()=> {
        const localStorageCaption = localStorage.getItem("caption")
        setCaption(localStorageCaption)
    },[])

    const onSubmit = async (e) => {
        e.preventDefault();
        let post;
        if (user && errors.length === 0) {
            post = await dispatch(updatePost({ postId: +postId, body: caption }));
        } else {
            setDisplayErrors(true);
        }
        if (post) {
            await dispatch(getAllPosts())
            setShowModal(false)
            setEditShowModal(false)
            history.push(`/`);
        }
    };
 

    useEffect(() => {
        const errors = [];

        // if (imageUrl?.length > 255 || imageUrl?.length <= 0) errors.push("Image Url is must be less 255 characters")
        // if (!imageUrl?.includes("http" || "https")) errors.push("Please provide a valid image Url")
        // if (errors) setErrors(errors)

    }, [caption])



    const updateCaption = (e) => {
        setCaption(e.target.value);
    };


    return (
        <div id="create-new-post-div">

            <form onSubmit={onSubmit}>
                <div id="create-new-post-title">
                    <h2 id="new-post-h2"> Edit post</h2>
                </div>

                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{`* ${error}`}</div>
                    ))}
                </div>

                <div className='edit-image-div'>
                    <img id="edit-post-image" src={currPost?.image_url} alt={`${currPost?.body}`}/>
                </div>

                <div id="edit-post-caption-items">
                    <div>
                        {/* <label
                            className='caption-input-label'
                        > Edit caption</label> */}
                        <div id="captions-textarea-div edit-post-text">
                        <textarea
                            placeholder='Add a caption...'
                            className='text-area-caption'
                            type='text'
                            name='Caption'
                            // required
                            onChange={updateCaption}
                            value={caption}
                        ></textarea>
                        </div> 
                    </div>

                    <div className='edit-submit-btn-div'>
                        <button className="edit post-submit-btn" type='submit'>Submit</button>
                    </div>
                </div>

                {/* <Link to="/">Cancel</Link> */}
            </form>
        </div>
    )
}

export default EditPostForm;
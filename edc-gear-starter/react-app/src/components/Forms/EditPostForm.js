import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { getAllPosts, updatePost } from '../../store/post';
import "./GlobalForm.css"
const EditPostForm = ({ modalPostId, setShowModal, setEditShowModal}) => {
 
    const history = useHistory()
    const dispatch = useDispatch();
    const { postId } = useParams()
    const posts = useSelector(state => state?.post?.list)
    const currPost = posts.find(post => post?.id === +modalPostId)

    const [caption, setCaption] = useState(currPost?.body);
    // const [errors, setErrors] = useState([]);
    // const [displayErrors, setDisplayErrors] = useState(false);
    const user = useSelector(state => state?.session?.user);

    useEffect(()=> {
        (async () => {
            await  dispatch(getAllPosts())
          
        })();
        // if(caption) localStorage.setItem("caption", caption)

    }, [dispatch, caption])

    // useEffect(()=> {
        // const localStorageCaption = localStorage.getItem("caption")
        // setCaption(localStorageCaption)
    // },[])

    const onSubmit = async (e) => {
        e.preventDefault();
        let post;
        if (user) {
            if(modalPostId) {
                post = await dispatch(updatePost({ postId: +modalPostId, body: caption }));
            } 
            if(postId) {
                post = await dispatch(updatePost({ postId: +postId, body: caption }));
            }
        }
        // else {
        //     setDisplayErrors(true);
        // }
        if (post) {
            await dispatch(getAllPosts())
            setShowModal(false)
            setEditShowModal(false)
            if (modalPostId) {
                history.push(`/`);
            }
            if (postId) {
                history.push(`/posts/${postId}`)
            }
        }
    };
 

    // useEffect(() => {
    //     const errors = [];

    //     // if (imageUrl?.length > 255 || imageUrl?.length <= 0) errors.push("Image Url is must be less 255 characters")
    //     // if (!imageUrl?.includes("http" || "https")) errors.push("Please provide a valid image Url")
    //     // if (errors) setErrors(errors)

    // }, [caption])



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
                    <h4>Edit or add and optional post caption...</h4>
                    {/* {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{`* ${error}`}</div>
                    ))} */}
                </div>

                <div className='edit-image-div'>
                    {!currPost?.image_url ?
                    <img id="edit-post-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img' /> :
                    <img id="edit-post-image" src={currPost?.image_url} alt={`${currPost?.body}`}/>
                    }
                </div>

                <div id="edit-post-caption-items">
                    <div>
                        <div id="captions-textarea-div edit-post-text">
                        <textarea
                                placeholder='Add an optional caption...'
                            className='text-area-caption'
                            type='text'
                            name='Caption'
                            onChange={updateCaption}
                            value={caption}
                        ></textarea>
                        </div> 
                    </div>

                    <div className='edit-submit-btn-div'>
                        <button className="edit post-submit-btn" type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditPostForm;
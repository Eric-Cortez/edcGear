import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAllPosts, updatePost } from '../../store/post';

const EditPostForm = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const { postId } = useParams()
    
    const posts = useSelector(state => state?.post?.list)
    const currPost = posts.find(post => post?.id === +postId)


    const [caption, setCaption] = useState(currPost?.body);
    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const user = useSelector(state => state?.session?.user);

    useEffect(()=> {
        dispatch(getAllPosts())

    }, [dispatch])

    const onSubmit = async (e) => {
        e.preventDefault();
        let post;
        if (user && errors.length === 0) {
            post = await dispatch(updatePost({ postId: +postId, body: caption }));
        } else {
            setDisplayErrors(true);
        }
        if (post) {
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
        <div>

            <form onSubmit={onSubmit}>
                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{`* ${error}`}</div>
                    ))}
                </div>
                <h2 id="form-h2"> Edit form </h2>
                <img src={currPost?.image_url} alt={`${currPost?.body}`}/>
                <div >
                    <label
                        className='input-label'
                    >Caption</label>
                    <textarea
                        placeholder='Caption'
                        className='text-area'
                        type='text'
                        name='Caption'
                        required
                        onChange={updateCaption}
                        value={caption}
                    ></textarea>
                </div>

                <div className='submit-btn-div'>
                    <button className="submit-btn" type='submit'>Submit</button>
                </div>
                <Link to="/">Cancel</Link>
            </form>
        </div>
    )
}

export default EditPostForm;
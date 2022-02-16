import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { postPost } from '../../store/post';

const AddCommentForm = ({ post }) => {
    console.log(post.id, post)
    const history = useHistory()
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const user = useSelector(state => state?.session?.user);


    const onSubmit = async (e) => {
        // e.preventDefault();
        // let post;
        // if (user && errors.length === 0) {
        //     post = await dispatch(postPost({ userId: user.id, body: comment}));
        // } else {
        //     setDisplayErrors(true);
        // }
        // if (post) {
        //     history.push(`/`);
        // }
    };

    useEffect(() => {
        const errors = [];

        // if (errors) setErrors(errors)

    }, [])

    const updateComment = (e) => {
        setComment(e.target.value);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{`* ${error}`}</div>
                    ))}

                </div>
                <h2 id="form-h2"> Create a comment </h2>
                <div >
                    <label
                        className='input-label'
                    >Comment</label>
                    <textarea
                        placeholder='Comment'
                        className='text-area'
                        type='text'
                        name='Comment'
                        required
                        onChange={updateComment}
                        value={comment}
                    ></textarea>
                </div>

                <div className='submit-btn-div'>
                    <button className="submit-btn" type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddCommentForm;

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllComments } from '../../store/comment';
import { updateComment } from '../../store/comment';
const EditCommentForm = ({ commentId, setShowModal }) => {

    const dispatch = useDispatch();
    const comments = useSelector(state => state?.comment?.list)
    const currComment = comments.find(comment => comment?.id === +commentId)
    useEffect(()=> {
        (async () => {
            await dispatch(getAllComments())
          
        })();
 
    }, [dispatch])

    const [newComment, setNewComment] = useState(currComment?.body);
    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const user = useSelector(state => state?.session?.user);

    useEffect(() => {
        if (newComment) localStorage.setItem("newComment", newComment)
    }, [dispatch, newComment])

    useEffect(() => {
        const localStorageCaption = localStorage.getItem("newComment")
        setNewComment(localStorageCaption)
    }, [])


    useEffect(() => {
        const errors = [];
        if (!newComment || newComment === " " || newComment === "  ") errors.push("please provide a comment")
        if (newComment?.length > 255) errors.push("Comment must be less than 255 characters")
        if (errors) setErrors(errors)

    }, [newComment])

    const onSubmit = async (e) => {
        e.preventDefault();
    
        
        let editedComment;
        if (user && errors.length === 0) {
            
            editedComment = await dispatch(updateComment({ commentId, body: newComment }));
    
        } else {
            setDisplayErrors(true);
        }
        if (editedComment) {
            await dispatch(getAllComments())
            setShowModal(false)
        }
    };


    return (
        <div className='comment-edit-div'>
            <form onSubmit={onSubmit}>
                <div id="comment-modal-inner-div">
                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{`* ${error}`}</div>
                    ))}

                </div>
                <h2 id="edit-comment-h2"> Edit comment </h2>
                <div id="edit-comment-div">
                    <textarea
                        placeholder='Comment...'
                        className='edit-comment-textarea'
                        type='text'
                        name='Comment'
                        required
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                    ></textarea>
                </div>

                    <div className='edit-comment-submit-btn-div'>
                    <button className="edit-comment-submit-btn" type='submit'>Post</button>
                </div>
                </div>
            </form>
        </div>
    )  
}

export default EditCommentForm;
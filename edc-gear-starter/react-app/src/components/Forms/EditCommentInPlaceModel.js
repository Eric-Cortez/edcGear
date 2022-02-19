import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom';
import { getAllComments } from '../../store/comment';
import { updateComment } from '../../store/comment';
const EditCommentInPlaceModel = ({ commentId }) => {

    const history = useHistory()
    const dispatch = useDispatch();
    // const { commentId } = useParams()
    const comments = useSelector(state => state?.comment?.list)
    const currComment = comments.find(comment => comment?.id === +commentId)
    useEffect(() => {
        (async () => {
            await dispatch(getAllComments())

        })();

    }, [dispatch])

    const [preview, setPreview] = useState(false)
    const [newComment, setNewComment] = useState(currComment?.body);
    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const user = useSelector(state => state?.session?.user);


       useEffect(() => {
        // if (!preview) return;
        // const closePostMenu = () => {
        //     setPreview(false);
        // };
        // document.addEventListener("click", closePostMenu);
        // return () => document.removeEventListener("click", closePostMenu)
    }, [preview])


    const handlePreviewClick = (e) => {

        if (preview) setPreview(false)
        else setPreview(true)
    }


    useEffect(() => {
        if (newComment) localStorage.setItem("newComment", newComment)
    }, [dispatch])

    useEffect(() => {
        const localStorageCaption = localStorage.getItem("newComment")
        setNewComment(localStorageCaption)
    }, [])






    useEffect(() => {
        const errors = [];
        if (!newComment || newComment === " " || newComment === "  ") errors.push("please provide a comment")
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
            setPreview(false)
            // history.push(`/posts/${currComment?.post_id}`);
        }
    };

    useEffect(() => {
        const errors = [];

        // if (errors) setErrors(errors)

    }, [newComment])


    return (
        <div id="outer-edit-div">
            <button className="preview-ellipsis-btn" onClick={handlePreviewClick}><i className="far fa-edit"></i></button>
            { preview &&
            <div id="edit-comment-preview-div">
          
            <form id="in-place-edit" onSubmit={onSubmit}>
                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{`* ${error}`}</div>
                    ))}

                </div>
                
                <div>
                    <label
                        className='input-label'
                    >Edit Comment</label>
                </div>
                <div className='comment-modal-edit'>
                         <textarea
                        placeholder='Comment'
                        className='edit-comment-model-text'
                        type='text'
                        name='Comment'
                        required
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                    ></textarea>
                    <button className="submit-btn-comment-m" type='submit'>Post</button>
                </div>
            </form>

            </div>}
        </div>
    )
}

export default EditCommentInPlaceModel;
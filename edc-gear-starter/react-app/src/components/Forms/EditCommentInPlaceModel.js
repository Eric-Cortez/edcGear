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
        <div>
            <button className="preview-ellipsis-btn"  onClick={handlePreviewClick}>Edit</button>
            { preview &&
            <div>
          
            <form onSubmit={onSubmit}>
                <div className='each-error-div'>
                    {displayErrors && errors?.map((error, ind) => (
                        <div key={ind}>{`* ${error}`}</div>
                    ))}

                </div>
                <h2 id="form-h2"> Edit comment </h2>
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
                        onChange={(e) => setNewComment(e.target.value)}
                        value={newComment}
                    ></textarea>
                </div>

                <div className='submit-btn-div'>
                    <button className="submit-btn" type='submit'>Submit</button>
                </div>
            </form>

            </div>}
        </div>
    )
}

export default EditCommentInPlaceModel;
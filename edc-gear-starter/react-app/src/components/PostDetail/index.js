import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { getAllComments, postComment, removeComment } from '../../store/comment';
import { getAllPosts } from '../../store/post';
import { Link } from 'react-router-dom';
import EditCommentInPlaceModel from '../Forms/EditCommentInPlaceModel';
import "./PostDetail.css"


const PostDetails = ({ postId }) => {

    const dispatch = useDispatch();
    // const { postId } = useParams()

    
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const user = useSelector(state => state?.session?.user);
    const posts = useSelector(state => state?.post?.list)
    const post = posts.find(post => post?.id === +postId)
    const comments = useSelector(state => state?.comment?.list)
    const commentsForPost = comments.filter(comment => comment?.post_id === +postId)
    
    useEffect(() => {

        (async () => {
           await dispatch(getAllComments())
           await dispatch(getAllPosts())
           
        })();


    }, [dispatch])

    const onSubmit = async (e) => {
        e.preventDefault();
        let newComment;
        if (user && errors.length === 0) {
            newComment = await dispatch(postComment({ userId: user.id, body: comment, postId }));
            setDisplayErrors(false)
        } else {
            setDisplayErrors(true);
        }
        if (newComment) {
            await dispatch(getAllComments())
            setComment("")
        }
    };

    useEffect(() => {
        const errors = [];
        if(!comment || comment === " " || comment === "  ") errors.push("please provide a comment")
        if (errors) setErrors(errors)

    }, [comment])


    const handleDelete = async (e) => {
        e.preventDefault()
        const commentId = e.target.value
        const data = await dispatch(removeComment(commentId))
        if (data.message === "Delete Successful") {
            await dispatch(getAllComments())
        }
    }

    const updateComment = (e) => {
        setComment(e.target.value);
    };

    return (
        <div className='base-model-div'>
            <div>
          
                <img id="post-model-img" src={post?.image_url} alt="post"/>
            </div>

            <div id="post-comment-div">
                <div>
                    --> image and Username go here
                </div>
                <div></div>
                <div>
                    <div>
                        --> USERIMAGE
                    </div>
                    <div>
                        USERNAME
                        <p>body: {post?.body}</p>
                    </div>
                </div>
                
                { commentsForPost && commentsForPost.map(comment => (
                    <>
                       <h2>comments</h2>
                        <p>{comment.body}</p>
                        <p>{comment.updated_at}</p>
                        {comment.user_id === user.id &&
                            <>
     
                            <EditCommentInPlaceModel commentId={comment.id}/>
                            {/* <Link to={`/comments/${comment.id}/edit`}>edit</Link> */}



                                <button onClick={handleDelete} value={comment?.id}>delete</button>
                            </>}
                    </>
                ))}
                
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
        </div>        
    )
}

export default PostDetails;


 
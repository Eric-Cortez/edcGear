import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllComments, postComment, removeComment } from '../../store/comment';
import { getAllPosts } from '../../store/post';
import EditCommentModal from '../../context/EditCommentModal';
import "./PostDetail.css"
import { getAllUsers } from "../../store/user"
import { calTimeFromMil } from "../utils/index.js"
import { Link } from 'react-router-dom';

const PostDetails = ({ postId }) => {

    const dispatch = useDispatch();

    
    const [comment, setComment] = useState('');
    const [errors, setErrors] = useState([]);
    const [displayErrors, setDisplayErrors] = useState(false);
    const user = useSelector(state => state?.session?.user);
    const posts = useSelector(state => state?.post?.list)
    const post = posts.find(post => post?.id === +postId)
    const comments = useSelector(state => state?.comment?.list)
    const commentsForPost = comments.filter(comment => comment?.post_id === +postId)
    const allUsers = useSelector(state => state?.user?.list)
  


    useEffect(() => {

        (async () => {
            await dispatch(getAllComments())
            await dispatch(getAllPosts())
            await dispatch(getAllUsers())

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
        if (!comment || comment === " " || comment === "  ") errors.push("please provide a comment")
        if (errors) setErrors(errors)

    }, [comment])


    const handleDelete = (commentId) => async (e) => {
        e.preventDefault()
        const data = await dispatch(removeComment(commentId))
        if (data && data.message === "Delete Successful") {
            await dispatch(getAllComments())
        }
    }

    const updateComment = (e) => {
        setComment(e.target.value);
    };




    return (
        <div className='base-modal-div'>
           
            <div>
                {!post?.image_url ?
                 <img id="post-modal-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img' /> :
                <Link to={`/posts/${post?.id}`}>
                     <img id="post-modal-img" src={post?.image_url} alt="post" />
                 </Link>
                }
            </div>


            <div id="post-comment-div">
                <div id="post-model-top-content-div">
                    <Link id="post-link" className="comment-link" to={`/users/${post?.user_id}`}> 
                        {!allUsers?.find(user => user?.id === post?.user_id)?.image_url ?
                            <img className="post-modal-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img' /> :
                            <img className="post-modal-image" src={allUsers?.find(user => user?.id === post?.user_id)?.image_url} alt="user-profile" />
                        }
                        <h5 id="profile-username-model">{allUsers?.find(user => user?.id === post?.user_id)?.username}</h5>
                    </Link>
                  
                </div>

                <div id="comment-list-div">
                    <div className='right-post-model-content'>
                        <Link id="profile-link" className="comment-link" to={`/users/${post?.user_id}`}> 
                            <div className='left-post-div'>
                                {!allUsers?.find(user => user?.id === post?.user_id)?.image_url ?
                                 <img className="post-modal-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img' /> :
                                 <img className="post-modal-image" src={allUsers?.find(user => user?.id === post?.user_id)?.image_url} alt="user-profile" />
                                }
                            </div>
                       </Link>

                        <div className='each-comment-content-inner inline-comment'>
                            <Link id="profile-link-username" className="comment-link" to={`/users/${post?.user_id}`}>
                                <h5 className='username-p-comment'>{allUsers?.find(user => user?.id === post?.user_id)?.username}</h5>
                            </Link>
                                <p className="post-content-model"> {post?.body}</p>
                        </div>
                    </div>
                            <p id="post-last-edited">Edited · {calTimeFromMil(Date.parse(new Date().toString()) - Date.parse(post?.updated_at), "short")}</p> 
                    

                    {commentsForPost && commentsForPost.map(comment => (
                        <div key={`${comment.id} 1`} className='each-comment-div'>
                            <Link id="profile-link" className="comment-link" to={`/users/${comment?.user_id}`}> 
                                <div className='left-post-comment-div'>
                                    {!allUsers?.find(user => user?.id === comment?.user_id)?.image_url ?
                                        <img className="post-modal-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img' /> :
                                        <img className="post-modal-image" src={allUsers?.find(user => user?.id === comment?.user_id)?.image_url} alt="user-profile" />
                                    }
                                </div>
                            </Link>

                            <div className='right-post-comment-div'>
                                <div id="each-comment-content">

                                    <div id="each-comment-content-inner">
                                        <Link id="profile-link-username" className="comment-link" to={`/users/${comment?.user_id}`}> 
                                            <h5 className='username-p-comment'>{allUsers.find(user => user?.id === comment?.user_id)?.username}</h5> 
                                        </Link>
                                        <p className="post-content-model"> {comment?.body}</p>
                                    </div>
                                </div>
                                <div>

                                    <div className='comment-timestamp-div'>
                                        <p className="display-time-posted" key={post?.updated_at}>
                                            {calTimeFromMil(Date.parse(new Date().toString()) - Date.parse(comment?.updated_at), "short")}
                                        </p>
                                   
                            
                                    {comment.user_id === user.id &&
                                        <div id="comment-control">
                                                <button id="post-modal-del" onClick={handleDelete(comment?.id)}><i className="fa fa-trash"></i></button>
                                            <EditCommentModal commentId={comment?.id} />

                                            
                                        </div>} 
                                    </div>
                                </div>
                            </div>

                        </div>))}
                </div>

                <div id="model-likes-div">
                    <div className='post-timestamp-div'>
                        <p className="display-time-posted" key={post?.updated_at}>
                            {calTimeFromMil(Date.parse(new Date().toString()) - Date.parse(post?.updated_at))}
                        </p>
                    </div>
                </div>

                <div id="comment-form-div">
                    <form onSubmit={onSubmit}>
                        <div className='each-error-div'>
                            {displayErrors && errors?.map((error, ind) => (
                                <div key={ind}>{`* ${error}`}</div>
                            ))}
                        </div>
                        <div>


                            <div id="inner-post-modal-comments">
                                <textarea
                                    className="post-detail-textarea"
                                    placeholder='Add a comment...'
                                    type='text'
                                    name='Comment'
                                    required
                                    onChange={updateComment}
                                    value={comment}
                                ></textarea>

                                <div className='submit-btn-div'>
                                    <button className="comment-submit-btn" type='submit'>Post</button>
                                </div>
                            
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PostDetails;



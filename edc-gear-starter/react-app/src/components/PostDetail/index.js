import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllComments, postComment, removeComment } from '../../store/comment';
import { getAllPosts } from '../../store/post';
import EditCommentModal from '../../context/EditCommentModal';
import "./PostDetail.css"
import { getAllUsers } from "../../store/user"
import { calTimeFromMil } from "../utils/index.js"

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


    const handleDelete = async (e) => {
        e.preventDefault()
        const commentId = e.target.value
        const data = await dispatch(removeComment(commentId))
        if (data && data.message === "Delete Successful") {
            await dispatch(getAllComments())
        }
    }

    const updateComment = (e) => {
        setComment(e.target.value);
    };


    // const calTimFromMil = (milSec, type) => {
    //     const sec = 1000
    //     const min = 60 * sec
    //     const hour = 60 * min
    //     // const day = hour * 24

    //     const currSec = Math.floor((milSec % min) / sec)
    //     const currMin = Math.floor((milSec % hour) / min)
    //     const currHour = Math.floor((milSec / hour))
    //     const currDay = Math.floor(currHour / 24)


    //     if (type === "short") {
    //         if (currSec <= 60 && currMin === 0 && currHour === 0 && currDay === 0) return `< 1min`;
    //         if (currMin <= 60 && currHour === 0 && currDay === 0) return `${currMin}m`;
    //         if (currHour <= 60 && currDay === 0) return `${currHour}h`;
    //         if (currDay >= 2 || currHour > 24) return `${currDay}d`;
    //     } else {
    //         if (currSec === 1 && currMin === 0 && currHour === 0 && currDay === 0) return `${currSec} SECOND AGO`;
    //         if (currSec <= 60 && currMin === 0 && currHour === 0 && currDay === 0) return `${currSec} SECONDS AGO`;
    //         if (currMin === 1 && currHour === 0 && currDay === 0) return `${currMin} MINUTE AGO`;
    //         if (currMin <= 60 && currHour === 0 && currDay === 0) return `${currMin} MINUTES AGO`;
    //         if (currHour === 1 && currDay === 0) return `${currHour} HOUR AGO`;
    //         if (currHour <= 60 && currDay === 0) return `${currHour} HOURS AGO`;
    //         if (currHour > 24) return `${currDay} DAY AGO`
    //         if (currDay >= 2) return `${currDay} DAYS AGO`;
    //     }
    //     // return `${currDay}day ${currHour}hour ${currMin}min ${currSec}sec`
    // }   





    return (
        <div className='base-modal-div'>
           
            <div>
                <img id="post-modal-img" src={post?.image_url} alt="post" />
            </div>


            <div id="post-comment-div">
                <div id="post-model-top-content-div">
                    <img className="post-modal-image" src={user?.image_url} alt="user-profile" />
                    <h5 id="profile-username-model">{user?.username}</h5>
                </div>

                <div id="comment-list-div">
                    <div className='right-post-model-content'>
                        <div className='left-post-div'>
                            <img className="post-modal-image" src={user?.image_url} alt="user-profile" />
                        </div>
                        <div className='right-post-div'>
                            <h5 className='username-p '>{user?.username}</h5><p className="post-content-model"> {post?.body}</p>
                        </div>
                    </div>
                            <p id="post-last-edited">Edited · {calTimeFromMil(Date.parse(new Date().toString()) - Date.parse(post?.updated_at), "short")}</p> 
                    

                    {commentsForPost && commentsForPost.map(comment => (
                        <div key={`${comment.id} 1`} className='each-comment-div'>
                            <div className='left-post-comment-div'>
                                <img className="post-modal-image" src={allUsers?.find(user => user?.id === comment?.user_id)?.image_url} alt="user-profile" />
                            </div>

                            <div className='right-post-comment-div'>
                                <div id="each-comment-content">
                                    <div id="each-comment-content-inner">
                                    <h5 className='username-p-comment'>{allUsers.find(user => user?.id === comment?.user_id)?.username}</h5> <p className="post-content-model"> {comment?.body}</p>
                                    </div>
                                    <button className="like-btn"><i className="fas new fa-heart"></i></button> 
                                </div>
                                <div>

                                    <div className='comment-timestamp-div'>
                                        <p className="display-time-posted" key={post?.updated_at}>
                                            {calTimeFromMil(Date.parse(new Date().toString()) - Date.parse(comment?.updated_at), "short")}
                                        </p>
                                   
                            
                                    {comment.user_id === user.id &&
                                        <div id="comment-control">
                                            <button id="post-modal-del"onClick={handleDelete} value={comment?.id}>x</button>
                                            <EditCommentModal commentId={comment?.id} />

                                            
                                        </div>} 
                                    </div>
                                </div>
                            </div>

                        </div>))}
                </div>

                <div id="model-likes-div">
                    -count- likes
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
                                {/* <label
                                    className='input-label'
                                ><i className="far fa-smile"></i></label> */}
                                {/* <label
                                    className='input-label'
                                >Comment</label> */}
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



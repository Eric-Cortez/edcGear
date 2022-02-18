import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getAllPosts, removePost } from '../../store/post';
import "./HomePage.css"
// import AddCommentForm from '../Forms/AddCommentFor';
import { getAllComments } from '../../store/comment'
import { getAllUsers } from "../../store/user"
// import EditDelete from './EditDelete';
import EditDeleteModal from '../../context/EditDeletePostModal';
// import CommentCount from '../CommentCount';

function HomePage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const allPosts = useSelector(state => state?.post?.list)
    const user = useSelector(state => state?.session?.user);
    const comments = useSelector(state => state?.comment?.list);
    const users = useSelector(state => state?.user?.list)

  
 



    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getAllComments())
        dispatch(getAllUsers())
    }, [dispatch])

    const calTimFromMil = (milSec) => {
        const sec = 1000 
        const min = 60 * sec 
        const hour = 60 * min 
        const day = hour * 24 

        const currSec = Math.floor((milSec % min) / sec)
        const currMin = Math.floor((milSec % hour) / min)
        const currHour = Math.floor((milSec / hour ))
        const currDay = Math.floor(currHour / 24)

        if (currSec === 1 && currMin === 0 && currHour === 0 && currDay === 0) return `${currSec} SECOND AGO`;
        if (currSec <= 60 && currMin === 0 && currHour === 0 && currDay === 0) return `${currSec} SECONDS AGO`;
        if (currMin === 1 && currHour === 0 && currDay === 0) return `${currMin} MINUTE AGO`;
        if (currMin <= 60 && currHour === 0 && currDay === 0) return `${currMin} MINUTES AGO`;
        if (currHour === 1 && currDay === 0) return `${currHour} HOUR AGO`;
        if (currHour <= 60 && currDay === 0) return `${currHour} HOURS AGO`;
        if (currHour > 24) return `${currDay} DAY AGO`
        if (currDay >= 2) return `${currDay} DAYS AGO`;
        // return `${currDay}day ${currHour}hour ${currMin}min ${currSec}sec`
    }   


    return (
        <div id="home-page">
            <div className='thread-div'>

                {allPosts && allPosts?.map(post => (
                    <div key={`1${post.id}`}className='each-post-div'>
                        {users &&
                        <div className='user-info-div'>
                            <div className='info-img-name'>
                                <img className="user-image" src={users.find(user => user?.id === post?.user_id)?.image_url} alt="user-profile"/>
                                <p className='top-username-p'>{users.find(user => user?.id === post?.user_id)?.username}</p>
                            </div>


                          
                                {/* <EditDelete post={post}  /> */}
                                   
                                        <EditDeleteModal post={post} />

                                        {/* // <div className='preview-div'>  
                                        //     <div className='post-btns-preview-div'>
                                        //         <Link className="post-preview-edit" to={`/posts/${post?.id}/edit`}>edit</Link>
                                        //         <button className="post-preview-del" onClick={handleDelete} value={post?.id}>delete</button>
                                        //     </div>
                                        // </div>
                                  */}
                        
                           
                        </div> }
                        <img className="thread-image"key={post?.image_url} src={post?.image_url} alt="posts on feed"/> 
                        <div className='post-nav-buttons'>
                            <button className="like-btn"><i className="far fa-heart"></i></button> 
                            {/* <button className="un-like-btn"><i className="fas fa-heart"></i></button> */}
                            
                            
                            <Link to={`/posts/${post?.id}`} className="comment-on-post-btn open-modal-btn"><i className="far fa-comment"></i></Link>
                       
                       
                        </div>
                        <div className='thread-like-count-div'>
                            <p> count - likes</p>
                        </div>
                        <div className='post-caption-div'>
                            <p className='caption-user-name'>{users.find(user => user?.id === post?.user_id)?.username}</p>
                            <p className='caption-body-thread' key={post?.body}>{post?.body}</p>
                        </div>
                        <div className='thread-comment-count-div'>
                            {comments && comments?.filter(comments => comments?.post_id === post?.id).length > 0 ?
                            <Link className="comment-link" to={`/posts/${post?.id}`}> 
                            View all {comments?.filter(comments => comments?.post_id === post?.id).length} comment
                            </Link>: ""}
                        </div>
                        <div className='post-timestamp-div'>
                            <p className="display-time-posted" key={post?.updated_at}>
                                {calTimFromMil(Date.parse(new Date().toString()) - Date.parse(post?.updated_at))}
                            </p>
                        </div>
                      
                            {/* <AddCommentForm post={post}/> */} 
                      
                       
                    </div>
                ))}
            </div>
        </div >
    );
}
export default HomePage;
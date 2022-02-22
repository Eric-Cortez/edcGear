import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../store/post';
import "./HomePage.css"
// import AddCommentForm from '../Forms/AddCommentFor';
import { getAllComments } from '../../store/comment'
import { getAllUsers } from "../../store/user"
// import EditDelete from './EditDelete';
import EditDeleteModal from '../../context/EditDeletePostModal';
// import CommentCount from '../CommentCount';
import PostDetailModal from '../../context/PostDetailModal';
import { calTimeFromMil } from "../utils/index.js"

function HomePage() {
    const dispatch = useDispatch()
    // const history = useHistory()
    const allPosts = useSelector(state => state?.post?.list)
    // const user = useSelector(state => state?.session?.user);
    const comments = useSelector(state => state?.comment?.list);
    const users = useSelector(state => state?.user?.list)

  
 



    useEffect(() => {

        (async () => {
           await dispatch(getAllPosts())
           await dispatch(getAllComments())
           await dispatch(getAllUsers())
        })();

    }, [dispatch])



    return (
        <div id="home-page">
            <div className='thread-div'>

                {allPosts && allPosts?.map(post => (
                    <div key={`1${post.id}`}className='each-post-div'>
                        {users &&
                            <div key={`2${post.id}`} className='user-info-div'>
                                <div key={`3${post.id}`} className='info-img-name'>
                                <Link id="post-link" className="comment-link" to={`/users/${post?.user_id}`}> 
                                    <img className="user-image" src={users.find(user => user?.id === post?.user_id)?.image_url} alt="user-profile"/>
                                    <p className='top-username-p'>{users.find(user => user?.id === post?.user_id)?.username}</p>
                                </Link>
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
                            <button className="like-btn"><i className="fas fa-heart"></i></button> 
                            {/* <button className="un-like-btn"><i className="fas fa-heart"></i></button> */}
                            
                            <PostDetailModal postId={post?.id} commentBubble="commentBubble"/>
                            {/* <Link to={`/posts/${post?.id}`} className="comment-on-post-btn open-modal-btn"><i className="far fa-comment"></i></Link> */}
                       
                       
                        </div>
                        <div className='thread-like-count-div'>
                            <p> count - likes</p>
                        </div>
                        
                        <div className='post-caption-div'>
                              <Link className="thread-user-profile-link" to={`/users/${post?.user_id}`}>
                                    <p className='caption-user-name'>{users.find(user => user?.id === post?.user_id)?.username}</p>
                              </Link>
                            <div id="post-wrapper">
                                <p className='caption-body-thread extra-content' key={post?.body}>{post?.body}</p>
                            </div>
                        

                        </div>
                        <div className='thread-comment-count-div'>
                           
                             {comments && comments?.filter(comments => comments?.post_id === post?.id).length > 0 ?
                            <Link className="comment-link" to={`/posts/${post?.id}`}> 
                            View all {comments?.filter(comments => comments?.post_id === post?.id).length} comment
                            </Link>: ""} 

                        </div>
                        <div className='post-timestamp-div'>
                            <p className="display-time-posted" key={post?.updated_at}>
                                {calTimeFromMil(Date.parse(new Date().toString()) - Date.parse(post?.updated_at))}
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
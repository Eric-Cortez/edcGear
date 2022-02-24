import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../store/post';
import "./HomePage.css"
import { getAllComments } from '../../store/comment'
import { getAllUsers } from "../../store/user"
import EditDeleteModal from '../../context/EditDeletePostModal';
import PostDetailModal from '../../context/PostDetailModal';
import { calTimeFromMil } from "../utils/index.js"

function HomePage() {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state?.post?.list)
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
                                  {!users.find(user => user?.id === post?.user_id)?.image_url ?
                                    <img className="user-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img' /> :       
                                    <img className="user-image" src={users.find(user => user?.id === post?.user_id)?.image_url} alt="user-profile"/>
                                  }
                                    <p className='top-username-p'>{users.find(user => user?.id === post?.user_id)?.username}</p>
                                </Link>
                            </div>
                                        <EditDeleteModal post={post} />

                        </div> }
                        {!post?.image_url ?
                            <img className="thread-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img' /> :
                        <img className="thread-image" key={post?.image_url} src={post?.image_url} alt="posts on feed"/> 
                        }
                        <div className='post-nav-buttons'>
                            
                            <PostDetailModal postId={post?.id} commentBubble="commentBubble"/>
                       
                        </div>
                        <div className='post-caption-div'>
                            {post?.body.length ? 
                              <Link className="thread-user-profile-link" to={`/users/${post?.user_id}`}>
                                    <p className='caption-user-name'>{users.find(user => user?.id === post?.user_id)?.username}</p>
                              </Link> : ""}
                            <div id="post-wrapper">
                                <p className='caption-body-thread extra-content' key={post?.body}>{post?.body}</p>
                            </div>
                        

                        </div>
                        <div className='thread-comment-count-div'>
                           
                             {comments && comments?.filter(comments => comments?.post_id === post?.id).length === 1 ?
                            <Link className="comment-link" to={`/posts/${post?.id}`}> 
                            View all {comments?.filter(comments => comments?.post_id === post?.id).length} comment
                            </Link>: ""} 
                            {comments && comments?.filter(comments => comments?.post_id === post?.id).length > 1 ?
                                <Link className="comment-link" to={`/posts/${post?.id}`}>
                                    View all {comments?.filter(comments => comments?.post_id === post?.id).length} comments
                                </Link> : ""} 


                        </div>
                        <div className='post-timestamp-div'>
                            <p className="display-time-posted" key={post?.updated_at}>
                                {calTimeFromMil(Date.parse(new Date().toString()) - Date.parse(post?.updated_at))}
                            </p>
                        </div>
                      
                    </div>
                ))}
            </div>
        </div >
    );
}
export default HomePage;
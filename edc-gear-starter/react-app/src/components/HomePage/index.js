import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getAllPosts, removePost } from '../../store/post';
import "./HomePage.css"
// import AddCommentForm from '../Forms/AddCommentFor';
import { getAllComments } from '../../store/comment'
import { getAllUsers } from "../../store/user"

// import CommentCount from '../CommentCount';

function HomePage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const allPosts = useSelector(state => state?.post?.list)
    const user = useSelector(state => state?.session?.user);
    const comments = useSelector(state => state?.comment?.list);
    const users = useSelector(state => state?.user?.list)
  
    const handleDelete = async(e) => {
        e.preventDefault()
        const postId = e.target.value
        const data = await dispatch(removePost(postId))
        if (data.message === "Delete Successful" ){
            dispatch(getAllPosts())
            history.push("/")
        }
    }

    useEffect(() => {
        dispatch(getAllPosts())
        dispatch(getAllComments())
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div id="home-page">
            <div className='thread-div'>

                {allPosts && allPosts?.map(post => (
                    <div key={`1${post.id}`}className='each-post-div'>
                        {users &&
                        <div>
                           
                            <img className="user-image" src={users.find(user => user?.id === post?.user_id)?.image_url} alt="user-profile"/>
                            <p>{users.find(user => user?.id === post?.user_id)?.username}</p>
                           
                        </div> }
                        <img className="thread-image"key={post?.image_url} src={post?.image_url} alt="posts on feed"/> 
                       
                        <button className="like-btn"><i className="far fa-heart"></i></button> 
                        {/* <button className="un-like-btn"><i className="fas fa-heart"></i></button> */}
                        <button className="comment-on-post-btn"><i className="far fa-comment"></i></button>
                        <p key={post?.body}>{post?.body}</p>
                        <p key={post?.updated_at}>{post?.updated_at}</p>
                        <div className='thread-image-content'>
                            {comments && 
                            <Link to={`/posts/${post?.id}`}> View all  {comments?.filter(comments => comments?.post_id === post?.id).length} comment
                            </Link>}

                            {post.user_id === user.id &&
                            <>
                            <Link to={`/posts/${post?.id}/edit`}>edit</Link>
                            <button onClick={handleDelete} value={post?.id}>delete</button>
                            </>}
                            {/* <AddCommentForm post={post}/> */} 
                        </div>
                       
                    </div>
                ))}
            </div>
        </div >
    );
}
export default HomePage;
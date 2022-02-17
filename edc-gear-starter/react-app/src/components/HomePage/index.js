import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getAllPosts, removePost } from '../../store/post';
import "./HomePage.css"
import AddCommentForm from '../Forms/AddCommentFor';
import { getAllComments } from '../../store/comment'

// import CommentCount from '../CommentCount';

function HomePage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const allPosts = useSelector(state => state?.post?.list)
    const user = useSelector(state => state?.session?.user);
    const comments = useSelector(state => state?.comment?.list);
    
  
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
    }, [dispatch])

    return (
        <div id="home-page">
            <div className='thread-div'>

                {allPosts && allPosts?.map(post => (
                    <div key={`1${post.id}`}className='each-post-div'>
                        <img className="thread-image"key={post?.image_url} src={post?.image_url} alt="posts on feed"/> 
                        <p key={post?.body}>{post?.body}</p>
                        <p key={post?.updated_at}>{post?.updated_at}</p>
                        
                        {comments && 
                        <Link to={`/posts/${post?.id}`}> View all  {comments?.filter(comments => comments?.post_id === post?.id).length} comment
                        </Link>
                       }

                        { post.user_id === user.id &&
                        <>
                         <Link to={`/posts/${post?.id}/edit`}>edit</Link>
                         <button onClick={handleDelete} value={post?.id}>delete</button>
                        </>}
                        {/* <AddCommentForm post={post}/> */}
                    </div>
                ))}
            </div>
        </div >
    );
}
export default HomePage;
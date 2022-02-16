import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { getAllPosts, removePost } from '../../store/post';
import "./HomePage.css"

function HomePage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const allPosts = useSelector(state => state?.post?.list)
    const user = useSelector(state => state?.session?.user);
    // const currPost = allPosts.filter(post => post?.user_id === user?.id)
  
    const handleDelete = async(e) => {
        e.preventDefault()
        const postId = e.target.value
        console.log(postId)
        const data = await dispatch(removePost(postId))
        if (data.message === "Delete Successful" ){
            dispatch(getAllPosts())
            history.push("/")
        }
    }

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div id="home-page">
            <div className='thread-div'>

                {allPosts && allPosts?.map(post => (
                    <div className='each-post-div'>
                        <img className="thread-image"key={post?.image_url} src={post?.image_url} alt="posts on feed"/> 
                        <p key={post?.body}>{post?.body}</p>
                        <p key={post?.updated_at}>{post?.updated_at}</p>
                        { post.user_id === user.id &&
                        <>
                         <Link to={`/posts/${post.id}/edit`}>edit</Link>
                         <button onClick={handleDelete} value={post?.id}>delete</button>
                        </>}
                    </div>
                ))}
            </div>
        </div >
    );
}
export default HomePage;
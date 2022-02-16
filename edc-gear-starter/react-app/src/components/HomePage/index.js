import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../../store/post';
import "./HomePage.css"

function HomePage() {
    const dispatch = useDispatch()
    const allPosts = useSelector(state => state?.post?.list)
    console.log("Posts",allPosts)


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
                    </div>
                ))}
            
            </div>
        </div >
    );
}
export default HomePage;
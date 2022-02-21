
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getAllSearch } from "../../store/search"
import "./SearchRes.css"
import { Link } from 'react-router-dom';

function SearchResults() {
   const { searchQuery } = useParams()
  
   const dispatch = useDispatch()
   const postSearchRes = useSelector(state => state?.search?.postsList)
   const userSearchRes = useSelector(state => state?.search?.usersList)
   

    useEffect(() => {

        (async () => {
            await dispatch(getAllSearch(searchQuery))
            // await dispatch(getAllComments())
            // await dispatch(getAllPosts())
            // await dispatch(getAllUsers())

        })();


    }, [dispatch])


  return (
    <div id="main-search-res-div">
        <div id="search-res-content">
            <div>

            <h2 id="search-res">Results</h2>
            </div>
            {userSearchRes && userSearchRes?.map(user => (
                <div key={`1${user?.id}`} id="results-div">
                    <Link id="post-link" className="comment-link" to={`/users/${user?.id}`}> 
                        <img id="search-profile-img" src={user?.image_url} alt="profile"/>
                        <h4 key={`2${user?.id}`}>{user?.username}</h4>
                  </Link>
                </div>
            ))}
            
            {postSearchRes && postSearchRes?.map(post => (
                <>
                    <div  key={`1${post?.id}`} id="results-div">
                        <Link id="post-link" className="comment-link" to={`/posts/${post?.id}`}> 
                            <img key={`2${post?.id}`} id="search-profile-img" src="https://pbs.twimg.com/profile_images/530428988326674432/9rLDicts_400x400.jpeg" alt="#" />
                            <h5 id="post-res" key={`3${post?.id}`}> {post?.body}</h5>
                        </Link>
                    </div>
                </>
            ))}

              {(userSearchRes.length === 0 && postSearchRes.length === 0 || searchQuery === "404-no-res-found") && 
                  <h4 id="no-res-h5">No results found.</h4>
            }
        </div>
    </div>
  )
}

export default SearchResults
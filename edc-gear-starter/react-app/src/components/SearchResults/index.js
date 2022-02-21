
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getAllSearch } from "../../store/search"
import "./SearchRes.css"

function SearchResults() {
   const { searchQuery } = useParams()
   console.log("ppppparams",searchQuery === "#")
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
   
        <h2>User Search Results</h2>
        {userSearchRes && userSearchRes?.map(user => (
            <div key={`1${user?.id}`}>
                <img id="search-profile-img" src={user?.image_url} alt="profile"/>
    
                <p key={`2${user?.id}`}>Username: {user?.username}</p>
            </div>
        ))}
        
        {postSearchRes && postSearchRes?.map(post => (
            <div key={`1${post?.id}`}>
                <p key={`2${post?.id}`}>post caption {post?.body}</p>
            </div>
        ))}
    
    </div>
  )
}

export default SearchResults
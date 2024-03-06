
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getAllSearch } from "../../store/search"
import { getAllPosts } from "../../store/post"
import "./SearchRes.css"
import { Link } from 'react-router-dom';
import { brokenUrl } from '../../utils/broken_image_url';

function SearchResults() {
   const { searchQuery } = useParams()
  
   const dispatch = useDispatch()
   const postSearchRes = useSelector(state => state?.search?.postsList)
   const userSearchRes = useSelector(state => state?.search?.usersList)
   const allPosts = useSelector(state => state?.post?.list)
   const tagPost = allPosts.filter(post =>post.body.includes("#"))

   

    useEffect(() => {

        (async () => {
            await dispatch(getAllSearch(searchQuery))
            await dispatch(getAllPosts())
        })();


    }, [searchQuery, dispatch])


  return (
    <div id="main-search-res-div">
        <div id="search-res-content">
            <div>

            <h2 id="search-res">Results</h2>
 
            {searchQuery === "get-all-tags" && tagPost.map(post => (
                <div key={`1${post?.id}`} id="results-div">
                    <Link id="post-link" className="comment-link" to={`/posts/${post?.id}`}>
                        <img key={`2${post?.id}`} id="search-profile-img" src="https://pbs.twimg.com/profile_images/530428988326674432/9rLDicts_400x400.jpeg" alt="#" 
                            onError={(e) => { e.target.src = brokenUrl; e.target.onError = null; }}
                        />
                        <h5 id="post-res" key={`3${post?.id}`}> {post?.body}</h5>
                    </Link>
                </div>
            ))} 


            </div>
            {userSearchRes && userSearchRes?.map(user => (
                <div key={`1${user?.id}`} id="results-div">
                    <Link id="post-link" className="comment-link" to={`/users/${user?.id}`}> 
                        {!user?.image_url ?
                            <img id="search-profile-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img' /> :
                            <img id="search-profile-img" src={user?.image_url} alt="profile"
                                onError={(e) => { e.target.src = brokenUrl; e.target.onError = null; }}
                            />
                       }
                        <h4 key={`2${user?.id}`}>{user?.username}</h4>
                  </Link>
                </div>
            ))} 
            
            {postSearchRes && postSearchRes?.map(post => (
                    <div  key={`1${post?.id}`} id="results-div">
                        <Link id="post-link" className="comment-link" to={`/posts/${post?.id}`}> 
                            <img key={`2${post?.id}`} id="search-profile-img" src="https://pbs.twimg.com/profile_images/530428988326674432/9rLDicts_400x400.jpeg" alt="#" 
                                onError={(e) => { e.target.src = brokenUrl; e.target.onError = null; }}
                            />
                            <h5 id="post-res" key={`3${post?.id}`}> {post?.body}</h5>
                        </Link>
                    </div>
            ))}

              {searchQuery !== "get-all-tags" && ((userSearchRes.length === 0 && postSearchRes.length === 0) || searchQuery === "404-no-res-found") && 
                  <h4 id="no-res-h5">No results found.</h4>
            }
        </div>
    </div>
  )
}

export default SearchResults
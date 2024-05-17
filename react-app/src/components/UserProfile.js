import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../index.css"
import "./UserProfile.css"
import { getAllPosts } from "../store/post.js"
import { useDispatch, useSelector } from 'react-redux';
import PageNotFound from "../components/PageNotFound/index.js"
import { getAllUsers } from "../store/user"
import { brokenUrl } from '../utils/broken_image_url.js';

function UserProfile() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch()
  const allPosts = useSelector(state => state?.post?.list)
  const usersPosts = allPosts.filter(post => post?.user_id === +userId)
  const allUsers = useSelector(state => state?.user?.list)
  const profileUser = allUsers.find(user => user?.id === +userId)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  useEffect(() => {

    (async () => {
      await dispatch(getAllPosts())
      await dispatch(getAllUsers())
    })();

  }, [dispatch]);




  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      if (response.ok) {
        const user = await response.json();
        setUser(user);
      }
    })();
  }, [userId]);

  if (!profileUser) {
    return (
      <PageNotFound />
    )
  }

  return (
    <div id="profile">
      <div id="top-profile-div"> 
        <div id="profile-user-image-div">
          {!user?.image_url ?
            <img id="profile-image" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img'/> :
            <img id="profile-image" src={user?.image_url} alt="user-profile"
              onError={(e) => { e.target.src = brokenUrl; e.target.onError = null; }}
            />
          }
        </div>

        <div id="user-profile-info"> 
           <div>
              <h3 id="profile-username">{user?.username}</h3>
            <h5 id="profile-email">email: {user?.email}</h5>
           </div>
          {usersPosts && 
              <div id="post-count-div">
              <p id="post-count-p">{usersPosts?.length}</p>
              {usersPosts?.length === 1 ?
                <p id="post-label">post</p> : <p id="post-label">posts</p>}
               
            </div>}
        </div> 
      </div>


      <div className='line-break'>
        <div className='line-break-inner'></div>
      </div>

      <div id="lower-profile-div">
        <div className="all-post-img">
        <div id="profile-images-div">
            {usersPosts && usersPosts.map(post => (
              <div key={`1${post?.id}`}>
                <Link key={`2${post?.id}`} to={`/posts/${post?.id}`}>
                  {!post?.image_url ?
                    <img id="each-user-post-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img' /> :
                  <img key={`3${post?.id}`} id="each-user-post-img" src={post?.image_url} alt="posts"
                      onError={(e) => { e.target.src = brokenUrl; e.target.onError = null; }}
                  />
                  }
                </Link>
              </div>
            ))} 
        </div>
      </div>
      </div>



    </div>
  );
}
export default UserProfile;

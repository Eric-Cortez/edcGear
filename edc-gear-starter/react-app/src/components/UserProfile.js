import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import "../index.css"
import "./UserProfile.css"
import { getAllPosts } from "../store/post.js"
import { useDispatch, useSelector } from 'react-redux';

function UserProfile() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();
  const dispatch = useDispatch()
  const allPosts = useSelector(state => state?.post?.list)
  const usersPosts = allPosts.filter(post => post?.user_id === +userId)

  
  useEffect(() => {

    (async () => {
      await dispatch(getAllPosts())
    })();

  }, [dispatch]);


  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

 
  


  return (
    <div id="profile">

      <div id="top-profile-div"> 
        
        <div id="profile-user-image-div">
          <img id="profile-image" src={user?.image_url} alt="user-profile"/>
        </div>

        <div id="user-profile-info"> 

           <div>
              <h3 id="profile-username">{user?.username}</h3>
            <h5 id="profile-email">email: {user?.email}</h5>
           </div>

          {usersPosts &&
              <div id="post-count-div">
                <p id="post-count-p">{usersPosts?.length}</p>
                <p id="post-label">posts</p>
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
              <div>
                <Link to={`/posts/${post?.id}`}>
                <img id="each-user-post-img" src={post?.image_url} alt="posts"/>
                </Link>
              </div>
            ))
            
            }
        </div>
      </div>
      </div>
    </div>
  );
}
export default UserProfile;

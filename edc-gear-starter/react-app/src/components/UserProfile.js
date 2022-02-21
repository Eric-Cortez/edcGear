import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
        
        <div>
          <img id="profile-image" src={user?.image_url} alt="user-profile"/>
        </div>

        <div id="user-profile-info"> 

           <div>
              <h3>username {user?.username}</h3>
              <h5>email: {user?.email}</h5>
           </div>

          {usersPosts &&
              <div>
                <p>{usersPosts?.length}posts</p>
              </div>}
        </div>
      </div>

      <div id="lower-profile-div">

        <div id="profile-image-div">
            {usersPosts && usersPosts.map(post => (
              <div>
                <img id="each-user-post-img" src={post?.image_url} alt="posts"/>
              </div>
            ))
            
            }
        </div>
      </div>
      
    </div>
  );
}
export default UserProfile;

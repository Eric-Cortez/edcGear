

// rafce

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getAllPosts, removePost } from '../../store/post';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EditPostModal from '../../context/EditPostModal';

const EditDelete = ({ post, setEditShowModal}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    // const [preview, setPreview] = useState(false)
    const user = useSelector(state => state?.session?.user);
    const handleDelete = async (e) => {
        e.preventDefault()
        const postId = e.target.value
        const data = await dispatch(removePost(postId))
        if (data.message === "Delete Successful") {
            await dispatch(getAllPosts())
            history.push("/")
        }
    }


    // useEffect(() => {
    //     if (!preview) return;
    //     const closePostMenu = () => {
    //         setPreview(false);
    //     };
    //     document.addEventListener("click", closePostMenu);
    //     return () => document.removeEventListener("click", closePostMenu)
    // }, [preview])


    // const handlePreviewClick = (e) => {

    //     if (preview) setPreview(false)
    //     else setPreview(true)
    // }


  return (
      <>
          {post.user_id === user.id &&
              <div className='thread-post-edit-delete-div'>
                 
                  {/* <button className="preview-ellipsis-btn" value={post.id} onClick={handlePreviewClick}><i className="fas fa-ellipsis-h"></i></button> */}
    {/* {preview && */}
      <div className='preview-div'>
          <div className='post-btns-preview-div'>
                          <EditPostModal postId={post.id} setEditShowModal={setEditShowModal}/>
              {/* <Link className="post-preview-edit" to={`/posts/${post.id}/edit`}>edit</Link> */}
              <button className="post-preview-del" onClick={handleDelete} value={post.id}>Delete</button>
          </div>
      </div>
                  
    </div >}
    </>
  )
}

export default EditDelete



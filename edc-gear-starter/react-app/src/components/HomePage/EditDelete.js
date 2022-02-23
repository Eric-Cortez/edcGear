
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getAllPosts, removePost } from '../../store/post';
import React from 'react';
import { useSelector } from 'react-redux';
import EditPostModal from '../../context/EditPostModal';

const EditDelete = ({ post, setEditShowModal}) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { postId } = useParams()

    const user = useSelector(state => state?.session?.user);
    const handleDelete = async (e) => {
        e.preventDefault()
        const postId = e.target.value
        const data = await dispatch(removePost(postId))
        if (data && data.message === "Delete Successful") {
            await dispatch(getAllPosts())
                history.push("/")
        }
    }


  return (
      <>
          {post.user_id === user.id &&
              <div className='thread-post-edit-delete-div'>
                
      <div className='preview-div'>
          <div className='post-btns-preview-div'>
                          <EditPostModal modalPostId={post.id} setEditShowModal={setEditShowModal}/>
              <button className="post-preview-del" onClick={handleDelete} value={post?.id}>Delete</button>
          </div>
      </div>
                  
    </div >}
    </>
  )
}

export default EditDelete



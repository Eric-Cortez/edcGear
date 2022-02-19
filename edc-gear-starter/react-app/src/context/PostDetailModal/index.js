import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import PostDetail from "../../components/PostDetail/index.js"
import { useDispatch, useSelector } from 'react-redux';
import { getAllComments } from '../../store/comment';

function PostDetailModal({ postId }) {
    const [showModal, setShowModal] = useState(false);
   

    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getAllComments)
    },[])

    const comments = useSelector(state => state?.comment?.list  )

    return (
        <>  
         
          <button id="thread-comment-btn-model" onClick={() => setShowModal(true)}><i className="far fa-comment"></i></button> 



           
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostDetail postId={postId} setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default PostDetailModal;
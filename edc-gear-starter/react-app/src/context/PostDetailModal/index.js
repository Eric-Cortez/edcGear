import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostDetail from "../../components/PostDetail/index.js"

function PostDetailModal({ postId }) {
    const [showModal, setShowModal] = useState(false);

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
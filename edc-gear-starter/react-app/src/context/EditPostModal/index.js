import React, { useState } from 'react';
import { Modal } from '../Modal';
import EditPostForm from '../../components/Forms/EditPostForm.js'
import "../Modal.css"


function EditPostModal({ postId, setEditShowModal}) {
    const [showModal, setShowModal] = useState(false);
 
    return (
        <>
            <button id="post-preview-edit" onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() =>{
                    setEditShowModal(false)
                    setShowModal(false)
                }}>
                    <EditPostForm postId={postId} setShowModal={setShowModal} setEditShowModal={setEditShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default EditPostModal;
import React, { useState } from 'react';
import { Modal } from '../Modal';
import "../Modal.css"
import EditCommentForm from '../../components/Forms/EditCommentForm';

function EditCommentModal({ commentId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id="post-preview-edit" onClick={() => setShowModal(true)}><i className="fas fa-edit"></i></button>
            {showModal && (
                <Modal onClose={() => {
                    setShowModal(false)
                }}>
                    <EditCommentForm commentId={commentId} setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditCommentModal;
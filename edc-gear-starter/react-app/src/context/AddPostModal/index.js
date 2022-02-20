import React, { useState } from 'react';
import { Modal } from '../Modal';
import AddPostForm from "../../components/Forms/AddPostForm.js"
import "../Modal.css"

function AddPostModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id="add-post-modal-btn" onClick={() => setShowModal(true)}><i className="far fa-plus-square"></i></button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <AddPostForm setShowModal={setShowModal}/>
                </Modal>
            )}
        </>
    );
}

export default AddPostModal;
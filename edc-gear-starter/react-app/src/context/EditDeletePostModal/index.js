import React, { useEffect, useState } from 'react';
import { Modal } from '../Modal';
import EditDelete from "../../components/HomePage/EditDelete.js"
import "../Modal.css"
import { useSelector, useDispatch } from 'react-redux';

function EditDeleteModal({ post }) {
    const [showEditModal, setEditShowModal] = useState(false);
    const user = useSelector(state => state?.session?.user);



    return (
        <>
            { user.id === post.user_id &&
            <>
                <button onClick={() => setEditShowModal(true)}>...</button>
                {showEditModal && (
                    <Modal onClose={() => setEditShowModal(false)}>
                        <EditDelete post={post} setEditShowModal={setEditShowModal} />
                </Modal>
            )}
        </> }
        </> 
    );
}

export default EditDeleteModal;
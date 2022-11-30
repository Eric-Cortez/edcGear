import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from '../../components/auth/SignUpForm';

function SignUpModal({ postId }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button id="sign-up-link" onClick={() => setShowModal(true)}>Sign up</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <SignUpForm setShowModal={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default SignUpModal;
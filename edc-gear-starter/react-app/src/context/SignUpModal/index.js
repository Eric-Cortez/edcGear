import React, { useEffect, useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch } from 'react-redux';
import { getAllComments } from '../../store/comment';
import SignUpForm from '../../components/auth/SignUpForm';

function SignUpModal({ postId }) {
    const [showModal, setShowModal] = useState(false);


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllComments)
    }, [dispatch])

    // const comments = useSelector(state => state?.comment?.list)

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
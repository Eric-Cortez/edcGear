import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { getAllLike, postLike, removeLike } from "../../store/like"


export const LikePost = ({ postId, post }) => {
    const dispatch = useDispatch()
    const likes = useSelector(state => state?.like?.list)
    const sessionUser = useSelector(state => state?.session?.user)
    useEffect(() => {

        (async () => {
            await dispatch(getAllLike())

        })();

    }, [dispatch])

    const handleLike = (postId) => async (e) => {
        e.preventDefault();
        let newlike = await dispatch(postLike({ postId, userId: sessionUser?.id }));
    };

    const deleteLike = (postId) => async (e) => {
        e.preventDefault();
        const likeId = likes.find(like => like.post_id === postId && like?.user_id === sessionUser?.id)?.id
        let data = await dispatch(removeLike(likeId));
        await dispatch(getAllLike())

    };

    return (
        <>
            {likes && likes.find(like => like.post_id === post?.id && like?.user_id === sessionUser?.id) ?

                < button className="like-btn" onClick={deleteLike(post?.id)} > <i className="fa fa-heart unlike"></i></button > :
                < button className="like-btn" onClick={handleLike(post?.id)} > <i className="fa fa-heart like"></i></button >
            }
           
        </>

    )
}


const LOAD_ALL = "like/LOAD_ALL"
const ADD_LIKE = "like/ADD_LIKE"
const DELETE_LIKE = "like/DELETE_LIKE"


const load = list => ({
    type: LOAD_ALL,
    list
})


const addLike = like => ({
    type: ADD_LIKE,
    like,
})


const deleteLike = like => ({
    type: DELETE_LIKE,
    like,
})



export const getAllLike = () => async dispatch => {
    const response = await fetch(`/api/likes/`)

    if (response.ok) {
        const list = await response.json()
        await dispatch(load(list.likes))
    }
}

// export const getAllLikePosts = () => async dispatch => {
//     const response = await fetch(`/api/likes/posts`)

//     if (response.ok) {
//         const list = await response.json()
//         await dispatch(load(list.likes))
//     }
// }

// export const getAllLikeComment = () => async dispatch => {
//     const response = await fetch(`/api/likes/comments`)

//     if (response.ok) {
//         const list = await response.json()
//         await dispatch(load(list.likes))
//     }
// }


export const postLike = (payload) => async dispatch => {
    const { postId, userId } = payload
    console.log(payload, "thunk ---> ")
    const response = await fetch(`/api/likes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "post_id": postId,
            "user_id": userId,
        }),
    })

    if (response.ok) {
        const newLike = await response.json()
        await dispatch(addLike(newLike))
        return newLike
    }
}


export const removeLike = (likeId) => async dispatch => {
    const response = await fetch(`/api/likes/${likeId}/unlike`, {
        method: 'delete'
    })
    console.log(response, "thunk ")

    if (response.ok) {
        const like = await response.json()
        await dispatch(deleteLike(like))
        return { message: "Delete Successful" }
    }
}

const initialState = {
    list: []
}

const likeReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD_ALL: {
            return {
                ...state,
                list: [...action.list]
            }
        }
        case ADD_LIKE: {
            return {
                ...state,
                list: [...state.list, action.like]
            }
        }
        case DELETE_LIKE: {
            newState = { ...state }
            delete newState[action.post]
            return newState
        }

        default: return state
    }
}

export default likeReducer
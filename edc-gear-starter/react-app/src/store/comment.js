
const LOAD_ALL = "comments/LOAD_ALL"
const ADD_COMMENT = "comments/ADD_COMMENT"
// const LOAD_ONE_COMMENT = "comments/LOAD_ONE_POST";
const EDIT_COMMENT = "comments/EDIT_COMMENT"
const DELETE_COMMENT = "comments/DELETE_COMMENT"


const load = list => ({
    type: LOAD_ALL,
    list
})

// const loadOne = (comment) => ({
//     type: LOAD_ONE_COMMENT,
//     comment
// })

const addComment = comment => ({
    type: ADD_COMMENT,
    comment,
})

const editComment = comment => ({
    type: EDIT_COMMENT,
    comment,
})

const deleteComment = comment => ({
    type: DELETE_COMMENT,
    comment,
})

export const getAllComments = () => async dispatch => {
    const response = await fetch(`/api/comments/`)

    if (response.ok) {
        const list = await response.json()
        dispatch(load(list.comments))
    }
}

//------getting all comments for one post 
// export const getAllComments = (postId) => async dispatch => {
//     const response = await fetch(`/api/posts/${postId}/comments`)

//     if (response.ok) {
//         const list = await response.json()
//         dispatch(load(list.comments))
//     }
// }


// export const getOneComment = (commentId) => async dispatch => {
//     const response = await fetch(`/api/posts/${commentId}`)

//     if (response.ok) {
//         const comment = await response.json()
//         dispatch(loadOne(comment))
//         }
//     }

export const postComment = (payload) => async dispatch => {
    const { userId, postId, body } = payload
    const response = await fetch(`/api/comments/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": userId,
            "post_id": postId,
            body
        }),
    })

    if (response.ok) {
        const newComment = await response.json()
        dispatch(addComment(newComment))
        return newComment
    }
}

export const updateComment = (payload) => async dispatch => {
    const { commentId, body } = payload
    const response = await fetch(`/api/comments/${commentId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "body": body
        })
    })
    if (response.ok) {
        const editedComment = await response.json()
        dispatch(editComment(editedComment))
        return editedComment
    }
}

export const removeComment = (commentId) => async dispatch => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: 'delete'
    })

    if (response.ok) {
        const comment = await response.json()
        dispatch(deleteComment(comment))
        return { message: "Delete Successful" }
    }
}

const initialState = {
    list: []
}

const commentReducer = (state = initialState, action) => {
    let newState
    switch (action.type) {
        case LOAD_ALL: {
            return {
                ...state,
                list: [...action.list]
            }
        }
        case ADD_COMMENT: {
            return {
                ...state,
                list: [...state.list, action.post]
            }
        }

        case EDIT_COMMENT: {
            return {
                ...state,
                [action.payload]: action.id
            }
        }
        // case LOAD_ONE_COMMENT: {
        //     return {
        //         ...state,
        //         [action.payload]: action.id
        //     }
        // }
        case DELETE_COMMENT: {
            newState = { ...state }
            delete newState[action.post]
            return newState
        }

        default: return state
    }
}

export default commentReducer
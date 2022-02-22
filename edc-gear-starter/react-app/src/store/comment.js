
const LOAD_ALL = "comments/LOAD_ALL"
const ADD_COMMENT = "comments/ADD_COMMENT"
const EDIT_COMMENT = "comments/EDIT_COMMENT"
const DELETE_COMMENT = "comments/DELETE_COMMENT"


const load = list => ({
    type: LOAD_ALL,
    list
})

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
        await dispatch(load(list.comments))
    }
}

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
        await dispatch(addComment(newComment))
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
        await dispatch(editComment(editedComment))
        return editedComment
    }
}

export const removeComment = (commentId) => async dispatch => {
    const response = await fetch(`/api/comments/${commentId}`, {
        method: 'delete'
    })

    if (response.ok) {
        const comment = await response.json()
        await dispatch(deleteComment(comment))
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
        case DELETE_COMMENT: {
            newState = { ...state }
            delete newState[action.post]
            return newState
        }
        default: return state
    }
}

export default commentReducer
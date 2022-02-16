
const LOAD_ALL = "posts/LOAD_ALL"
const ADD_POST = "posts/ADD_POST"
// const LOAD_ONE_POST = "posts/LOAD_ONE_POST";
// const EDIT_POST = "posts/EDIT_POST"
// const DELETE_POST = "posts/DELETE_POST"


const load = list => ({
    type: LOAD_ALL,
    list
})

// const loadOne = (post) => ({
//     type: LOAD_ONE_POST,
//     post
// })

const addPost = post => ({
    type: ADD_POST,
    post,
})

// const editPost = post => ({
//     type: EDIT_POST,
//     post,
// })

// const deletePost = post => ({
//     type: DELETE_POST,
//     post,
// })

export const getAllPosts = () => async dispatch => {
    const response = await fetch(`/api/posts/`)

    if (response.ok) {
        const list = await response.json()
        dispatch(load(list.posts))
    }
}


// export const getOnePost = (postId) => async dispatch => {
//     const response = await fetch(`/api/posts/${postId}`)

//     if (response.ok) {
//         const post = await response.json()
//         dispatch(loadOne(post))
//         }
//     }

export const postPost = (payload) => async dispatch => {
    const { userId, imageUrl, body } = payload
    const response = await fetch(`/api/posts/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_id": userId,
            "image_url": imageUrl,
            body
        }),
    })

    if (response.ok) {
        const newPost = await response.json()
        dispatch(addPost(newPost))
        return newPost
    }
}

// export const updatePost = (payload) => async dispatch => {
//     const { postId, body } = payload
//     const response = await fetch(`/api/posts/${postId}`, {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             "body": body
//         })
//     })
//     if (response.ok) {
//         const editedPost = await response.json()
//         dispatch(editPost(editedPost))
//         return editedPost
//     }
// }

// export const removePost = (postId) => async dispatch => {
//     const response = await fetch(`/api/posts/${postId}`, {
//         method: 'delete'
//     })

//     if (response.ok) {
//         const post = await response.json()
//         dispatch(deletePost(post))
//     }
// }

const initialState = {
    list: []
}

const postReducer = (state = initialState, action) => {
    // let newState
    switch (action.type) {
        case LOAD_ALL: {
            return {
                ...state,
                list: [...action.list]
            }
        }
        case ADD_POST: {
            return {
                ...state,
                list: [...state.list, action.post]
            }
        }

        // case EDIT_POST: {
        //     return {
        //         ...state,
        //         [action.payload]: action.id
        //     }
        // }

        // case DELETE_POST: {
        //     newState = { ...state }
        //     delete newState[action.post]
        //     return newState
        // }

        default: return state
    }
}

export default postReducer
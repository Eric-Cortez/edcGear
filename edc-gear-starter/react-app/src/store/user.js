
const LOAD_ALL = "users/LOAD_ALL"
// const LOAD_ONE_USER = "users/LOAD_ONE_USER";

const load = list => ({
    type: LOAD_ALL,
    list
})

// const loadOne = (user) => ({
//     type: LOAD_ONE_USER,
//     user
// })



export const getAllUsers = () => async dispatch => {
    const response = await fetch(`/api/users/`)

    if (response.ok) {
        const list = await response.json()
        dispatch(load(list.users))
    }
}


// export const getOneUser = (userId) => async dispatch => {
//     const response = await fetch(`/api/users/${userId}`)

//     if (response.ok) {
//         const user = await response.json()
//         dispatch(loadOne(user))
//         }
//     }



const initialState = {
    list: []
}

const userReducer = (state = initialState, action) => {
    // let newState
    switch (action.type) {
        case LOAD_ALL: {
            return {
                ...state,
                list: [...action.list]
            }
        }

        // case LOAD_ONE_USER: {
        //     return {
        //         ...state,
        //         [action.payload]: action.id
        //     }
        // }
      

        default: return state
    }
}

export default userReducer
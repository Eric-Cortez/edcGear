
const LOAD_ALL = "users/LOAD_ALL"

const load = list => ({
    type: LOAD_ALL,
    list
})


export const getAllUsers = () => async dispatch => {
    const response = await fetch(`/api/users/`)

    if (response.ok) {
        const list = await response.json()
        dispatch(load(list.users))
    }
}


const initialState = {
    list: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ALL: {
            return {
                ...state,
                list: [...action.list]
            }
        }
        default: return state
    }
}

export default userReducer
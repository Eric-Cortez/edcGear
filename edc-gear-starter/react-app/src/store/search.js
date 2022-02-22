
const LOAD_ALL = "search/LOAD_ALL"


const load = (users, posts) => ({
    type: LOAD_ALL,
    users,
    posts
})




export const getAllSearch = (searchQuery) => async dispatch => {


    const response = await fetch(`/api/search/content/${searchQuery}`)
    
    
    if (response.ok) {
        const res = await response.json()
        console.log(res)

       await dispatch(load(res.users, res.posts))
       return { users: res.users, posts: res.posts}
    }
}



const initialState = {
    usersList: [],
    postsList: [],
}

const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_ALL: {
            return {
                ...state,
                usersList: [...action.users],
                postsList: [...action.posts]
            }
        }

  

        default: return state
    }
}

export default searchReducer
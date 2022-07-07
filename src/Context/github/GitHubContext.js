import { createContext, useReducer } from "react";
import GitHubReducer from "./GitHubReducer";

const GitHubContext = createContext()

const GIHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;
const GIHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GitHubProvider = ({ children }) => {
    
    const initialState = {
        users: [],
        user: {},
        repos:[],
        loading:false
    }
    const  [state,dispatch] = useReducer(GitHubReducer,initialState)
    
   
    //search users
    const searchUsers = async (text) => {
        setLoading()
        const params = new URLSearchParams({
            q:text
        })
        const response = await fetch(
            `${GIHUB_API_URL}/search/users?${params}`,
            {
                headers: {
                    Authorization:`token ${GIHUB_TOKEN}`
                }
            }
        )

        const {items} = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload:items
        })
    }
    // get single user details
    const getUser = async (login) => {
        setLoading()
        const response = await fetch(
            `${GIHUB_API_URL}/users/${login}`,
            {
                headers: {
                    Authorization:`token ${GIHUB_TOKEN}`
                }
            }
        )

        if (response.status === 404) {
            window.location ="/notfound"
        }
        else {
            const data = await response.json();
            dispatch({
                type: 'GET_USER',
                payload:data
            })    
        }

        
    }

    //get user repos
    const getRepos = async (login) => {
        setLoading()
        const params = new URLSearchParams({
            sort: 'created',
            per_page:10
        })
        const response = await fetch(
            `${GIHUB_API_URL}/users/${login}/repos?${params}`,
            {
                headers: {
                    Authorization:`token ${GIHUB_TOKEN}`
                }
            }
        )

        if (response.status === 404) {
            window.location ="/notfound"
        }
        else {
            const data = await response.json();
            dispatch({
                type: 'GET_REPOS',
                payload:data
            })    
        }
    }
    

    const setLoading = () => {
        dispatch({type:'SET_LOADING'})
    }
    const clearUsers = () => {
        dispatch({ type: 'CLEAR_USERS' })
        
    }

    return <GitHubContext.Provider value={{
        users:state.users,
        loading: state.loading,
        user: state.user,
        repos:state.repos,
        searchUsers,
        clearUsers,
        getUser,
        getRepos
    }}>
        {children}
    </GitHubContext.Provider>
    
}

export default GitHubContext;
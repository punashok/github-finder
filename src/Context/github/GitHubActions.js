import axios from 'axios'

const GIHUB_API_URL = process.env.REACT_APP_GITHUB_API_URL;
const GIHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
    baseURL: GIHUB_API_URL,
    headers: {
        Authorization:`token ${GIHUB_TOKEN}`
    }
    
})

//search users
export const searchUsers = async (text) => {
    const params = new URLSearchParams({
        q:text
    })
    const response = await github.get(`/search/users?${params}`);
    return response.data.items;
}

//get user and respos
export const getUserAndRepos = async (login)=>{
    const [userInfo, reposInfo] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos`)
    ])

    return {
        user: userInfo.data,
        repos:reposInfo.data
    }
}

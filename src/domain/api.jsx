import axios from "axios";

const baseURL = 'http://localhost:3000/'

const urls = {
    posts: 'posts',
    profile: 'profile'
}

export const callAPI = async (endpoint, method, params = {}, headers = {}, data = {}) => {
    const options = {
        baseURL,
        url: endpoint,
        method,
        params,
        headers,
        data
    }

    const response = await axios(options)
    return response?.data
}

export const getAllPost = () => {
    return callAPI(urls.posts, 'GET')
}

export const searchPost = (query) => {
    return callAPI(`${urls.posts}?q=${query}`, 'GET')
}

export const createPost = (post) => {
    return callAPI(urls.posts, 'POST', {}, {}, post)
}

export const loginAPI = () => {
    return callAPI(urls.profile, 'GET')
}

export const registerAPI = (fullname, email, password) => {
    return callAPI(urls.profile, 'POST', {}, {}, {fullname, email, password})
}


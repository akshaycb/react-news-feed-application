import axiosInterceptor from './postInterceptor'

const getPosts = async () => {
    const response = await axiosInterceptor().get('get-posts')
    return (response?.data && !response.error) ? response.data : response.error
}

const deletePost = async (id) => {
    const response = await axiosInterceptor().delete('delete-post', {data: { id }})
    return (response?.data && !response.error) ? response.data : response.error
}

const createPost = async (data) => {
    const response = await axiosInterceptor().post('create-post', { data })
    return (response?.data && !response.error) ? response.data : response.error
}

const likePost = async (id) => {
    const response = await axiosInterceptor().patch('like-post', { id })
    return (response?.data && !response.error) ? response.data : response.error
}

export {
    getPosts,
    createPost,
    deletePost,
    likePost
}
import axios from 'axios'


//make use of env variables for dev, staging and prod environments
const baseURL = 'http://localhost:4000/api/'

const axiosInterceptor = () => {
    const apiAxiosInstance = axios.create({
        baseURL,
    })

    apiAxiosInstance.interceptors.request.use(
        config => {
            return config
        },
        error => {
            return Promise.reject(error)
        },
      )
    
    apiAxiosInstance.interceptors.response.use(
    config => config,
    error => {
            if (!error.response) {
                console.log('It looks like we are having issues connecting to the API server.')
            }
            return Promise.reject(error)
        },
    )

    apiAxiosInstance.interceptors.response.use(
    response => {
        return response
    },
    error => {
            if (error.response) {
                console.log(error.response)
            } else {
                console.log(error)
            }
            return Promise.reject(error)
        },
    )
    return apiAxiosInstance
}

export default axiosInterceptor
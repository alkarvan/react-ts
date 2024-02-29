import axios from "axios";

import {baseURL} from "../constants";

const apiService =axios.create({baseURL})

apiService.interceptors.request.use(request => {
    request.headers.Authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDhjMTRlNDEzZmY5ZTUzMjQ4ZDVlODAyNTlhZjhiNCIsInN1YiI6IjY1ZGY0ZjA1NzYxNDIxMDE2MmQ1MzVkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y7bcX4dq0UCCiS9d8R0ipm0CAWwhjAz-wBGLLkTpjSc`

    return request
})

export {
    apiService
}
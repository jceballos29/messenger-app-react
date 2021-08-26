import axios from "axios"

export const getData = async (url) =>{
    const response = await axios({
        method: "GET",
        baseURL: "https://academlo-whats.herokuapp.com/api/v1/",
        url
    })

    return response.data
}
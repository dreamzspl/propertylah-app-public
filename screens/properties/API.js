import axios from 'axios'

const API = axios.create({
     baseURL:'https://propertylah.herokuapp.com/api/v1'
})

export default API
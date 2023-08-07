import axios from 'axios'

export const tran = async(data) => await axios.post('http://localhost:3333/api/tran/',data)
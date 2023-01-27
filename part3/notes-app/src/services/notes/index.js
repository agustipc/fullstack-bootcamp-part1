import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

const getAll = async () => {
  const request = await axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'this note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  }
  return request.then((response) => response.data.concat(nonExisting))
  // const { data } = response
  // return data
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then((response) => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then((response) => response.data)
}

const services = { getAll, create, update }
export default services

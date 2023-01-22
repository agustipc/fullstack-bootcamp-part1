import axios from "axios"

export const create = async ({ title, body, userId }) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    { title, body, userId }
  )
  const { data } = response
  return data
}

export const getAll = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
  const { data } = response
  return data
}

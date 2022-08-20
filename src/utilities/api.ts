import axios from 'axios'

export async function getUsers () {
  try {
    const { data } = await axios('/api/users')
    return data
  } catch (error) {
    console.log(error)
  }
}

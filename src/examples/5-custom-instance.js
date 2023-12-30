import { useEffect } from 'react'
import axios from 'axios'
import authFetch from '../axios/custom'
const randomUserUrl = 'https://randomuser.me/api'

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const resp1 = await axios(randomUserUrl)
      const resp2 = await authFetch('/react-store-products')
    } catch (error) {
      console.log(error.response)
    }
    console.log('custom axios instance')
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">custom instance</h2>
}
export default CustomInstance

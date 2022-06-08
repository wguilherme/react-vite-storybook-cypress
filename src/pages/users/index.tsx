import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { makeServer } from '../../services/mirage'

if(process.env.NODE_ENV === 'development') {makeServer()}

export default function UserList(){
  let [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers(){
      try{
        const {data} = await api.get('/users')
        setUsers(data?.users)
      }catch(error){
        console.log(error)
      }
    }
    fetchUsers()

  }, [])
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users?.map((user:any)=>(
          <li key={user.id}>{user.name}</li>
        ))}   
      </ul>
    </div>
  )
}
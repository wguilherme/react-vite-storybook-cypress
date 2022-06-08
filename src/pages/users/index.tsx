import { makeServer } from '../../services/mirage'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import {useQuery} from 'react-query'

if(process.env.NODE_ENV === 'development') {makeServer()}

export default function UserList(){
  const {data, isLoading, error} = useQuery('users', async()=>{
    const {data} = await api.get('/users')
    const users = data.users.map((user: any)=>{
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString(
          'pt-BR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          }
        ),

      }
    })
    return users
  })

  if(isLoading) return <p>Loading...</p>
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {data.map((user:any)=>(
          <li key={user.id} style={{padding: '10px', lineHeight: '5px'}}>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.createdAt}</p>
            </li>
        ))}   
      </ul>
    </div>
  )
}
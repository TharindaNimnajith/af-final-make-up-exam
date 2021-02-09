import React, {useEffect, useState} from 'react'
import {Table} from 'reactstrap'
import axios from 'axios'
import {usersApi} from '../../../../config/api.config'
import Loader from '../../../../components/loader/loader'
import './user-home-component.css'

const UserHomeComponent = () => {
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')
  const [data, setData] = useState(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = () => {
    setLoader(true)
    axios.get(`${usersApi}users`).then(res => {
      setData(res.data.userList)
      setLoader(false)
    }).catch(error => {
      setError('An unexpected error occurred. Please try again later.')
      setLoader(false)
      console.error(error)
    })
  }

  return (
    <div>
      {
        loader ? (
          <Loader/>
        ) : null
      }
      <div>
        <small>
          {
            error ? (
              <span className='error'>
                {error}
              </span>
            ) : null
          }
        </small>
      </div>
      <div>
        <Table bordered>
          <thead>
          <tr className='text-center'>
            <th>User ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>User Type</th>
            <th colSpan={2}>
              Actions
            </th>
          </tr>
          </thead>
          <tbody>
          {
            data && data.map((item) => {
              return (
                <tr key={item._id}>
                  <td>
                    {item.userId}
                  </td>
                  <td>
                    {item.firstName}
                  </td>
                  <td>
                    {item.lastName}
                  </td>
                  <td>
                    {item.email}
                  </td>
                  <td>
                    {item.userType}
                  </td>
                  <td className='text-center'>
                    <i className='fas fa-pencil-alt edit'/>
                  </td>
                  <td className='text-center'>
                    <i className='fas fa-trash-alt delete'/>
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default UserHomeComponent

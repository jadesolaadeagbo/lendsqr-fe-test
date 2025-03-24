import React from 'react'
import DashboardStats from '../components/User/DashboardStats/DashboardStats'
import UserTable from '../components/User/UserTable/UserTable'

const page = () => {
  return (
    <div>
      <DashboardStats/>
      <UserTable/>
    </div>
  )
}

export default page
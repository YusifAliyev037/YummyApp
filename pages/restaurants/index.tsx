import ClientHeader from '@/shared/ClientComponent/ClientHeader'
import ClientFooter from '@/shared/ClientComponent/ClientFooter'
import React from 'react'
import RestaurantNavbar from '@/shared/ClientComponent/RestaurantNavbar'

function index() {
  return (
    <>
        <ClientHeader/>
        <RestaurantNavbar/>
        
        <ClientFooter/>
      
    </>
  )
}

export default index

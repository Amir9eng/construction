import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function DefaultLayout ({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

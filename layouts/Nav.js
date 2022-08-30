import Navbar from '../components/Navbar'

const Nav = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  )
}

export default Nav

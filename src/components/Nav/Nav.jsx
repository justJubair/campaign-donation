import { NavLink } from 'react-router-dom'
import img from '../../assets/Logo.png'
import './Nav.css'
const Nav = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-4 flex justify-between items-center bg-transparent'>
    <span className='w-40'>  <img src={img} alt="" /></span>
      <ul className='flex gap-6 font-semibold'>
       <li> <NavLink to='/'>Home</NavLink></li>
       <li> <NavLink to='/donation'>Donation</NavLink></li>
       <li> <NavLink to='/statistics'>Statistics</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav

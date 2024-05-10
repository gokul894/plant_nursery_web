
import logo from '../../assets/logo_nursery.png'
import {MdSearch} from 'react-icons/md'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div className='h-auto w-full flex flex-row justify-around items-center p-2 fixed z-50 bg-white/[.2] backdrop-blur-xl rounded-3xl'>
      <div className='flex flex-row gap-[100px] items-center'>
        <div className='flex flex-row gap-2 font-bold text-2xl text-lime-600'>
          <img src={logo} alt="logo" className='h-8 w-8' />
          <i>Plant</i><i>Nursery</i>
        </div>
        <div className='flex gap-4 font-semibold text-xl text-slate-800'>
          <NavLink to=''>Home</NavLink>
          <NavLink to=''>About</NavLink>
          <NavLink to=''>Shop</NavLink>
          <NavLink to=''>Testimonial</NavLink>
          <NavLink to=''>Help</NavLink>
        </div>
      </div>
      <div className='flex flex-row border-2 border-slate-500 justify-center items-center text-center p-1 gap-3 rounded-2xl'>
          <span className='ml-2 text-xl'>{<MdSearch/>}</span>
          <input type="text" placeholder='Search' className='outline-none w-24 text-center rounded-2xl'/>
      </div>
    </div>
  )
}

export default Header
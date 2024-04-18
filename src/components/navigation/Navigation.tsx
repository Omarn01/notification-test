import './Navigation.css'
import { IoHomeOutline } from 'react-icons/io5'
import { IoSettingsOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='navigation'>
      <ul>
        <li>
          <IoHomeOutline />
          <Link to='/'>Главная</Link>
        </li>
        <li>
          <IoSettingsOutline />
          <Link to='/menu'>Меню</Link>
        </li>
      </ul>
    </div>
  )
}

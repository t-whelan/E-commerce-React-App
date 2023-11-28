import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faBars, faRightFromBracket, faStore } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import './Bag.css'

const Nav = () => {
  return (
  <div className="navbar1">
      <div className="nav-links-top">
        <div className="logo">
          <div className="group">
            <div className="overlap-group">
              <Link to='/'><img className="union" src="./logo-transparent.svg" alt='logo'/></Link>
              <div className="rectangle"></div>
              <div className="div"></div>
            </div>
          </div>
        </div>
        <div className="div-2">
          <FontAwesomeIcon className="icon" icon={faBars} />
        </div>
        <div className='nav-link item'>
          <NavLink to='/'><FontAwesomeIcon className="icon" icon={faStore} /></NavLink>
        </div>
        <div className="nav-link item">
            <NavLink to='/bag'><FontAwesomeIcon className="icon" icon={faShoppingBag}/></NavLink>
        </div>
      </div>
      <div className="div-2">
        <div className="nav-link-3">
          <FontAwesomeIcon className="icon" icon={faRightFromBracket} style={{ color: '#FFF'}}/>
        </div>
      </div>
    </div>)
}

export default Nav
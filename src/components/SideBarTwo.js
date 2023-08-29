import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag, faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
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
        <div className="nav-link">
          <Link to='/'><img className="icon" src="./storefront.svg" /></Link>
        </div>
        <div className="nav-link-2">
            <Link to='/bag'><FontAwesomeIcon className="icon" icon={faShoppingBag} style={{ color: '#FFF' }}/></Link>
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
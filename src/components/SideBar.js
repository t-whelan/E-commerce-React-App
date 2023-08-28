import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { id: 1, link: '/', icon: 'fa-brands fa-react' },
    { id: 5, title: 'Home', link: '/', icon: 'fa-store' },
    { id: 2, title: 'Bag', link: '/bag', icon: 'fa-bag-shopping' },
    { id: 3, title: 'Menu', link: '/menu', icon: 'fa fa-bars' }, // Font Awesome menu icon
    { id: 4, title: 'Logout', link: '/logout', icon: 'fa fa-sign-out' }, // Font Awesome logout icon
  ];


  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        
      </button>
      <ul className="menu-items">
        {menuItems.map(item => (
          <li key={item.id}>
            <a href={item.link}>
              <span className="icon">
                <i className={`fas ${item.icon}`} />
              </span>
              <span className="title">{item.title}</span>
            </a>
          </li>
        ))}
        <Link to='/bag'><h2>Muja</h2></Link>
      </ul>
    </div>
  );
};

export default Sidebar;


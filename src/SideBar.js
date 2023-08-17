import React, { useState } from 'react';


const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { id: 1, title: 'Home', link: '/' },
    { id: 2, title: 'About', link: '/about' },
    { id: 3, title: 'Services', link: '/services' },
    { id: 4, title: 'Contact', link: '/contact' },
  ];

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <ul className="menu-items">
        {menuItems.map(item => (
          <li key={item.id}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

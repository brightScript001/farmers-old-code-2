import React, { useState } from 'react';
import Logo from '../components/Logo.component';
import sidebarConfig from '../content/sideBar.config';
import '../styles/sideBar.css';

const Sidebar = () => {
    const [active, setActive] = useState('home');

    const handleClick = (key) => {
        setActive(key);
    };

    return (
        <div className="sidebar">
            <Logo />
            <ul>
                {sidebarConfig.slice(0, -2).map((item) => (
                    <li
                        key={item.key}
                        className={active === item.key ? 'active' : ''}
                        onClick={() => handleClick(item.key)}
                    >
                        <item.icon />
                        <span>{item.text}</span>
                    </li>
                ))}
                <div className="bottom">
                    {sidebarConfig.slice(-2).map((item) => (
                        <li
                            key={item.key}
                            className={active === item.key ? 'active' : ''}
                            onClick={() => handleClick(item.key)}
                        >
                            <item.icon />
                            <span>{item.text}</span>
                        </li>
                    ))}
                </div>
            </ul>
        </div>
    );
};

export default Sidebar;

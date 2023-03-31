import React from 'react'
import { NavLink } from 'react-router-dom';

export default function HeaderNav() {
    const menuList = [
        { id: 1, name: "Home", path: "/home", icon: "bi-house-door" },
        { id: 1, name: "Explore", path: "/explore", icon: "bi-compass" },
        { id: 1, name: "Messages", path: "/messages", icon: "bi-send" },
        { id: 1, name: "Log Out", path: "/logout", icon: "bi-box-arrow-left" },
    ];

    return (
        <header>
            <nav className="navbar navbar-expand-md shadow bg-white">
                <div className="container">
                    <a href="#" className="navbar-brand">
                        <img src="https://www.ibik.ac.id/wp-content/uploads/2023/03/logo-ibik-web.png" alt="ibik-logo" style={{ height: "40px" }} />
                    </a>
                    <button className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <div className="d-flex w-100 justify-content-end">
                            <div id="main-nav">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    {menuList.map((v, index) => (
                                        <li className="nav-item me-1" key={index}>
                                            <NavLink className="nav-link text-hover-success px-3" to={v.path}>
                                                <i className={"bi me-2 fs-5 text-dark " + v.icon}></i>
                                                {v.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
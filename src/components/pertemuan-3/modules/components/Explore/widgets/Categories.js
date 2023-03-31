import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Categories() {
    const categories = [
        {id: 1, name: "Feeds", path: "/feeds", icon: "bi-camera"},
        {id: 1, name: "Reels", path: "/reels", icon: "bi-camera-reels"},
        {id: 1, name: "FYP", path: "/fyp", icon: "bi-rss"}
    ]
    return (
        <div id="categories" className="card border">
            <div className="card-header">
                <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bolder text-dark">Category Explore</span>
                    <span className="text-gray-400 mt-1 fw-bold fs-6">Choose on of categories</span>
                </h3>
            </div>
            <div className="card-body">
                <div className="nav flex-column">
                    {categories.map((v, index) => (
                       <li className="nav-item mb-2" key={index}>
                            <NavLink className="nav-link text-dark text-hover-primary" aria-current="page" to={"/explore" + v.path}>
                                <div className="symbol symbol-50px">
                                    <span className="symbol-label">
                                        <i className={"fs-4 bi " + v.icon}></i>
                                    </span>
                                </div>
                                <span className="fs-4 ms-2 fw-bold">{v.name}</span>
                            </NavLink>
                       </li> 
                    ))}
                </div>
            </div>
        </div>
    )
}

import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark px-4" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Shivam Keep+</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                            <label className="form-check-label text-light" for="flexSwitchCheckChecked">
                                Dark Mode
                            </label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
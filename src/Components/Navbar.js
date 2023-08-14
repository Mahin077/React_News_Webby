import React from 'react'
import { Link } from "react-router-dom"
function Navbar(props) {
    const dropDownClick=(e)=>{
        
        props.country(e.target.id)
    }
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News Webby</Link >
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/"><strong>Home</strong></Link >
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/business"><strong>Business</strong></Link ></li>
                            <li className="nav-item"><Link className="nav-link" to="/entertainment"><strong>Entertainment</strong></Link ></li>
                            <li className="nav-item"><Link className="nav-link" to="/general"><strong>General</strong></Link ></li>
                            <li className="nav-item"><Link className="nav-link" to="/health"><strong>Health</strong></Link ></li>
                            <li className="nav-item"><Link className="nav-link" to="/science"><strong>Science</strong></Link ></li>
                            <li className="nav-item"><Link className="nav-link" to="/sports"><strong>Sports</strong></Link ></li>
                            <li className="nav-item"><Link className="nav-link" to="/technology"><strong>Technology</strong></Link ></li>
                        </ul>
                        <div className="navbar-nav ms-auto">
                        <div className="collapse navbar-collapse mx-2" id="navbarNavDarkDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <button className="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                        Country
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" id="us" onClick={dropDownClick}>USA</a></li>
                                        <li><a className="dropdown-item" id="au" onClick={dropDownClick}>Astralia</a></li>
                                        <li><a className="dropdown-item" id="ca" onClick={dropDownClick}>Canada</a></li>
                                        <li><a className="dropdown-item" id="in" onClick={dropDownClick}>India</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'black' : 'white'}`} style={{alignSelf:"center"}}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{ cursor: 'pointer' }} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark mode</label>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

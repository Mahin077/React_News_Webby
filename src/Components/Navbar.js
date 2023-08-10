import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">News Webby</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/"><strong>Home</strong></a>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="/business"><strong>Business</strong></a></li>
                            <li className="nav-item"><a className="nav-link" href="/entertainment"><strong>Entertainment</strong></a></li>
                            <li className="nav-item"><a className="nav-link" href="/general"><strong>General</strong></a></li>
                            <li className="nav-item"><a className="nav-link" href="/health"><strong>Health</strong></a></li>
                            <li className="nav-item"><a className="nav-link" href="/science"><strong>Science</strong></a></li>
                            <li className="nav-item"><a className="nav-link" href="/sports"><strong>Sports</strong></a></li>
                            <li className="nav-item"><a className="nav-link" href="/technology"><strong>Technology</strong></a></li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
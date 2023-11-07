import React from 'react';
import 'bootstrap/js/dist/collapse';
import imageProfil from '../assets/Ellipse 82.png';


function Nav({ Toggle }) {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark py-3" id='header'>
            <i className="navbar-brand bi bi-justify-left fs-4 " onClick={Toggle}></i>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-justify"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto">
                    <li className='nav-item'>
                        <div class="d-flex mx-2" id="header-user-profil">
                            <div className="d-flex">
                                <img src={imageProfil} className="rounded-circle me-2 me-md-4 my-auto" id="profil-img" alt='img' />
                                <div className="d-flex flex-column me-md-4 lh-1 py-auto">
                                    <h4 className="fw-bold py-0 user-name text-white">Ndiaga Sall</h4>
                                    <p className="py-0 user-type text-white">Utilisateur</p>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            HighTech
                        </a>
                        <div className="dropdown-menu list-unstyled">
                            <a className="dropdown-item" href="#">Profile</a>
                            <a className="dropdown-item" href="#">Setting</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
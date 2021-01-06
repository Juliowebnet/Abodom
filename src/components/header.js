import React from 'react'
import {Link} from 'react-router-dom'

//logo
import logo from '../img/logo-verde.svg'

function Header() {
    return(
        <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" class="navbar-item">
                        <img src={logo} alt="ABODOM LOGO" width="112" height="28"/>
                    </Link>
                    <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-abodom">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>
                <div id="navbar-abodom" className="navbar-menu">
                    <div className="navbar-end">
                        <Link to="/" className="navbar-item">
                            INICIO
                        </Link>
                        <Link to="/nosotros" className="navbar-item">
                            NOSOTROS
                        </Link>
                        <Link to="/productos" className="navbar-item">
                            PRODUCTOS
                        </Link>
                        <Link to="/sucursales" className="navbar-item">
                            SUCURSALES
                        </Link>
                        <Link to="/contacto" className="navbar-item">
                            CONTACTO
                        </Link>
                    </div>
                    <div className="navbar-item">
                        <div className="filed is-grouped">
                            <p className="control">
                                <button className="button is-primary">ES</button>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Header;
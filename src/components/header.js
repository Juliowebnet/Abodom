import React from 'react'
import {Link} from 'react-router-dom'

//logo
import logoVerde from '../img/logo-verde.svg';
import logoBlanco from '../img/logo-blanco.svg';

function Header(props) {
    function Logo(){
        if (props.page == "inicio"){
            return(
              <img src={logoBlanco} alt="ABODOM LOGO" width="112" height="28"/>  
            )
        } else {
            return(
               <img src={logoVerde} alt="ABODOM LOGO" width="112" height="28"/> 
            )
        }
    }

    function Menu(){
        if (props.page == "inicio"){
            return(
               <div className="navbar-end">
                    <Link to="/" className="navbar-item has-text-white has-text-weight-bold">
                        INICIO
                    </Link>
                    <Link to="/nosotros" className="navbar-item has-text-white has-text-weight-bold">
                        NOSOTROS
                    </Link>
                    <Link to="/productos" className="navbar-item has-text-white has-text-weight-bold">
                        PRODUCTOS
                    </Link>
                    <Link to="/sucursales" className="navbar-item has-text-white has-text-weight-bold">
                        SUCURSALES
                    </Link>
                    <Link to="/contacto" className="navbar-item has-text-white has-text-weight-bold">
                        CONTACTO
                    </Link>
                </div> 
            )
        } else {
            return(
                <div className="navbar-end">
                    <Link to="/" className="navbar-item has-text-weight-bold">
                        INICIO
                    </Link>
                    <Link to="/nosotros" className="navbar-item has-text-weight-bold">
                        NOSOTROS
                    </Link>
                    <Link to="/productos" className="navbar-item has-text-weight-bold">
                         PRODUCTOS
                    </Link>
                    <Link to="/sucursales" className="navbar-item has-text-weight-bold">
                        SUCURSALES
                    </Link>
                    <Link to="/contacto" className="navbar-item has-text-weight-bold">
                        CONTACTO
                    </Link>
                </div>
            )
        }
    }

     return(
         <div className="container">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" class="navbar-item">
                        <Logo/>
                    </Link>
                    <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-abodom">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Link>
                </div>
                <div id="navbar-abodom" className="navbar-menu">
                    <Menu/>
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
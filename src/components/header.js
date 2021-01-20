import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

//traducciones
import {useTranslation} from 'react-i18next';

//logo
import logoVerde from '../img/logo-verde.svg';
import logoBlanco from '../img/logo-blanco.svg';

function Header(props) {
    const [t, i18n] = useTranslation("global");
    function MenuBurger(){
        // Get all "navbar-burger" elements
         const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
          
        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
          
            // Add a click event on each of them
            $navbarBurgers.forEach( el => {
          
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);
          
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        }
    }
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
                        {t("menu.page-home")}
                    </Link>
                    <Link to="/nosotros" className="navbar-item has-text-white has-text-weight-bold">
                        {t("menu.page-about-us")}
                    </Link>
                    <Link to="/productos" className="navbar-item has-text-white has-text-weight-bold">
                        {t("menu.page-products")}
                    </Link>
                    <Link to="/sucursales" className="navbar-item has-text-white has-text-weight-bold">
                        {t("menu.page-branch-offices")}
                    </Link>
                    <Link to="/contacto" className="navbar-item has-text-white has-text-weight-bold">
                        {t("menu.page-contact")}
                    </Link>
                </div> 
            )
        } else {
            return(
                <div className="navbar-end">
                    <Link to="/" className="navbar-item has-text-weight-bold">
                        {t("menu.page-home")}
                    </Link>
                    <Link to="/nosotros" className="navbar-item has-text-weight-bold">
                        {t("menu.page-about-us")}
                    </Link>
                    <Link to="/productos" className="navbar-item has-text-weight-bold">
                        {t("menu.page-products")}
                    </Link>
                    <Link to="/sucursales" className="navbar-item has-text-weight-bold">
                        {t("menu.page-branch-offices")}
                    </Link>
                    <Link to="/contacto" className="navbar-item has-text-weight-bold">
                        {t("menu.page-contact")}
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
                    <Link role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-abodom" onClick={MenuBurger}>
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
                                <button className="button is-primary" onClick={()=>{i18n.changeLanguage("es")}}>ES</button>
                            </p>
                        </div>
                    </div>
                    <div className="navbar-item">
                        <div className="filed is-grouped">
                            <p className="control">
                                <button className="button is-primary" onClick={()=>{i18n.changeLanguage("en")}}>EN</button>
                            </p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Header;
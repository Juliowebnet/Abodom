import React from 'react';

//Componentes
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import Header from '../components/header';

//libreria para la traduucion
import {useTranslation} from 'react-i18next'

//imagenes
import CostoIcon from '../img/costo-icon.svg';
import TiempoIcon from '../img/tiempo-icon.svg';
import NutrientesIcon from '../img/nutrientes-icon.svg';
import Insta1 from '../img/insta1.png';
import Insta2 from '../img/insta2.png';
import Insta3 from '../img/insta3.png';
import Insta4 from '../img/insta4.png';
import Logo from '../img/logo.svg';
import CultivosFondo from '../img/consejos-fondo.jpg'
import Consejo1 from '../img/consejo1.jpg'
import Consejo2 from '../img/consejo2.jpg'
import Consejo3 from '../img/consejo3.jpg'

function Inicio() {
    const [t, i18n] = useTranslation("global");
    function Cabecera(){
        if(screen.width > 700){
            return(
                <Carousel/>
            )
        }else {
            return(
                <Header/>
            )
        }
    }
    return(
        <div>
            <Cabecera/>
            <section className="section mb-6">
                <div className="container">
                    <div className="mb-6">
                        <h1 className="is-size-3-desktop is-size-5-mobile has-text-centered is-uppercase has-text-primary"><b>{t("home.title-1")}</b></h1>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-2 mx-6">
                            <figure className="image px-5 py-5">
                                <img src={NutrientesIcon} alt="Nutrientes-icon"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("home.text-icon-1")}</b></p>
                        </div>
                        <div className="column is-2 mx-6">
                            <figure className="image px-5 py-5">
                                <img src={CostoIcon} alt="Costo-icono"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("home.text-icon-2")}</b></p>
                        </div>
                        <div className="column is-2 mx-6">
                            <figure className="image px-5 py-5">
                                <img src={TiempoIcon} alt="Tiempo-icono"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("home.text-icon-3")}</b></p>
                        </div>
                    </div>
                    <div className="has-text-centered columns is-centered mt-6">
                        <p className="column is-8">
                        {t("home.paragraph-icon")}
                        </p>
                    </div>
                </div>
            </section>
            <section id="consejos" className="section p-0 mt-6 mb-6">
                <div className="is-relative">
                    <figure className="image">
                        <img src={CultivosFondo} alt=""/>
                    </figure>
                    <div className="columns is-centered consejos-titulo-contenedor is-fullwidth">
                        <div className="column is-8 is-offset-x consejos-titulo">
                            <p className="is-size-3-desktop is-size-5-mobile has-text-centered is-uppercase has-text-primary"><b>{t("home.title-2-a")}<br/>{t("home.title-2-b")}</b></p>
                        </div>
                    </div>
                    <div className="columns is-centered consejos-bloques-contenedor">
                        <div className="column is-3 p-4 box mx-4">
                            <h2 className="is-size-4 is-uppercase has-text-primary has-text-centered mt-4 mb-5"><b>{t("home.tip-title-1")}</b></h2>
                            <figure className="image mb-4">
                                <img src={Consejo1} alt=""/>
                            </figure>
                            <p className="has-text-justified">{t("home.tip-text-1")}</p>
                        </div>
                        <div className="column is-3 p-4 box mx-4">
                            <h2 className="is-size-4 is-uppercase has-text-primary has-text-centered mt-4 mb-5"><b>{t("home.tip-title-2")}</b></h2>
                            <figure className="image mb-4">
                                <img src={Consejo2} alt=""/>
                            </figure>
                            <p className="has-text-justified">{t("home.tip-text-2")}</p>
                        </div>
                        <div className="column is-3 p-4 box mx-4">
                            <h2 className="is-size-4 is-uppercase has-text-primary has-text-centered mt-4 mb-5"><b>{t("home.tip-titel-3")}</b></h2>
                            <figure className="image mb-4">
                                <img src={Consejo3} alt=""/>
                            </figure>
                            <p className="has-text-justified">{t("home.tip-text-3")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section seccion-siguenos">
                <div className="container">
                    <div className="mb-6">
                        <h1 className="is-size-3 has-text-centered is-uppercase has-text-primary"><b>{t("home.follow-title")}</b></h1>
                    </div>
                    <div className="columns is-centered">
                        <figure className="column is-2">
                            <img src={Insta1} alt=""/>
                        </figure>
                        <figure className="column is-2">
                            <img src={Insta2} alt=""/>
                        </figure>
                        <figure className="column is-2">
                            <img src={Insta3} alt=""/>
                        </figure>
                        <figure className="column is-2">
                            <img src={Insta4} alt=""/>
                        </figure>
                    </div>
                    <div className="columns is-centered">
                        <a className="column is-3 is-offset-x" href="https://www.instagram.com/abodomrd/">
                            <button className="button is-primary is-fullwidth">{t("home.follow-button")}</button>
                        </a>
                    </div>
                </div>
            </section>
            <section className="section has-background-light mb-6">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-3">
                            <figure>
                                <img src={Logo} alt="Logo Abodom"/>
                            </figure>
                        </div>
                        <div className="column is-4">
                            <div className="box">
                                <h1 className="has-text-centered is-uppercase has-text-primary is-size-5 mb-4"><b>{t("home.form-title")}</b></h1>
                                <form action="">
                                    <div className="field">
                                        <div className="control has-icons-left">
                                            <input className="input" type="email" name="" id="" placeholder="Email"/>
                                            <span class="icon is-small is-left">
                                                <i class="fas fa-envelope"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button type="submit" className="button is-primary is-fullwidth">{t("home.form-button")}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Inicio;
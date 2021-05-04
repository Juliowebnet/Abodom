import React from 'react'

//importamos i18next para las traducciones
import {useTranslation} from 'react-i18next'

//Componentes
import Header from '../components/header';
import Footer from '../components/footer';

//imagenes
import Fertilizante1 from '../img/fertilizante-granulado.svg';
import Fertilizante2 from '../img/fertilizante-soluble.svg';
import Fertilizante3 from '../img/fertilizante-foliar.svg';
import Fertilizante4 from '../img/fertilizante-especial.svg';
import Fertilizante5 from '../img/abono-organico.svg';
import Aminoacido from '../img/aminoacido.svg';
import Servicio1 from '../img/soporte-tecnico.svg';
import Servicio2 from '../img/analisis-de-suelo.svg';
import Servicio3 from '../img/programa-nutricion.svg';


function Productos(){
    const [t, i18n] = useTranslation("global");
    return(
        <div>
            <Header/>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h1 className="is-size-3 has-text-centered has-text-primary my-6"><b>{t("products.products-title")}</b></h1>
                        </div>
                    </div>
                    <div className="columns is-centered box animation-content">
                        <div className="column">
                            <figure className="image mb-4">
                                <img src={Fertilizante1} alt="Fertilizante Granulado"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-1")}</b></p>
                        </div>
                        <div className="column">
                            <figure className="image mb-4">
                                <img src={Fertilizante2} alt="Fertilizante Soluble"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-2")}</b></p>
                        </div>
                        <div className="column">
                            <figure className="image mb-4">
                                <img src={Fertilizante3} alt="Fertilizante Foliar"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-3")}</b></p>
                        </div>
                        <div className="column">
                            <figure className="image mb-4">
                                <img src={Fertilizante4} alt="Fertilizante Especial"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-4-a")}</b> <br/>{t("products.product-4-b")}</p>
                        </div>
                        <div className="column">
                            <figure className="image mb-4">
                                <img src={Aminoacido} alt="Aminoacidos"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-5")}</b></p>
                        </div>
                        <div className="column">
                            <figure className="image mb-4">
                                <img src={Fertilizante5} alt="Fertilizante Orgánico"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-6")}</b></p>
                        </div>
                        {/* <div className="column animated">
                            <div className="animated-1">
                                <figure className="image mb-4">
                                    <img src={Fertilizante1} alt="Fertilizante Granulado"/>
                                </figure>
                                <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-1")}</b></p>
                            </div>
                            <div className="animated-2">
                                <div className="animated-text">
                                    <p>texto</p>
                                </div>
                            </div>
                        </div>
                        <div className="column animated">
                            <div className="animated-1">
                                <figure className="image mb-4">
                                    <img src={Fertilizante2} alt="Fertilizante Soluble"/>
                                </figure>
                                <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-2")}</b></p>
                            </div>
                            <div className="animated-2">
                                <div className="animated-text">
                                    <p>texto</p>
                                </div>
                            </div>
                        </div>
                        <div className="column animated">
                            <div className="animated-1">
                                <figure className="image mb-4">
                                    <img src={Fertilizante3} alt="Fertilizante Foliar"/>
                                </figure>
                                <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-3")}</b></p>
                            </div>
                            <div className="animated-2">
                                <div className="animated-text">
                                    <p>texto</p>
                                </div>
                            </div>
                        </div>
                        <div className="column animated">
                            <div className="animated-1">
                                <figure className="image mb-4">
                                    <img src={Fertilizante4} alt="Fertilizante Especial"/>
                                </figure>
                                <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-4-a")}</b> <br/>{t("products.product-4-b")}</p>
                            </div>
                            <div className="animated-2">
                                <div className="animated-text">
                                    <p>texto</p>
                                </div>
                            </div>
                        </div>
                        <div className="column animated">
                            <div className="animated-1">
                                <figure className="image mb-4">
                                    <img src={Aminoacido} alt="Aminoacidos"/>
                                </figure>
                                <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-5")}</b></p>
                            </div>
                            <div className="animated-2">
                                <div className="animated-text">
                                    <p>texto</p>
                                </div>
                            </div>
                        </div>
                        <div className="column animated">
                            <div className="animated-1">
                                <figure className="image mb-4">
                                    <img src={Fertilizante5} alt="Fertilizante Orgánico"/>
                                </figure>
                                <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.product-6")}</b></p>
                            </div>
                            <div className="animated-2">
                                <div className="animated-text">
                                    <p>texto</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h1 className="is-size-3 has-text-centered has-text-primary my-4"><b>{t("products.services-title")}</b></h1>
                        </div>
                    </div>
                    <div className="columns is-centered box">
                        <div className="column is-2">
                            <figure className="image mb-4">
                                <img src={Servicio1} alt="Soporte Técnico"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.service-1")}</b></p>
                        </div>
                        <div className="column is-2">
                            <figure className="image mb-4">
                                <img src={Servicio2} alt="Análisis de Suelo"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.service-2")}</b></p>
                        </div>
                        <div className="column is-2">
                            <figure className="image mb-4">
                                <img src={Servicio3} alt="Programas de Nutrición"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>{t("products.service-3")}</b></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section has-background-light">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <h1 className="is-size-3 has-text-centered has-text-primary my-4"><b>{t("products.formulas-title")}</b></h1>
                        </div>
                    </div>
                    <div className="columns is-centered box has-background-primary">
                        <div className="column is-3">
                            <div className="content">
                                <ul className="has-text-white has-text-weight-bold">
                                    <li>Urea</li>
                                    <li>UREDOM (33.5-0-0+12S)</li>
                                    <li>Sulfudom (31-0-0+14s)</li>
                                    <li>{t("products.formula-1")}</li>
                                    <li>{t("products.formula-2")}</li>
                                    <li>DAP</li>
                                    <li>MAP</li>
                                    <li>{t("products.formula-3")} 50kg</li>
                                    <li>{t("products.formula-3")} 45kg</li>
                                    <li>{t("products.formula-4")}</li>
                                    <li>{t("products.formula-5")}</li>
                                    <li>{t("products.formula-6")}</li>
                                    <li className="has-background-white"><span className="has-text-primary px-3">15-15-15+11s</span></li>
                                    <li>21-0.1-21</li>
                                    <li>17-0.1-28</li>
                                    <li>15-15-15+4s</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column is-2">
                            <div className="content">
                                <ul className="has-text-white has-text-weight-bold">
                                    <li>20-0-20+4s</li>
                                    <li>20-5-20+4s</li>
                                    <li>16-8-16+4s</li>
                                    <li>16-8-8+4s</li>
                                    <li>16-8-8+5s</li>
                                    <li>15-6-25+4s</li>
                                    <li>18-5-15</li>
                                    <li>20-0-20</li>
                                    <li>18-5-25</li>
                                    <li>15-10-15</li>
                                    <li>12-24-12</li>
                                    <li>12-24-12+3s</li>
                                    <li>15-3-31</li>
                                    <li>15-10-10</li>
                                    <li>14-6-10</li>
                                    <li>14-7-14</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column is-2">
                            <div className="content">
                                <ul className="has-text-white has-text-weight-bold">
                                    <li>18-5-15+5s</li>
                                    <li>15-3-31+4s</li>
                                    <li>17-3-28+4s</li>
                                    <li>30-5-10+5s</li>
                                    <li>15-15-155+5s</li>
                                    <li>10-18-155+5s</li>
                                    <li>15-15-15+4s+1Zn</li>
                                    <li>20-0-20+4s+1Zn</li>
                                    <li>20-5-20+4s+1Zn</li>
                                    <li>16-8-16+4s+1Zn</li>
                                    <li>16-8-8+4s+1Zn</li>
                                    <li>16-8-8+5s+1Zn</li>
                                    <li>15-6-25+4s+1Zn</li>
                                    <li>16-10-10-+4s+1Zn</li>
                                    <li>16-12-16+4s+1Zn</li>
                                    <li>17-3-28+4s+1Zn</li>
                                </ul>
                            </div>
                        </div>
                        <div className="column is-4">
                            <div className="content">
                                <ul className="has-text-white has-text-weight-bold">
                                    <li className="has-background-white"><span className="has-text-primary px-3">15-4-23</span></li>
                                    <li className="has-background-white"><span className="has-text-primary px-3">17-6-18</span></li>
                                    <li>15-30-15+ME</li>
                                    <li>26-6-14+ME</li>
                                    <li>15-5-30+ME</li>
                                    <li>4-3-3+ 60% {t("products.formula-7")}</li>
                                    <li>2-14-0+ 40% {t("products.formula-7")}</li>
                                    <li>0-0-50+18S</li>
                                    <li className="has-background-white"><span className="has-text-primary px-3">Polifoska 21-0-0-35s+4mgo</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Productos;
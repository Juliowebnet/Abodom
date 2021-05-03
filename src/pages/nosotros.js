import React from 'react';

//importamos i18next para las traducciones
import {useTranslation} from 'react-i18next'

//componentes
import Header from '../components/header';
import Footer from '../components/footer';

//imagenes
import imgNosotros from '../img/nosotros2.png'

function Nosotros(){
    const [t, i18n] = useTranslation("global");
    return(
        <div>
            <Header/>
            <section className="section seccion-nosotros">
                <div className="container">
                    <figure className="image">
                        <img src={imgNosotros} alt="Nosotros"/>
                    </figure>
                    <div className="columns is-centered contenedor-nosotros">
                        <div className="column is-8 px-6 texto-nosotros">
                            <h1 className="is-size-3-desktop is-size-5-mobile has-text-centered is-uppercase has-text-primary mt-5 mb-6 has-text-weight-bold">{t("about-us.title")}</h1>
                            <p className="has-text-justified my-5"><b className="has-text-primary">Abonos Dominicanos</b> {t("about-us.text-1")}</p>
                            <p className="has-text-justified my-5">{t("about-us.text-2")}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered is-fullwidth">
                        <div className="column is-4 mx-3">
                            <div className="box px-6">
                                <div>
                                    <p className="is-size-3-desktop is-size-5-mobile has-text-centered is-uppercase has-text-primary mt-5 mb-4 has-text-weight-bold">{t("about-us.vision-title")}</p>
                                </div>
                                <div>
                                    <p className="has-text-justified">{t("about-us.vision-text")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="column is-4 mx-3 ">
                            <div className="box px-6">
                                <div>
                                    <p className="is-size-3-desktop is-size-5-mobile has-text-centered is-uppercase has-text-primary mt-5 mb-4 has-text-weight-bold">{t("about-us.mission-title")}</p>
                                </div>
                                <div>
                                    <p className="has-text-justified">{t("about-us.mission-text")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="columns is-centered my-4">
                        <div className="column box is-8 has-text-justified px-6 pb-5">
                            <div>
                                <p className="is-size-3-desktop is-size-5-mobile has-text-centered is-uppercase has-text-primary mt-5 mb-4 has-text-weight-bold">{t("about-us.value-title")}</p>
                            </div>
                            <div>
                                <div className="content">
                                    <ul>
                                        <li><b className="has-text-primary is-uppercase">{t("about-us.value-subtitle-2")}</b>{t("about-us.value-text-2")}</li>
                                        <li><b className="has-text-primary is-uppercase">{t("about-us.value-subtitle-3")}</b>{t("about-us.value-text-3")}</li>
                                        <li><b className="has-text-primary is-uppercase">{t("about-us.value-subtitle-4")}</b>{t("about-us.value-text-4")}</li>
                                        <li><b className="has-text-primary is-uppercase">{t("about-us.value-subtitle-5")}</b>{t("about-us.value-text-5")}</li>
                                        <li><b className="has-text-primary is-uppercase">{t("about-us.value-subtitle-6")}</b>{t("about-us.value-text-6")}</li>
                                        <li><b className="has-text-primary is-uppercase">{t("about-us.value-subtitle-7")}</b>{t("about-us.value-text-7")}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Nosotros;
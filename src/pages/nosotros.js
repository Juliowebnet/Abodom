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
            <Footer/>
        </div>
    )
}

export default Nosotros;
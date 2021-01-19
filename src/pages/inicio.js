import React from 'react';

//Componentes
import Carousel from '../components/carousel';
import Footer from '../components/footer';
import Header from '../components/header';

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
                        <h1 className="is-size-3-desktop is-size-5-mobile has-text-centered is-uppercase has-text-primary"><b>¿Por qué nuestros abonos y fertilizantes son mejores que el abono convencional?</b></h1>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-2 mx-6">
                            <figure className="image px-5 py-5">
                                <img src={NutrientesIcon} alt="Nutrientes-icon"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>Aportan mayor cantidad de nutrientes</b></p>
                        </div>
                        <div className="column is-2 mx-6">
                            <figure className="image px-5 py-5">
                                <img src={CostoIcon} alt="Costo-icono"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>Menor costo</b></p>
                        </div>
                        <div className="column is-2 mx-6">
                            <figure className="image px-5 py-5">
                                <img src={TiempoIcon} alt="Tiempo-icono"/>
                            </figure>
                            <p className="has-text-centered is-uppercase has-text-primary is-size-7"><b>Aportan nutrientes mucho más rápido</b></p>
                        </div>
                    </div>
                    <div className="has-text-centered columns is-centered mt-6">
                        <p className="column is-8">
                        Planée utilizar toda la superficie de su huerta. Por medio de técnicas como el cultivo vertical, el cultivo en sucesión y el cultivo intercalado podrá sacar el máximo provecho del espacio disponible.
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
                            <p className="is-size-3-desktop is-size-5-mobile has-text-centered is-uppercase has-text-primary"><b>Consejos para el <br/> planeamiento de cultivos</b></p>
                        </div>
                    </div>
                    <div className="columns is-centered consejos-bloques-contenedor">
                        <div className="column is-3 p-4 box mx-4">
                            <h2 className="is-size-4 is-uppercase has-text-primary has-text-centered mt-4 mb-5"><b>Cultivo <br/> vertical</b></h2>
                            <figure className="image mb-4">
                                <img src={Consejo1} alt=""/>
                            </figure>
                            <p className="has-text-justified">Para ahorrar espacio en su huerta cultive las judías trepadoras, las arvejas, los pepinos y las calabazas en espalderas.
Las verjas, los postes, las jaulas de alambre y las espalderas existentes sirven como soporte.</p>
                        </div>
                        <div className="column is-3 p-4 box mx-4">
                            <h2 className="is-size-4 is-uppercase has-text-primary has-text-centered mt-4 mb-5"><b>Cultivo <br/> en sucesión</b></h2>
                            <figure className="image mb-4">
                                <img src={Consejo2} alt=""/>
                            </figure>
                            <p className="has-text-justified">Esta técnica consiste en cultivar una planta como la lechuga en la primavera y reemplazarla cuando empieza el calor por otra planta como las judías.
A fines del verano el proceso puede invertirse y las judías pueden reemplazarse por un cultivo de estación fría como la lechuga o los rábanos.</p>
                        </div>
                        <div className="column is-3 p-4 box mx-4">
                            <h2 className="is-size-4 is-uppercase has-text-primary has-text-centered mt-4 mb-5"><b>Cultivo <br/> intercalado</b></h2>
                            <figure className="image mb-4">
                                <img src={Consejo3} alt=""/>
                            </figure>
                            <p className="has-text-justified">El cultivo intercalado consiste en plantar vegetales de crecimiento rápido junto con vegetales de crecimiento lento.
Un ejemplo de esta técnica puede ser plantar rábanos, lechuga o cebollas de verdeo junto con plantas de tomate en jaulas de alambre.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section seccion-siguenos">
                <div className="container">
                    <div className="mb-6">
                        <h1 className="is-size-3 has-text-centered is-uppercase has-text-primary"><b>Síguenos en Instagram</b></h1>
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
                            <button className="button is-primary is-fullwidth">SÍGUENOS</button>
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
                                <h1 className="has-text-centered is-uppercase has-text-primary is-size-5 mb-4"><b>Regístrate a nuestros boletínes mensuales</b></h1>
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
                                            <button type="submit" className="button is-primary is-fullwidth">REGISTRAR</button>
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
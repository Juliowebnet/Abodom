import React from 'react'

//componentes
import Header from '../components/header';
import Footer from '../components/footer';
import Formulario from '../components/formulario'
import Mapa from '../components/map'

//imagenes
import InstagramIcon from '../img/instagram-icon.svg';
import FacebookIcon from '../img/facebook-icon.svg';

function Contacto() {
    return(
        <div>
            <Header></Header>
            <section className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column">
                            <div className="box">
                                <div className="has-text-centered is-size-4 has-text-primary mt-4 mb-6">
                                    <h2><b>FORMULARIO DE CONTACTO</b></h2>
                                </div>
                                <Formulario/>
                            </div>
                        </div>
                        <div className="column">
                            <Mapa/>  
                            <div className="box has-background-primary mt-4">
                                <div className="columns is-centered">
                                    <div className="column">
                                        <div className="is-flex is-justify-content-center">
                                            <a href="https://www.instagram.com/abodomrd/">
                                                <figure className="image is-32x32">
                                                    <img src={InstagramIcon} alt="instagram icono"/>
                                                </figure>
                                            </a>
                                            <a href="https://www.facebook.com/Abodomrd-112933952379906">
                                                <figure className="image is-32x32">
                                                    <img src={FacebookIcon} alt="instagram icono"/>
                                                </figure>
                                            </a>
                                        </div>
                                        <p className="has-text-white has-text-centered my-1"><i class="fas fa-envelope"></i> info@abodom.do</p>
                                        <p className="has-text-white has-text-centered my-1"><i class="fas fa-phone-alt"></i> +1 809-530-0643</p>
                                        <p className="has-text-white has-text-centered my-1 is-uppercase">AV. ISABEL AGUIAR #267 - ZONA INDUSTRIAL DE HERRERA</p>
                                        <p className="has-text-white has-text-centered my-1 is-size-7">Horario Administrativo: Lunes a Viernes de 7:30 A.M. a 5:00 P.M.</p>
                                    </div>
                                </div>    
                            </div>          
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}


export default Contacto;
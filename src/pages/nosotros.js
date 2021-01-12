import React from 'react';

//componentes
import Header from '../components/header';
import Footer from '../components/footer';

//imagenes
import imgNosotros from '../img/nosotros2.png'

function Nosotros(){
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
                            <h1 className="is-size-3 has-text-centered is-uppercase has-text-primary mt-5 mb-6 has-text-weight-bold">¿quienes somos?</h1>
                            <p className="has-text-justified my-5"><b className="has-text-primary">Abonos Dominicanos</b> es tu mejor opción a la hora de sembrar y obtener un cultivo abundante. Es gracias a la calidad de producción que tienen sus productos. Somos una empresa comprometida con ofrecer un servicio rápido y personalizado con un personal con años de experiencia en la materia.</p>
                            <p className="has-text-justified my-5">Contamos con una gran variedad  de soluciones para cada tipo de suelo según su necesidad. Ven y comprueba tú mismo la calidad de nuestros productos.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Nosotros;
import React, {useEffect} from 'react'
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
//importamos el css
import 'bulma-carousel/dist/css/bulma-carousel.min.css'
//imagenes 
import slider1 from '../img/slider1-min.jpg'
import slider2 from '../img/slider2-min.jpg'
import slider3 from '../img/slider3-min.jpg'
//componentes
import Header from './header'

function CarouselSliders() {
    // Inicializa todos los elementos con la clase carousel
    useEffect(() => {
        bulmaCarousel.attach('.hero-carousel', {
            autoplay: true,
            loop: true
        }); 
  });
    return(
        <section className="hero is-large has-carousel">
            <div id="carousel-abodom" className="hero-carousel">
                <div className="item-1">
                    <img src={slider1} />
                </div>
                <div className="item-2">
                    <img src={slider2} />
                </div>
                <div className="item-3">
                    <img src={slider3} />
                </div> 
            </div>
            <div className="hero-head">
                <Header></Header>
            </div>
            <div className="hero-body"></div>
            <div className="hero-foot"></div>
        </section>
    )
}

export default CarouselSliders;
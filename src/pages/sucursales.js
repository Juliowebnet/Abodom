import React from 'react'

//Componentes
import Header from '../components/header';
import Footer from '../components/footer';
import Sucursal from '../components/sucursal';

//data
import Data from '../data/sucursales.json';


function Sucursales() {
    return(
        <div>
            <Header/>
            <section className="section">
                <div className="container">
                    <Sucursal data={Data.sucursales[0]}/>
                    <Sucursal data={Data.sucursales[1]}/>
                    <Sucursal data={Data.sucursales[2]}/>
                    <Sucursal data={Data.sucursales[3]}/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}


export default Sucursales;
import React from 'react'

//Componentes
import Header from '../components/header';
import Footer from '../components/footer';
import Sucursal from '../components/sucursal';

//data
import Data from '../data/sucursales.json';

//imagenes
//sucursal 1
import imgSucursal1 from '../img/sucursal1-a.jpg';
import imgSucursal2 from '../img/sucursal1-b.jpg';
import imgSucursal3 from '../img/sucursal1-c.jpg';
import imgSucursal4 from '../img/sucursal1-d.jpg';
import imgSucursal5 from '../img/sucursal1-e.jpg';
//sucursal 2
import imgSucursal6 from '../img/sucursal2-a.jpg';
import imgSucursal7 from '../img/sucursal2-b.jpg';
import imgSucursal8 from '../img/sucursal2-c.jpg';
import imgSucursal9 from '../img/sucursal2-d.jpg';
import imgSucursal10 from '../img/sucursal2-e.jpg';
//sucursal 3
import imgSucursal11 from '../img/sucursal3-a.jpg';
import imgSucursal12 from '../img/sucursal3-b.jpg';
import imgSucursal13 from '../img/sucursal3-c.jpg';
import imgSucursal14 from '../img/sucursal3-d.jpg';
import imgSucursal15 from '../img/sucursal3-e.jpg';
//sucursal 4
import imgSucursal16 from '../img/sucursal4-a.jpg';
import imgSucursal17 from '../img/sucursal4-b.jpg';
import imgSucursal18 from '../img/sucursal4-c.jpg';
import imgSucursal19 from '../img/sucursal4-d.jpg';
import imgSucursal20 from '../img/sucursal4-e.jpg';
//sucursal 5
import imgSucursal21 from '../img/sucursal5-a.jpg';
import imgSucursal22 from '../img/sucursal5-b.jpg';
import imgSucursal23 from '../img/sucursal5-c.jpg';
import imgSucursal24 from '../img/sucursal5-d.jpg';
import imgSucursal25 from '../img/sucursal5-e.jpg';
//sucursal 6
import imgSucursal26 from '../img/sucursal6-a.jpg';
import imgSucursal27 from '../img/sucursal6-b.jpg';
import imgSucursal28 from '../img/sucursal6-c.jpg';
import imgSucursal29 from '../img/sucursal6-d.jpg';
import imgSucursal30 from '../img/sucursal6-e.jpg';
//sucursal 7
import imgSucursal31 from '../img/sucursal7-a.jpg';
import imgSucursal32 from '../img/sucursal7-b.jpg';
import imgSucursal33 from '../img/sucursal7-c.jpg';
import imgSucursal34 from '../img/sucursal7-d.jpg';
// import imgSucursal35 from '../img/sucursal7-e.jpg';
//sucursal 8
import imgSucursal36 from '../img/sucursal8-a.jpg';
import imgSucursal37 from '../img/sucursal8-b.jpg';
import imgSucursal38 from '../img/sucursal8-c.jpg';
import imgSucursal39 from '../img/sucursal8-d.jpg';
import imgSucursal40 from '../img/sucursal8-e.jpg';
//sucursal 9
import imgSucursal41 from '../img/sucursal9-a.jpg';
import imgSucursal42 from '../img/sucursal9-b.jpg';
import imgSucursal43 from '../img/sucursal9-c.jpg';
import imgSucursal44 from '../img/sucursal9-d.jpg';
import imgSucursal45 from '../img/sucursal9-e.jpg';
//sucursal 10
import imgSucursal46 from '../img/sucursal10-a.jpg';
import imgSucursal47 from '../img/sucursal10-b.jpg';
import imgSucursal48 from '../img/sucursal10-c.jpg';
import imgSucursal49 from '../img/sucursal10-d.jpg';
import imgSucursal50 from '../img/sucursal10-e.jpg';
//sucursal 11
import imgSucursal51 from '../img/sucursal11-a.jpg';
import imgSucursal52 from '../img/sucursal11-b.jpg';
import imgSucursal53 from '../img/sucursal11-c.jpg';
import imgSucursal54 from '../img/sucursal11-d.jpg';
import imgSucursal55 from '../img/sucursal11-e.jpg';
//sucursal 12
import imgSucursal56 from '../img/sucursal12-a.jpg';
import imgSucursal57 from '../img/sucursal12-b.jpg';
import imgSucursal58 from '../img/sucursal12-c.jpg';
import imgSucursal59 from '../img/sucursal12-d.jpg';
// import imgSucursal60 from '../img/sucursal12-e.jpg';



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
                    <Sucursal data={Data.sucursales[4]}/>
                    <Sucursal data={Data.sucursales[5]}/>
                    <Sucursal data={Data.sucursales[6]}/>
                    <Sucursal data={Data.sucursales[7]}/>
                    <Sucursal data={Data.sucursales[8]}/>
                    <Sucursal data={Data.sucursales[9]}/>
                    <Sucursal data={Data.sucursales[10]}/>
                    <Sucursal data={Data.sucursales[11]}/>
                </div>
            </section>
            <Footer/>
        </div>
    )
}


export default Sucursales;
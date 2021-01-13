import React from 'react'


function Sucursal(props) {
    return(
        <div className="sucursal px-6">
            <div className="columns px-4">
                {/* nombre sucursal */}
                <div className="column nombre-sucursal is-4">
                    <h1 className="has-text-centered is-uppercase has-text-weight-bold">{props.data.nombre}</h1>
                </div>
            </div>
            {/* imagenes de la sucursal */}
            <div className="columns is-centered">
                <div className="column is-6">
                    <figure className="image">
                        <img src={props.data.img[0]} alt="Imagen sucursal"/>
                    </figure>
                </div>
                <div className="column is-6">
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <figure className="image">
                                <img src={props.data.img[1]} alt="Imagen sucursal"/>
                            </figure>
                        </div>
                        <div className="column is-6">
                            <figure className="image">
                                <img src={props.data.img[2]} alt="Imagen sucursal"/>
                            </figure>
                        </div>
                    </div>
                    <div className="columns is-centered">
                        <div className="column is-6">
                            <figure className="image">
                                <img src={props.data.img[3]} alt="Imagen sucursal"/>
                            </figure>
                        </div>
                        <div className="column is-6">
                            <figure className="image">
                                <img src={props.data.img[4]} alt="Imagen sucursal"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            {/* bloque de mapa y datos de la sucursal */}
            <div className="columns is-centered is-vcentered">
                {/* mapa */}
                <div className="column is-8">
                    <iframe className="mapa-sucursal" src={props.data.urlMapa} width="100%" height="350"></iframe>
                </div>
                <div className="column is-4">
                    <div className="box has-text-centered has-text-grey">
                        <p className="has-text-primary mb-5 mt-4">
                            <b className="is-uppercase">{props.data.gerente}</b> 
                            <p>(Gerentes de zona)</p>
                        </p>
                        <p>
                            Tel: {props.data.telefono}
                        </p>
                        <p>
                            {props.data.email}
                        </p>
                        <p className="mt-5">
                            {props.data.direccion}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Sucursal;
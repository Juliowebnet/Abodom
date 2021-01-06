import React from 'react'
import emailjs from 'emailjs-com'

function Formulario(){

    function sendEmail(e){
        e.preventDefault();
    
        emailjs.sendForm('service_dtsb5rj','template_730jdrl', e.target, 'user_i8knvNAkIgaRfKmCIMUhf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        });

        e.target.reset();
    }

    return(
        <form onSubmit={sendEmail}>
            <div className="field">
                <div className="control">
                    <label className="label">Nombre</label> 
                    <input type="text" className="input" name="user_name"/>  
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="label">Email</label> 
                    <input type="email" className="input" name="user_email"/> 
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <label className="label">Mensaje</label> 
                    <textarea name="message" className="textarea" cols="30" rows="10"></textarea> 
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input className="button is-primary is-fullwidth" type="submit" value="ENVIAR" />   
                </div>
            </div>
        </form>                      
    )
}

export default Formulario;
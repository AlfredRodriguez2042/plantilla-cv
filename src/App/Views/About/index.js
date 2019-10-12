import React from 'react'
import Button from '../../Components/Button'

const About = () => {
    return (
        <div>
            <div className="alt-banner color-first">
                <div className="grid">
                    <div className="alt-banner-data">
                        <h2 className="alt-banner-title">Rodriguez Garcia    Alfredo</h2>
                        <p className="banner-subtitle">¡Hola! Soy Alfredo, un aficionado de las tecnologias me dedico al desarrollo web.<br/>
                        Utilizo herramientas de trabajo modernas, agiles y practicas como Hml5,Css3 y JavaScript
                        </p>
                        <Button
                        content="Contact"
                        url="/contact"
                        color="btn-ghost"
                        
                        />
                    </div>
                    <div className="alt-banner-caption">
                        <i>Diseño creativo y soluciones rapidas</i>
                    </div>

                </div>

            </div>
            
        </div>
    )
}

export default About

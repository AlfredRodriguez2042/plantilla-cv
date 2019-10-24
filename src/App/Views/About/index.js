import React, { useEffect, useState } from 'react'
import Button from '../../Components/Button'
//import 'animate.css'
import { Language, Framework, Repositories } from './Data'

  

const About = () => {
    const [visible, setVisible] = useState(false)
        
    
       const animate = React.useRef()
    
        const animation = ()=>{
            let options = {
               // root: document.querySelector('body'),
               // threshold: 0.5,
                rootMargin: ' 0px 0px 300px 0px',
            }
            const callback = (entries, observe)=>{
                //console.log(entries[0].isIntersecting)
              if(entries[0].isIntersecting){
                 setVisible(true)
              }else{
                setVisible(false)
              }
            }
            const observer = new IntersectionObserver( callback,options)
            observer.observe(animate.current)

           
            }

        useEffect(()=>{ animation()},[])

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
           <section className="study">
               <div className="study-title">
                   <h2>Formacion Academica</h2>
               </div>
               <div className="study-data">
                   <div className="study-image">
                       <img src="https://res.cloudinary.com/dcyjlkfuh/image/upload/v1571289493/studi-svg.svg" alt="img-study"/>
                   </div>
                   <div className="study-info">
                       <h3 className="study-subtitle">UTN</h3>
                       <p>Estudie un curso de desarrollo web, donde vimos como utilizar herramientas de Diseño tales como Photoshop, Ilustrator entre otros.. <br/> Tambien vimos programacion usando el Stack Lamp(Linux, Apache, Mysql y Php), tambien usamos el Framework  de Angular como tecnologia del front-end </p>
                       <h3 className="study-subtitle">EDteam</h3>
                       <p>Luego de terminar el curso complete mis conocimientos en el desarrollo web usando la plataforma de estudio virtual EDteam.<br/> Estudie la Especialidad de React un curso completo <br/> Servidores Linux con Apache2 y Ngnix<br/> Estudie Amazon Web Services donde aprendi a usar los servicios de EC2, Route53 , IAM, S3, etc.. </p>
                   </div>
               </div>

            </section> 
              <div className="title"><h2>HABILIDADES</h2></div>
            <section className="abilities "   id="animates" ref={animate}>
               { Language.map((leng,i)=>(
                   
                    <div className="abilities-card" key={i}>
                    <div className="abilities-box">
                <div className="abilities-percent">
                    <div className="rotate"  >
                   {  visible ?
                       <svg className="svg" >
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg> :<p>loading</p>
                   }
                </div>
                <div className="abilities-number">
                    <h2>{leng.percent}<span>{leng.simbol}</span> </h2>
                </div>
                </div>
                <h2 className="abilities-text">{leng.name}</h2>
                </div>
                </div>
               ))}
               
               { Framework.map((fram,i)=>(
                   <div className="abilities-card " key={i}>
                   <div className="abilities-box">
               <div className="abilities-percent">
                   <div className="rotate">
                     {  visible ?
                         <svg className="svg" >
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                </svg>:<p>loading..</p>
                     }  
               </div>
               <div className="abilities-number">
                   <h2>{fram.percent}<span>{fram.simbol}</span> </h2>
               </div>
               </div>
               <h2 className="abilities-text">{fram.name}</h2>
               </div>
               </div>
               ))}
                
            </section>

            <section>
                <div className="title"><h2>PROYECTOS PROPIOS</h2></div>
                <div className="porfolio" >
               { Repositories.map((data,i)=>(
                   <div className="porfolio-data" key={i}>
                       <div className="porfolio-image">
                           <img src={data.url} alt={data.name}/>
                       </div>
                       <h3 className="porfolio-title">{data.name}</h3>
                       <p className="porfolio-description">{data.description}</p>

                   </div>
  
               ))}
               </div>
            </section>
        </div>
    )
}

export default About

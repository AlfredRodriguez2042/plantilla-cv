import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'
import Button from '../../Components/Button'

import { Data } from './Data'

import Banner from '../../Components/Banner'
import Repositories from '../../Components/Repositories'
import CustChart, { CustChart2 } from './CustChart'




const Home = ({repositories}) => {
    const [useRepo, setRepo] =useState([])

    function getRepo(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(res =>setRepo(res))
        .catch(err=>console.log(err))
    }
    
    useEffect(()=>{
       // getRepo()
        
    },[])
    return (
        <div>
            <Banner
           // color="color-first"
            image={{
                src:"https://i.imgur.com/aBlu9Gy.png",
                alt:"banner-home"
            }}
            title="Bienvenido a un espacio de Diseño y Desarrollo Web"
            subtitle="Aprendamos juntos a desarrollar aplicaiones"
            />
            <section>
                <div className="content-about color-first">
                    <div className="skills">
                        <div className="skill">
                        <h3 className="skill-title" ><span className="text-number" >1</span>Operating System</h3>
                        <p className="skill-description" > Uso y Administracion de los recursos de la computadora, dentro de nuestro sistema operativo sea Windows/Linux (preferentemente Linux ).</p>
                        <p className="skill-description"> <Button content="View more" color="btn-ghost" url="/system"/>
                        </p>
                        </div>
                        <div>
                            <h3 className="skill-title" ><span className="text-number" >2</span>Cloud Computing </h3>
                            <p className="skill-description" >Un conjunto de recuros informaticos virtualizados y compartidos para ser usados bajo demanda, que pueden ser desplegados de manera Segura, Rapida y Escalable.</p>
                            <p className="skill-description"> <Button content="View more" color="btn-ghost" url="/cloud"/>
                            </p>
                        </div>

                    </div>
                    <div className="about-img">
                        <img src="https://res.cloudinary.com/dcyjlkfuh/image/upload/v1569932885/undraw_add_file_4gfw.svg" alt="img"/>
                    </div>
                    <div className="skills">
                    <div className="skill">
                        <h3 className="skill-title" > <span className="text-number" >3</span>Programing </h3>
                        <p className="skill-description" >Basicamente es decirle a tu computadora que es lo que quieres que haga por ti y donde el limite es tu imaginacion.</p>
                        <p className="skill-description"> <Button content="View more" color="btn-ghost" url="/programing"/>
                        </p>
                        

                    </div>
                    <div className="skill">
                        <h3 className="skill-title" ><span className="text-number" >4</span>Desing </h3>
                        <p className="skill-description" >Todos podemos crear y diseñar webs increibles. Las tendencias del Dieseño pueden cambiar tan rapido como surgieron.</p>
                        <p className="skill-description"> <Button content="View more" color="btn-ghost" url="/desing"/>
                        </p>
                    </div>
                    </div>
                </div>
            </section>
            <div>
                {console.log(repositories)}
            </div>
                       
        </div> 
    )
}

const mapStateToProps = state =>({
    repositories: state.repositories
})

export default connect(mapStateToProps,{})(Home)

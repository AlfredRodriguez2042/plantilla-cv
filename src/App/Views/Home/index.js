import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux'

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
            color="color-bgrey"
            image={{
                src:"https://i.imgur.com/aBlu9Gy.png",
                alt:"banner-home"
            }}
            title="Bienvenido a un espacio de Diseño y Desarrollo Web"
            subtitle="Aprendamos juntos a desarrollar aplicaiones"
            />
            <section>
                <div className="content-about">
                    <div className="skills">
                        <div className="skill">
                        <h3 className="skill-title" ><span className="text-number" >1</span>Operating System</h3>
                        <p className="skill-description" > Uso y Administracion de los recursos de la computadora, dentro de nuestro sistema operativo sea Windows/Linux (preferentemente Linux )</p>
                        </div>
                        <div>
                            <h3 className="skill-title" ><span className="text-number" >2</span>Cloud Computing </h3>
                            <p className="skill-description" >Un conjunto de recuros informaticos virtualizados y compartidos para ser usados bajo demanda, que pueden ser desplegados de manera Segura, Rapida y Escalable.</p>
                        </div>

                    </div>
                    <div className="about-img">
                        <img src="https://res.cloudinary.com/dcyjlkfuh/image/upload/v1569932885/undraw_add_file_4gfw.svg" alt="img"/>
                    </div>
                    <div className="skills">
                    <div className="skill">
                        <h3 className="skill-title" > <span className="text-number" >3</span>Programing </h3>
                        <p className="skill-description" >Basicamente es decirle a tu computadora que es lo que quieres que haga por ti y donde el limite es tu imaginacion.</p>

                    </div>
                    <div className="skill">
                        <h3 className="skill-title" ><span className="text-number" >4</span>Desing </h3>
                        <p className="skill-description" >Todos podemos crear y diseñar webs increibles. Las tendencias del Dieseño pueden cambiar tan rapido como surgieron</p>
                    </div>
                    </div>
                </div>
            </section>
            <div>
                {console.log(repositories)}
            </div>
            <div className="charts">
                <div className="chart">
                <CustChart
                uno='JavaScript'
                />
                </div>

                <div className="chart">
                <CustChart2
                title="Amazon Web Service"
                percent={50}
                subtitle='development'
                color='#FBA905'
                />
                </div>
            </div>
            <div className="porfolio">
               { Data.map((data,i)=>(
                   <div className="porfolio-data" key={i}>
                       <div className="porfolio-image">
                           <img src={data.url} alt={data.name}/>
                       </div>
                       <h3 className="porfolio-title">{data.name}</h3>
                       <p className="porfolio-description">{data.description}</p>

                   </div>
  
               ))}

            </div>
            
        </div> 
    )
}

const mapStateToProps = state =>({
    repositories: state.repositories
})

export default connect(mapStateToProps,{})(Home)

import React from 'react'
import Banner from '../../Components/Banner'

const Home = () => {
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
                        <h3><span>1</span>Operating System</h3>
                        <p>Administrar recursos de la computadora dentro de nuestro sistema operativo sea windows/linux</p>
                        </div>
                        <div>
                            <h3><span>2</span>Cloud Computing </h3>
                            <p>Es un conjunto de recuros informaticos virtualizados y compartidos para ser usados bajo demanda, que pueden ser desplegados de manera rapida y escalable.</p>
                        </div>

                    </div>
                    <div className="about-img">
                        <img src="https://res.cloudinary.com/dcyjlkfuh/image/upload/v1569932885/undraw_add_file_4gfw.svg" alt="img"/>
                    </div>
                    <div className="skills">
                    <div className="skill">
                        <h3> <span>3</span>Programing </h3>
                        <p>Basicamente es decirle a tu computadora que es lo que quieres que haga por ti y basicamente el limite es tu imaginacion.</p>

                    </div>
                    <div className="skill">
                        <h3><span>4</span>Desing </h3>
                        <p>Las tendencias del Dieseño pueden cambiar tan rapido como surgieron</p>
                    </div>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Home

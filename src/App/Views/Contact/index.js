import React from 'react'
import { Field, Form, Formik, withFormik} from 'formik'
import Icon from 'react-multiple-icons'

const Contact = (props) => {
    const { isSubmiting, isValid, values,  handleChange} = props

    const inputChange = ()=>{
        let inputs = document.getElementsByClassName("label");
        console.log(inputs)
        for (let i = 0; i < inputs.length; i++){
           // console.log(i)
            inputs[i].addEventListener("keyup", function(){
             console.log(inputs[i])
             if(inputs[i].value.length >=1){
                 console.log('alerta')
                  inputs[i].classList.add("fijar");
             }
            })
        }
       
    }

    return (
        <div className="contact color-first">
            <div className="grid">
                <div className="contact-form ">
                   
                    <Form >
                        <div className="title">
                            <h2> Contact</h2>
                        </div>
                        <div className="content-input">
                           <Field
                            id="name"
                            className="input"
                            type="text"
                            name="name"
                            onClick={inputChange}
                            value={values.name} />    
                           <label htmlFor="name"  className="label">Nombre</label>            
                        </div>

                        <div className="content-input">
                            <Field
                             id="email"
                             className="input"
                             type="email"
                             name="email"/> 
                            <label htmlFor="email" className="label">Email</label>
                        </div>

                        <div className="content-input">
                            <textarea
                             id="messaje"
                             className="input"
                             rows="5"
                             name="messaje" />
                            <label htmlFor="messaje" className="label">Mensaje</label>
                        </div>

                        <div className="content-input">
                            <div className="content-button">
                            <button
                            className="btn-ghost"
                            disabled={isSubmiting}
                            >Submit</button>
                            </div>
                        </div>
                    </Form>
              
                </div>
                <div className="contact-social-media">
                    <div className="title">
                        <h2>MIS REDES SOCIALES</h2>
                    </div>
                    <div className="social-media">
                        <ul className="social-menu">
                            <li className="social-item"><a
                            href="https://www.facebook.com/Kuro-109596567115585/">Facebook</a></li>
                            <li className="social-item"><a
                            href="">Instagram</a></li>
                            <li className="social-item"><a
                            href="">LinkedIn</a></li>
                            <li className="social-item"><a
                            href="https://github.com/AlfredRodriguez2042?tab=repositories">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default withFormik({
    mapPropsToValues: values =>{
        return{
                name:"",
                email:"",
                messaje:""
        }
    }
       
})(Contact)

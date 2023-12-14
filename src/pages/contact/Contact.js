import { useEffect } from 'react'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Notiflix from 'notiflix'
import { 
  InputContact,
  TextAContact,
  Error,
  DivInputLabel,
  LabelContact,
  DivMainRight,
  Button,
  DivInputLabelTEXT,
  DivMaior,
  TitleC,
  DivMainLeft
   } from './Contact.styles'  

import api from '../../api'
function Contact() {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/login')
        }
    },[])

   async function PostInContact(values){
    await api.post('contact' , values)
      .then( ( success) => {
        const data =  success
        navigate('/')
        Notiflix.Notify.success("Mensagem Enviada Com Sucesso!")
      })
      .catch((error) => {
        const data = error
        Notiflix.Notify.warning("Ops , Ocorreu algum erro")
     
        console.log(error);
      })
    }

    const SCHEMA = Yup.object().shape({
      email:Yup
      .string()
      .email("Email Inválido")
      .required("Campo Obrigatório"),
      nome:Yup
      .string()
      .required("Campo Obrigatório"),
      mensagem:Yup
      .string()
      .required("Campo Obrigatório"),
    })

    const formik = useFormik({
      initialValues:{
        email:'',
        nome:'',
        mensagem:''
      },
      validationSchema:SCHEMA,
      onSubmit:values => {
        PostInContact(values);
      }

    })
  return (
    <DivMaior>
      <DivMainLeft>
        <form onSubmit={formik.handleSubmit}>
        <DivInputLabel>
            <LabelContact htmlFor="email">email:</LabelContact>
            <InputContact 
            value={formik.values.email}
            name="email"
            id='email'
            onChange={formik.handleChange}
            ></InputContact>      
            {formik.errors.email && formik.touched.email ?
            <Error>{formik.errors.email}</Error>
            :null }
          </DivInputLabel>
          <DivInputLabel>
            <LabelContact htmlFor="nome">nome:</LabelContact>
            <InputContact 
            value={formik.values.nome}
            name="nome"
            id='nome'
            onChange={formik.handleChange}
            ></InputContact>          
            {formik.errors.nome && formik.touched.nome ?
            <Error>{formik.errors.nome}</Error>
            :null }  
          </DivInputLabel>
          <DivInputLabelTEXT>
            <LabelContact htmlFor="mensagem">mensagem:</LabelContact>
            <TextAContact 
            value={formik.values.mensagem}
            name="mensagem"
            id='mensagem'
            onChange={formik.handleChange}
            ></TextAContact>  
            {formik.errors.mensagem && formik.touched.mensagem ?
            <Error>{formik.errors.mensagem}</Error>
            :null }           
          </DivInputLabelTEXT>
          <DivInputLabelTEXT>
            <Button type="submit" >Enviar</Button>
          </DivInputLabelTEXT>
        </form>
        </DivMainLeft>
        <DivMainRight>
          <TitleC>Fique a vontade para me deixar uma mensagem , estou sempre aberto a fazer network </TitleC>
        </DivMainRight>
    </DivMaior>
  )
}

export default Contact
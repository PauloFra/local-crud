import { useEffect, useState  } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import Notiflix from 'notiflix'
import * as yup from 'yup'
import api from '../../api'
import {
  DivForm,
  DivMaior,
  DivLabelInput,
  Title,
  Error,
  Label,
  Input,
  Button
} from '../../components/globalStyles/formInitial.styles'
function CreateUser() {
const navigate = useNavigate()
const [isEmailExist , setIsEmailExist] = useState()
useEffect(()=>{
  const token = localStorage.getItem('token')
  if(token){
      navigate('/')
  }
},[])

  async function PostInUser(values){
    api.get(`/usuarios`)
    .then((success) => {
      const { data } = success;
      const KEY_LOGIN = data.some((element)=> {
        return element.email === values.email 
      }
      )
      if(!KEY_LOGIN){
        requestCreateUser(values)
      }
      else{
        Notiflix.Notify.failure('Email Ja cadastrado')
      }
    })
    .error((error) =>{
      console.log(error);
    })
  }

  async function requestCreateUser(values){
    api.post('/usuarios' , values)
    .then((success) => {
        const data = success;
        navigate('/login')
    })
    .catch((error) => {
        const data = error
        console.log(data);
    })
  }
  const PREENCHA = 'Preencha o campo'
  const formik = useFormik({
    initialValues : {
      nome:'', 
      email:'',
      senha:'',
    },
    validationSchema: yup.object().shape({
        nome: yup
        .string()
        .required(PREENCHA)
        .min(3 , 'Nome Muito Curto')
        .max(60 , 'Nome Muito Longo'),
        email: yup
        .string()
        .email('Email Inválido')
        .required(PREENCHA),
        senha: yup
        .string()
        .required(PREENCHA)
        
        .min(8, "Sua senha precisa conter pelo menos 8 caracteres")
        .max(30, "Sua senha deve conter no máximo 30 caracteres")
        .matches(/^(?=.*\d)/, "Sua senha precisa conter um número")
        .matches(/^(?=.*[a-z])/, "Sua senha precisa conter uma letra minúscula")
        .matches(/^(?=.*[A-Z])/, "Sua senha precisa conter uma letra maiúscula")
        .matches(
          /^(?=.*[$*&@#])/,
          "Sua senha precisa conter um caractere especial."
        ),
      })  
    ,
    onSubmit: values => {
      PostInUser(values)
    }
  })
  
  return (
    <DivMaior>
      <DivForm>
        <Title>Registrar</Title>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
          <DivLabelInput>
            <Label htmlFor="">Nome</Label>
            <Input 
            id="nome"
            name="nome"
            onChange={formik.handleChange}
            value={formik.values.nome}
            type="text"
             />
             {formik.errors.nome && formik.touched.nome ? (
               <Error>{formik.errors.nome}</Error>
             ) : null}
            </DivLabelInput>
            
            <DivLabelInput>
            <Label htmlFor="">Email</Label>
            <Input 
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            type="text"
             />
             {formik.errors.email && formik.touched.email ? (
               <Error>{formik.errors.email}</Error>
             ) : null}
            </DivLabelInput>
            <DivLabelInput>
            <Label htmlFor="">Senha</Label>
            <Input 
            id="senha"
            name="senha"
            onChange={formik.handleChange}
            value={formik.values.senha}
            type="text"
             />
              {formik.errors.senha && formik.touched.senha ? (
               <Error>{formik.errors.senha}</Error>
             ) : null}
            </DivLabelInput>
            <DivLabelInput>
             <Button type='submit'>Cadastrar</Button>
             </DivLabelInput>
          </form>
          <p>Ja possui cadastro? <Link to="/login">logar</Link></p>
      
      </DivForm>
      
    </DivMaior>
  )
}

export default CreateUser
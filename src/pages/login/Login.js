import { useContext , useEffect} from 'react'
import { Link ,  useNavigate} from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
  DivForm,
  DivMaior,
  DivLabelInput,
  Title,
  Label,
  Error,
  Input,
  Button
} from '../../components/globalStyles/formInitial.styles'
import { AuthContext } from '../../context/AuthContext'
function Login() {
  const { handleLoginRequest } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
        navigate('/')
    }
},[])
  const PREENCHA = 'Preencha o campo'
  const formik = useFormik({
    initialValues : {
      email:'',
      senha:'',
    },
    validationSchema:yup.object().shape({
      email: yup
          .string()
          .email('Email Inválido')
          .required(PREENCHA),
      senha: yup
          .string('')
          .required(PREENCHA)
    }),
    onSubmit: values => {
      handleLoginRequest(values)
    }
    ,
    })

  return (
    <DivMaior>
      <DivForm>
        <Title>Login</Title>
          <form onSubmit={formik.handleSubmit} autoComplete="off">
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
             <Button type='submit'>Logar</Button>
             </DivLabelInput>
          </form>
          <p>Cadastre-se <Link to="/create-user">Aqui</Link></p>
      
      </DivForm>
      
    </DivMaior>
  )
}

export default Login
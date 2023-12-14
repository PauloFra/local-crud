import {useEffect , useState} from 'react'
import { useNavigate ,useParams } from 'react-router-dom'
import { Form , Formik ,Field} from 'formik'
import {
  DivMaior,
}from '../../components/globalStyles/pagesEstructure.styles'
import * as C from './JogosForm.styles'
import { Link } from 'react-router-dom'
import api from '../../api'
import * as yup from 'yup'
import Loading from '../../components/loading/Loading'
import Notiflix from 'notiflix'
function JogosForm() {
    
    const [jogoForUpdate , setJogoForUpdate] = useState()
    const { idJogo } = useParams()
    console.log(idJogo);
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate( '/login')
        }
        if(idJogo){
          GetForUpdate()
        }
    },[])

    async function PostGameIn(values) {
      console.log(values);
      api.post('/jogos' , values)
      .then((success) => {
        const data = success
        Notiflix.Notify.success(`${values.nome} adicionado a lista!`);
        navigate('/jogos-list')  
      })
      .catch((error) => {
        console.log(error);
        Notiflix.Notify.failure('Ops! ocorreu algum erro');
      })
    }

    async function GetForUpdate(){
      api.get(`/jogos/${idJogo}`)
      .then((success) => {
          const {data} = success;
          console.log(data);
          setJogoForUpdate(data)
      })
      .catch((error) => {
          const data = error
          console.log(data);
      })
    }
    async function UpdateJogo (values) {
      api.put(`jogos/${idJogo}` , values)
      .then((success) =>{
        console.log(success);
        navigate('/jogos-list');
        Notiflix.Notify.info(`${values.nome} atualizado na lista!`);
        
      })
      .catch((error) => {
        console.log(error);
      })
    }
    //USE FORMIK ATUALIZAR 
    if(idJogo && !jogoForUpdate){
      return(<Loading />)
    }
    const InitialValues = {
      nome:'',
      genero:'',
      dataLancamento:'',
      nota:''
    }
    const PREENCHA = 'Preencha o campo'
    const Schema = yup.object().shape({
      nome:yup
      .string()
      .required(PREENCHA)
      .min(3 , 'Nome muito curto'),
      genero:yup
      .string()
      .required(PREENCHA),
      dataLancamento:yup
      .string()
      .required(PREENCHA),
      nota:yup
      .string()
      .required(PREENCHA)
    })
  return (
    <DivMaior>
      <C.DivContent>
      <C.TitleJogosForm>{idJogo ? 'Atualizar' : 'Adicionar Jogo à lista'} </C.TitleJogosForm>
        <C.DivForm>
        <Formik
        initialValues={idJogo ? jogoForUpdate : InitialValues}
        validationSchema={Schema}
        onSubmit={async (values) => {
          idJogo ? UpdateJogo(values) : PostGameIn(values);
        }
        }
        >
          {({errors, touched }) => (
          <Form>
            <C.DivLabelInput>
              <C.Label htmlFor="">Nome</C.Label>
              <Field 
              id="nome"
              name="nome"
              type="text"
              />
              {errors.nome && touched.nome ? (
              <C.Error>{errors.nome}</C.Error>
            ) : null}
              </C.DivLabelInput>  
            <C.DivLabelInput>
            <C.Label htmlFor="">Genero</C.Label>
            <Field 
            id="genero"
            name="genero"
              type="text"
             />
              {errors.genero && touched.genero ? (
              <C.Error>{errors.genero}</C.Error>
            ) : null}
           
            </C.DivLabelInput>
           <C.DivLabelInput>
            <C.Label htmlFor="">Data Lançamento</C.Label>
            <Field 
            id="dataLancamento"
            name="dataLancamento"
            type="text"
             />
            {errors.dataLancamento && touched.dataLancamento ? (
              <C.Error>{errors.dataLancamento}</C.Error>
            ) : null}
           
            </C.DivLabelInput>
            <C.DivLabelInput>
            <C.Label htmlFor="">Nota</C.Label>
            <Field
            id="nota"
            name="nota"
            type="text"
             />
            {errors.nota && touched.nota ? (
              <C.Error>{errors.nota}</C.Error>
            ) : null}
           
            </C.DivLabelInput>
            <C.DivLabelInputButton>
             <C.Button type='submit'>{idJogo ? 'Atualizar Jogo' : 'Adicionar Jogo' }</C.Button>
             </C.DivLabelInputButton>
          </Form>
          )}
          </Formik>
      </C.DivForm>
      </C.DivContent>
      </DivMaior>
  )
}

export default JogosForm
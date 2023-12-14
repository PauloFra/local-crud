import {useEffect, useState} from 'react'
import { useNavigate , Link} from 'react-router-dom'
import Notiflix from 'notiflix'
import {FaArrowLeft , FaArrowRight} from 'react-icons/fa'
import {
  DivMaior,  
  ButtonContact,
}from '../../components/globalStyles/pagesEstructure.styles'
import * as Component from './JogosList.styles'
import api from '../../api'
import Loading from '../../components/loading/Loading'
function JogosList() {
  const [jogosArr , setJogosArr] = useState([])
  const [isLoading , setIsLoading] = useState(true)
  const [pageStart , setPageStart] = useState(0)
  const [pageEnd , setPageEnd] = useState(7)
  const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/login')
        }
        GetInJogos()
    },[])
    async function GetInJogos(){
      api.get('jogos')
      .then((success) => {
        const { data } = success
        setJogosArr(data)
      }).catch((error) => {
        console.log(error);
      })
      setIsLoading(false)
    }

    async function DeleteJogo(idJogo , nomeDoJogo){
      Notiflix.Confirm.show(
        'Confirmação de exclusão',
        `Você tem certeza de que deseja deletar ${nomeDoJogo} da lista da sua lista de jogos?`,
        'Sim',
        'Não',
        () => {
          api.delete(`/jogos/${idJogo}`)
          .then( (success) => {
            const data = success;
            console.log(data);
            Notiflix.Notify.info(`${nomeDoJogo} foi excluído`)
            GetInJogos()
          } )
          .catch( (error) => {
            const data = error;
            console.log(data)
          } )
        },
        () => {
          Notiflix.Notify.info(`Nenhum Jogo foi excluído`)
        },
        );
    }

    function HandlePage(verify){
        if(verify === '+' && (jogosArr.slice(pageStart , pageEnd).length % 7 === 0 && jogosArr.length > 7)){
          setPageStart(pageStart+7)
          setPageEnd(pageEnd+7)
        }
        if(verify === '-' && pageStart > 0){
          setPageStart(pageStart-7)
          setPageEnd(pageEnd-7)
        }
    }

    if(isLoading){
      return(<Loading/>)
    }
    console.log(jogosArr);
  return (
    <DivMaior>
          <Component.DivContent>
            <Component.DivHeaderPage>
            <Component.Title>Listagem de jogos</Component.Title>
            <Link to={'/jogos-form'}> <ButtonContact width="150px" padding="10px 0">Novo Jogo + </ButtonContact></Link>
          </Component.DivHeaderPage>
          <Component.DivTable>
          { jogosArr.length > 0 ?  
          <Component.Table>
            <thead>
              <tr>
                <Component.TableTh>Nome</Component.TableTh>
                <Component.TableTh>Gênero</Component.TableTh>
                <Component.TableTh>Ano Lançamento</Component.TableTh>
                <Component.TableTh>Nota</Component.TableTh>
                <Component.TableTh textAlign="center">Ações</Component.TableTh>
              </tr>
            </thead>
            <tbody>
            {jogosArr.slice(pageStart , pageEnd).map((jogo) =>(
                <tr key={jogo.id}>
                  <Component.TableTd>
                    {jogo.nome}
                  </Component.TableTd>
                  <Component.TableTd>
                    {jogo.genero}
                  </Component.TableTd>
                  <Component.TableTd>
                    {jogo.dataLancamento}
                  </Component.TableTd>
                  <Component.TableTd>
                    {jogo.nota}
                  </Component.TableTd>
                  <Component.TableTd textAlign="center">
                    <Link to={`/jogos-form/${jogo.id}`}>
                     <Component.TableButtons>Atualizar</Component.TableButtons>
                    </Link>
                    <Component.TableButtons onClick={() => DeleteJogo(jogo.id , jogo.nome)} color='rgb(244,81,98)'>Apagar</Component.TableButtons>
                  </Component.TableTd>
                 </tr> 
           
             ))}
            </tbody>
            </Component.Table>
             :
             <>
              <Component.SubTitle color='#327c96'>Nenhum Jogo Cadastrado</Component.SubTitle>
              <Link to={'/jogos-form'}>
                <Component.LinkTo>Clique aqui para adicionar</Component.LinkTo>
              </Link>
             </>  
             }
            {jogosArr.length >= 8 &&
             <Component.DivPaginacao>
              <Component.ButtonsPages onClick={() => HandlePage('-')}><FaArrowLeft /></Component.ButtonsPages>
              <Component.ButtonsPages onClick={() => HandlePage('+')}><FaArrowRight /></Component.ButtonsPages>
            </Component.DivPaginacao>
            }
          </Component.DivTable>
          
          </Component.DivContent>
    </DivMaior>
  )
}

export default JogosList
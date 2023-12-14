import {useEffect} from 'react'
import { useNavigate , Link} from 'react-router-dom'
import Arthur from '../../images/arthur.jpg'
import {
  DivMaior,
  ButtonContact
}from '../../components/globalStyles/pagesEstructure.styles'
import * as Component from './Home.styles'
function Home() {
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/login')
        }
    },[])
    const userName = localStorage.getItem('nameUSER')
  return (
    <DivMaior>
      <Component.DivContentHome>
      <Component.DivCardOne>
      <Component.TitleHome>Bem Vindo {userName} ao meu site de <Component.ChangeColor>listagem de jogos que ja joguei</Component.ChangeColor></Component.TitleHome>
       <Component.Text>Se você gostou do site fique a vontade para entrar em contato comigo</Component.Text>
      <Link to={'/contact'}>
       <ButtonContact>Me Contate</ButtonContact>
      </Link>
      </Component.DivCardOne>
        <Component.DivCardTwo>
          <img src={Arthur} alt="" />
        </Component.DivCardTwo>
      </Component.DivContentHome>
    </DivMaior>
  )
}

export default Home
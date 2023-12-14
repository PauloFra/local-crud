import { useContext , useState , useEffect} from 'react'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../context/AuthContext'
import { 
  ButtonHeader,
  HeaderComponent,
  Li,
  Ul
 } from './Header.styles'
function Header() {
  const { handleLogout } = useContext(AuthContext)

  return (
    <>
    { localStorage.getItem('token') &&
      <HeaderComponent>
        <div>
          <Link to='/'>Games By Paulo</Link>
        </div>
         <div>
           <nav>
             <Ul>
                <Li>
                  <Link to='/'>Home</Link>
               </Li>
               <Li>
                  <Link to='/jogos-list'>Jogos</Link>
               </Li>
               <Li>
                  <Link to='/contact'>Contato</Link>
               </Li>
               <Li>
                <ButtonHeader onClick={()=>handleLogout()}>Logout</ButtonHeader>
               </Li>
             </Ul>
           </nav>
         </div>
      </HeaderComponent>
    }
    </>
  )
}

export default Header
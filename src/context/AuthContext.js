import { createContext, useState , useEffect } from "react"
import { useNavigate } from "react-router-dom";
import api from "../api";
import Notiflix from "notiflix";
export const AuthContext = createContext()

function AuthProvider({children}) {
    const navigate = useNavigate()
    const [token , setToken] = useState()
    const [isLoading , setIsLoading] = useState(true)
    useEffect(() => {
    setIsLoading(false)
  },[])
    async function handleLoginRequest(values) {
        console.log('values' , values);
        api.get(`/usuarios`)
        .then((success) => {
          const { data } = success;
          const KEY_LOGIN = data.filter((element) => {
            return element.email === values.email && element.senha === values.senha
          }
          )
          console.log('KEY_LOGIN => ' , KEY_LOGIN);
          if(KEY_LOGIN.length > 0) { 
            KEY_LOGIN.map((user) =>{
              localStorage.setItem('nameUSER' ,user.nome )
            }) 
            localStorage.setItem('token' , true)
            navigate('/')
            Notiflix.Notify.success(`Seja Bem Vindo ${localStorage.getItem('nameUSER')}`);
          }else{
            Notiflix.Notify.failure(`Ops! Usuario ou senha inválido`);
          
          }
        })
        .error((error) =>{
          console.log(error);
        })
      }  
      
      function handleLogout () {
        localStorage.removeItem('token')
        localStorage.removeItem('nameUSER')
        navigate('/login')
      }
      if(isLoading){
        return(<></>)
      }
  return (
    <AuthContext.Provider value={{
      handleLoginRequest,
      handleLogout,
    }}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
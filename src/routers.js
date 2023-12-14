//json-server --watch db.json
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import CreateUser from "./pages/createUser/CreateUser";
import Header from "./components/header/Header";
import AuthProvider from "./context/AuthContext";
import JogosList from "./pages/jogos/JogosList";
import JogosForm from "./pages/jogos/JogosForm";
import Contact from "./pages/contact/Contact";
function Routers() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/jogos-list" element={<JogosList />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/jogos-form" element={<JogosForm />}>
              <Route path=":idJogo" element={<JogosForm />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default Routers;

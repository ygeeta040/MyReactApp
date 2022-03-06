import { BrowserRouter,  Navigate, Route, Routes } from "react-router-dom";
import "./App.js";
import Sides from "./assignments/sides";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";
import Signup from "./components/signup";
//import IncNum from "./components/incnum";
import Contact from "./assignments/contact";
import EventH from "./components/events";
import Eventassignment from "./assignments/eventassignment";
import Loggin from "./components/Loggin";
import Gallery from "./components/gallery";
import ListProduct from "./components/listproduct";
import Signsup from "./components/signsup";
import ProductRegistration from "./components/productRegistration";
import ManageProduct from "./components/manageProduct";
import { UserProvider } from "./userContext";
import Chat from "./components/chats.js";
import UseStates from "./Hooks/usestates.js";
import ToggleData from "./Hooks/toggledata";
import RulesHooks from "./Hooks/ruleshooks";


function App(){
  return(
    <div>
   <UserProvider>
      <BrowserRouter>

      <Header/>
     
      <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Home/>} path="/home"/>
        <Route element={<Signup/>} path="/register"/>
        <Route element={<Sides/>} path="/sides"/>
        <Route element={<Contact/>} path="/contact"/>
        <Route element={<EventH/>} path="/events"/>
        <Route element={<Eventassignment/>} path="/eventassignment"/>
      
        <Route path="/" element={<Navigate to="/login"/>}/>Loggin
        <Route element={<Loggin/>} path="/Loggin"/>
        <Route element={<ListProduct/>} path="/listproduct"/>
        <Route element={<Gallery/>} path="/gallery"/>
        <Route element={<Signsup/>} path="/signsup"/>
        <Route element={<ProductRegistration/>} path="/productRegistration"/>
        <Route element={<ManageProduct/>} path="/manageProduct"/>
        <Route element={<Chat />} path="/chat" />
        <Route element={<UseStates/>} path="/usestates"/>
        <Route element={<ToggleData/>} path="/toggledata"/>
        <Route element={<RulesHooks/>} path="/ruleshooks"/>
        
      </Routes>
      
      
     
      
      </BrowserRouter>
      </UserProvider>
    </div>
  );
}
export default App;
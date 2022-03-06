import { NavLink, useNavigate } from "react-router-dom";
import { Button} from "@mui/material";
import { useContext, useState } from "react";
import { UserContext } from "../userContext";

const Header =()=>{
  const { loggedin, setLoggedin, setCurrentUser} = useContext(UserContext);

const navigate =useNavigate();
const logout=()=>{

  setLoggedin(false);
  setCurrentUser(null);
  navigate('/Loggin')
};


  const showLoggedin = () => {
    if (!loggedin) {
      return (
        <li className="nav-item">
          <NavLink className="nav-link" to="/Loggin">
            Login
          </NavLink>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <Button variant="contained" color="error">
            Logout
          </Button>
        </li>
      );
    }
  };
    return(
       <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
         <strong><a className="navbar-brand" href="#">GEETA'sWeb</a></strong>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             <li className="nav-item">
               <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
             </li>
             {/* <li className="nav-item">
               <NavLink className="nav-link" to="/Loggin">Login</NavLink>
             </li> */}
             <li className="nav-item">
               <NavLink className="nav-link" to="/signsup">Signup</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link" to="/sides">Update Profile</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link" to="/contact">Contact US</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link" to="/listproduct">Listproduct</NavLink>
             </li>
             <li className="nav-item">
               <NavLink className="nav-link" to="/manageProduct">ManageProduct</NavLink>
             </li>
             {showLoggedin()}
             <li className="nav-item">
               <NavLink className="nav-link" to="/productRegistration">ManageRegistration</NavLink>
             </li>
           </ul>
           <form className="d-flex">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-outline-success" type="submit">Search</button>
           </form>
         </div>
       </div>
     </nav></div>
    )
}
export default Header;
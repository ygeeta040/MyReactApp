import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {


  const getUser=()=>{
    let sessionUser=sessionStorage.getItem('user');
    
    if(typeof sessionUser=="object"){

      return JSON.parse(sessionUser);
    }
  };
  const [loggedin, setLoggedin] = useState(
    typeof sessionStorage.getItem("user")=="object" ? true : false
    );
  const [currentUser, setCurrentUser] = useState(getUser());

  

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, loggedin, setLoggedin }}
    >
      {children}
    </UserContext.Provider>
  );
};
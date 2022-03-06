import { useState } from "react";

const ToggleData =()=>{

    const [myname,setMyname] = useState("Geeta Yadav");

    const changeName=()=>{
        let val=myname;
        if(val==="Geeta Yadav"){
            setMyname("Aarti Yadav");
        }else{
            setMyname("Geeta Yadav");
        }
              
    }
    return(
        <div>
            <h1>{myname}</h1>
            <button className="btn btn-primary" onClick={changeName} >Click me</button>
            </div>
    )
}
export default ToggleData;
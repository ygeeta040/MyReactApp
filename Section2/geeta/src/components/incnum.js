import react, {useState} from "react";



const IncNum=()=>{
    const [state, setstate] = useState(0)
     const IncNum1 =()=>{
  
        setstate(state+1)
     }


    return(
     <div> <h1>{state}</h1>
     <button onClick={IncNum1}>Click me</button></div>
    )
  }
export default IncNum;
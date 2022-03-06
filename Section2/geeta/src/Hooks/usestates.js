import react, { useState, } from 'react';

const Heading ={
  marginLeft:"40px"
}



const UseStates =()=>{

    const [num, setNum] = useState(0);

    const firstClick=()=>{
        
        setNum(num+1);
        
    } 
    const firstClicks=()=>{
        
  
        setNum(num-1);
        
    } 
    return(
        <div>
            <h1 style={Heading}>{num}</h1>
            <button className='btn btn-primary' onClick={firstClick}><i class="fa fa-plus-circle" aria-hidden="true"></i></button> &nbsp;
            <button className='btn btn-primary' onClick={firstClicks}><i class="fa fa-minus-circle" aria-hidden="true"></i></button>
        </div>
    )
}

export default UseStates;
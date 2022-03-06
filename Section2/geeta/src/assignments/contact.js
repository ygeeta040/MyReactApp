import "./contact.css";
const Contact =()=>{
  return(
      
      <div className="my_card1">  
    <h1>Contact Us Page</h1>
    <div className="my_card2">
        
    </div>
    <div className="mycard">
   
        <form>
            <input className="text-input" placeholder="Enter Your Name"/>
            <input className="text-input" type="email" placeholder="Enter Your Email"/>
           
            <input className="text-input" type="number" placeholder=" Enter Your Phone no."/>
        <textarea className="text-input" rows="4" cols="50" placeholder=" Enter messages...."></textarea>
    <div>
    
    </div>
         <div>
             
            Gender<input className="text-input1" type="radio"/>Male
            <input className="text-input1" type="radio"/>FeMale
         </div>
          
    
            <button className="mybtn">SUBMIT</button>
            
        </form>
        
    </div>
    </div>
     
  )
}

export default  Contact;
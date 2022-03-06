import { useState } from "react";

const EventH =()=>{
  let c=1;

  const [count, setCount] = useState(1);

const doTask=()=>{
  c++;
  
  console.log("Button was clicked");
  console.log("Another line");
  console.log("c");

  
 
}
const update =()=>{
  console.log(count);
  setCount(count+1);
}

const handlechange=()=>{
  console.log("input has changed ");

}
  
  const  img1="3.jpg";
  const  img2="2.jpg";
  const  img3="3.jpg";
  const  img4="4.jpg";
  const  img5="5.jpg";
  const  img6="6.jpg";

  return(
      
      <div>  
 <div className="container mt-5">
   <h1>Event Handling</h1>
   <button onClick={doTask} className="btn btn-outline-primary">Click It</button>
   <button onClick={update} className="btn btn-outline-primary">Click </button>

   <h1 className="display-4">{c}</h1>
   <h1 className="display-1">{count}</h1>
   <input className="form-control mt-5" onChange={handlechange}/>
   
 </div>
    <section className="main_heading ">
      <div className="text-center">
        <h1 className="">Gallery</h1>
        <hr className=" w-25 mx-auto"></hr>
      </div>
      <div className="container">
      
        <div className="row">
         
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img src={img1} className="img-fluid"></img>
            </figure>
          </div>
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img src={img2} className="img-fluid"></img>
            </figure>
          </div>
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img src={img3} className="img-fluid"></img>
            </figure>
          </div>
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img src={img4} className="img-fluid"></img>
            </figure>
          </div>
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img src={img5} className="img-fluid"></img>
            </figure>
          </div>
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img src={img6} className="img-fluid"></img>
            </figure>
          </div>
        </div>
      </div>
    </section>
    </div>
     
  );
};

export default  EventH;
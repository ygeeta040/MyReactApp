import { useState } from "react";

const Gallery =()=>{

  const  img1="3.jpg";
  const  img2="2.jpg";
  const  img3="3.jpg";
  const  img4="4.jpg";
  const  img5="5.jpg";
  const  img6="6.jpg";



  const [maining, setMaining] = useState(img5);

  const chngeImage=(imgurl)=>{
    setMaining(imgurl)
  }

  return(
      
      <div>  

    <section className="main_heading ">
      <div className="text-center">
        <h1 className="">Gallery</h1>
        <hr className=" w-25 mx-auto"></hr>
      </div>
      <div className="container">
      
             <div className="row">
               <div className="col-lg-12">
               <img   src={maining} className="img-fluid mx-auto mb-3"></img>
               </div>
             </div>
            
        <div className="row">
         
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img onClick={()=>{chngeImage(img1)}}src={img1} className="img-fluid"></img>
            </figure>
          </div>
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img onClick={()=>{chngeImage(img2)}}src={img2} className="img-fluid"></img>
            </figure>
          </div>
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img onClick={()=>{chngeImage(img3)}}src={img3} className="img-fluid"></img>
            </figure>
          </div>
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img onClick={()=>{chngeImage(img4)}}src={img4} className="img-fluid"></img>
            </figure>
          </div>
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img onClick={()=>{chngeImage(img5)}}src={img5} className="img-fluid"></img>
            </figure>
          </div>
          <div className="col-md-4  col-10 col-xx4 mx-auto">
            <figure>
              <img onClick={()=>{chngeImage(img6)}}src={img6} className="img-fluid"></img>
            </figure>
          </div>
        </div>
      </div>
    </section>
    </div>
     
  );
};

export default  Gallery;
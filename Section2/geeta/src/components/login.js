import './login.css';

const Login =()=>{
 const pageStyles={
     formTitle: {
         textAlign: "center",
         color: "red",
     },
 };
    
    return(
       <div className="login-bg">
           <div className="container-fluid">
           <div className="col-3 mx-auto">
           <div className="card bg-warning">
           <div className=" card-body">
            <img className="logo" src="https://avatars.githubusercontent.com/u/26999847?s=280&v=4"></img>
            <h3 style={pageStyles.formTitle}>Continiue Here</h3>
             <div className="form-floating mt-5">
                 <input className="form-control" placeholder="Email"/>
                 <label>Email</label>
             </div>
             <div className="form-floating mt-3">
             <input className="form-control" type="password" placeholder="Password"/>
                 <label>Passwod</label>
             </div>
             <button className="btn btn-primary mt-5 w-100">Sign In Now</button>
           </div>

           </div>

           </div>
               </div></div>
    )
}
export default Login;
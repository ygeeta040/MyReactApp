import './sides.css';

const Sides = () => {
  return(
      <>
      
    <div className=" sides container-fluid ">
   
    <div className="d-flex align-items-start  mt-5">
      
  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <img className="logo1" src="https://www.nicepng.com/png/detail/856-8561250_profile-pic-circle-girl.png"></img>
  <p>Geeta Yadav</p>
    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Account</button>
    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Secuirity</button>
    <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Mobile</button>
    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>
  </div>
  <div className="tab-content" id="v-pills-tabContent ">
    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab  mt-5">
      <h5 className='mt-2 text-danger'>Account Settings</h5>
    <form class="row g-3 mt-2 ">
  <div class="col-md-6 ">
    <label for="inputEmail4" class="form-label">UserName</label>
    <input type="text" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">CurrentPassword</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
 
  <div class="col-md-6">
    <label for="inputState" class="form-label">Gender</label>
    <select id="inputState" class="form-select">
      <option selected>Select</option>
      <option>Male</option>
      <option>FeMale</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Birthday</label>
    <input type="date" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Facebook link</label>
    <input type="email" class="form-control" id="inputPassword4"/>
  </div>
  
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Job Title</label>
    <select id="inputState" class="form-select">
      <option selected>Select</option>
      <option>WEB Designer</option>
      <option>WEB Developer</option>
      <option>Sotware Developer</option>
    </select>
  </div>
 
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Twitter link</label>
    <input type="email" class="form-control" id="inputPassword4"/>
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Language</label>
    <select id="inputState" class="form-select">
      <option selected>Select</option>
      <option>English</option>
      <option>Hindi</option>
      <option>Both</option>
    </select>
  </div>
  <div class="col-md-6">
    <label for="inputState" class="form-label">Landmark</label>
    <select id="inputState" class="form-select">
      <option selected>select</option>
      <option>Hazratganj</option>
      <option>Mumbai</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Country</label>
    <select id="inputState" class="form-select">
      <option selected>select</option>
      <option>INDIA</option>
      <option>China</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">City</label>
    <select id="inputState" class="form-select">
      <option selected>select</option>
      <option>Lucknow</option>
      <option>Mumbai</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
 
  <div class="col-12">
  <button className=" mybtn btn btn-primary  w-100">Save</button>
  </div>
</form></div>
    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...''oipoipoipoiopiopioi'</div>
    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
  </div>
</div>
    </div>
      </>
  )
};
export default Sides;
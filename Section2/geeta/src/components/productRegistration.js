import {
    Button,
    Card,
    CardContent,
    Grid,
    Paper,
    TextField,
  } from "@mui/material";
  import Swal from "sweetalert2";
  import app_config from "../config";
  import { Formik } from "formik";
  import {useState} from "react";
  
  const ProductRegistration = () => {
    const url = app_config.api_url;

    const [thumnail, setThumnail] = useState("")
  
    // 1. Create a form object
    const productForm = {
      name: "",
      price: "",
      reviews: "",
      rating: "",
    };

    const productSubmit = (values) => {
      values.thumnail=thumnail;
      //values={"name:.............thumnail:.."}
      console.log(values);
    
      // 1. URL
      // 2. request method
      // 3. Data
      // 4. Data format
  
      fetch(url + "/product/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Product details has submitted Successfully.....",
            });
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
        });
    };

    const uploadThumbnail = (e) => {
      console.log("file selected");
     
      let file = e.target.files[0];
      console.log(file.name)
      setThumnail(file.name);
      let form = new FormData();
      form.append("myfile", file);
  
      fetch(url + "/util/uploadfile", { method: "POST", body: form }).then((res) => {
        console.log(res.status);
      });
    };


    return (
      <div>
        <Paper className="signup-container">
          <Grid container justifyContent="center">
            <Grid item md={3} sm={2}>
              <div></div>
            </Grid>
            <Grid item md={3} sm={2}>
              <Card>
                <CardContent>
                  <p className="h3 text-center mb-5 mt-5">Product Details</p>
                  <Formik initialValues={productForm} onSubmit={productSubmit}>
                    {({values, handleChange, handleSubmit})=>(
                      <form onSubmit={handleSubmit}>
                        <TextField
                          className="w-100 mt-3"
                          placeholder="Name"
                          label="Name"
                          variant="outlined"
                          id="name"
                          onChange={handleChange}
                          value={values.name}
                          
                        />
  
                        <TextField
                          type="number"
                          className="w-100 mt-3"
                          placeholder="Price"
                          label="price"
                          variant="outlined"
                          id="price"
                          onChange={handleChange}
                          value={values.price}
                         
                        />
  
                        <TextField
                          type="number"
                          className="w-100 mt-3"
                          placeholder="Reviews"
                          label="reviews"
                          
                          variant="outlined"
                          id="reviews"
                          onChange={handleChange}
                          value={values.reviews}
                        
                        />
  
                        <TextField
                          type="number"
                          className="w-100 mt-3"
                          placeholder="Rating"
                          label="rating"
                          variant="outlined"
                          id="rating"
                          onChange={handleChange}
                          value={values.rating}
                       
                        />
                          <label>Upload Thumbnail</label>
              <input
                type="file"
                onChange={uploadThumbnail}
                className="form-control"
              />
                     
                        <Button
                          color="error"
                          variant="contained"
                          className="mt-5"
                          type="submit"
                        >
                          Submit
                        </Button>
                        </form>
                    )}
                    
                </Formik>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  };
  
 
  export default ProductRegistration;
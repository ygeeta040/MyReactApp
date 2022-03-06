const router = require("express").Router();
const Model = require('../models/productModel');

router.post("/add", (req, res)=>{
         console.log(req.body);

    new Model(req.body)
    .save()
    .then((data)=>{
        console.log("pro data saved successfully..");
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.error(err);
        res.status(500).json(err);
    });
});

router.get("/getall", (req, res)=>{

    Model.find({})
    .then((data)=>{
        console.log("pro data fatched successfully");
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.error(err);
        res.status(500).json(err);
    });
});

router.delete("/delete/:pid", (req, res)=>{

    Model.findByIdAndDelete(req.params.pid)
    .then((data)=>{
        console.  log("pro data deleted successfully");
        res.status(200).json(data);
    })
    .catch((err)=>{
        console.error(err);
        res.status(500).json(err);
    });
});
//router.get('/home', (req, res)=>{
    //console.log("request from home routers");
    //res.send("respones from home routers");

module.exports=router;
const express = require("express");

const app = express();
const port = 5000;
const cors =require("cors");


const userRouter=require('./routers/userRouter');
const videoRouter=require('./routers/videoRouter');

const productRouter=require('./routers/productRouters');
const utilRouter = require("./routers/utils");



const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] },
});

io.on("connection", (socket) => {
  console.log("client connected");

  // on function is used for receieving the event
  socket.on("sendmsg", (data) => {
    console.log(data);
    data.sent = false;
    socket.broadcast.emit("recmsg", data);
  });
});

// for serving static resources
app.use(express.static("./uploads"));

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use(express.json());

app.use('/user', userRouter)
app.use('/video', videoRouter)
app.use('/product', productRouter)
app.use("/util", utilRouter);


app.get('/', (req, res)=>{
res.send("you got a responce")
});
app.get('/homepage', (req, res)=>{
    res.send("you got a from homepage ")
    });
    app.get('/aboutus', (req, res)=>{
        res.send("you got a from  aboutus")
        });
    
//app.listen(port, ()=>{
  //  console.log("server started");
//});


//for using socket.io
httpServer.listen(port, () => {
    console.log("server started");
  });

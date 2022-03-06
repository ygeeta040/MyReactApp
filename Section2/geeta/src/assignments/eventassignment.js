import { useState } from "react";

const Eventassignment = () => {
    const [imgs, seTimg] = useState("https://image.shutterstock.com/image-photo/programmer-girl-works-computer-260nw-1610721214.jpg");

    const images = () => {
        return seTimg("https://media.istockphoto.com/photos/portrait-of-young-latina-marketing-specialist-working-on-laptop-in-picture-id1298861980?b=1&k=20&m=1298861980&s=170667a&w=0&h=n0PtWzYOSDg1XU5S2nNUdM6C8SlFcj0o-Ayc7TsPKPc=");
        
    }

    return(
        <>
        <img src={imgs}></img>
        <button onClick={images} className="btn btn-outline-primary">Change IT</button>
        </>
    )
}
export default Eventassignment;
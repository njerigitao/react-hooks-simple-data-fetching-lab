// create your App component here
import React,{useState, useEffect} from "react";

function App(){
    const[dogImage, setDogImage] = useState(null);
useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(r => r.json())
    .then(data => {
        setDogImage(data.message);
    })

}[])
};

export default App
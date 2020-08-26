import React from 'react';
import myImage from './imageInSrc.jpg';
// import { Player } from 'video-react';
import './App.css';


let titl=<h1 className='red title'>Dorsaf Aribi</h1>
function App() {
  return (
    <div  style={{border:'1px',margin:'50',maxWidth:'100vw'}}>  
    {titl} 

    <img src={myImage} width="250" height="480" /> <br></br>
    <img src='/imageInPublic.jpg' width="250" height="480" />  
    {/* <Player width="320" height="240" src="https://www.youtube.com/embed/9GtB5G2xGTY"/> */}
    <iframe width="1100" height="480" src="https://www.youtube.com/embed/9GtB5G2xGTY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;

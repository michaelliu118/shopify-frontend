import './app.css';
import Story from '../story';
import { useState, useEffect } from 'react';

function App() {
  
  const [json, setJson] = useState([]);
  function fetch_NASA(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=UiZkqweVbm8VoiZ3YMRhMyBfLwSwW854c9g4DXie', {
      method: 'GET'
    }).then(
      res=>res.json()
    ).then(
      data=>{setJson(data)}
    ).catch(error => {
       console.log('Download Error: ', error)});
  }

  useEffect(fetch_NASA, [])

  return (
    <div className="App">
        <div>
          <h1 className="name">The Expanse</h1>
          <p className="slogan"> The Courtesy from NASA</p>
        </div>
        {json.map((value, index)=>{
            return (<Story id={index} url={value['url']} explanation= {value["explanation"]} title ={value["title"] } date={value["date"]}/>)
        })}
    </div>
  );
}

export default App;

import React,{useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';

export default function App() {
  const [surrah,setSurrah]=useState();
  const [para,setPara]=useState(1);
  const [para2,setPara2]=useState();
  const getSurrah=()=>{
    fetch("https://api.quran.sutanlab.id/surah/"+para).then((response)=>{
      return response.json();
    }).then((data)=>{
      console.log(data.data.ayahs[para2-1].text.en);
      setSurrah(data.data.ayahs[para2-1].text.en);
    })
  }
  const changed=(event)=>{
    setPara(event.target.value);

  }
  const changed2=(event)=>{
    setPara2(event.target.value);

  }
  return (
    <div className="bg-dark stit">
      <h1 className="text-center text-danger">Allah is great</h1>
      <h3 className="text-success text-center">Enter a surrah from 1 to 114</h3>
      <input type="text" className="mt-3" value={para} placeholder="Enter surrah" onChange={changed}/>
      <input type="text" className="mt-3" value={para2} placeholder="Enter Ayah" onChange={changed2}/>
     
      <button className="btn btn-primary mt-4" onClick={getSurrah}>Get surrah</button>
      <p className="text-center text-danger mt-5">{surrah}</p>
      <h6 className="text-center text-danger mt-3">Website by Sayush Kamat &copy;2020</h6>
    </div>
  )
}

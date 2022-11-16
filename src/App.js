import './App.css';
import {useState} from 'react'

function App() {

  // state

  // event handling-----------------


  // const f1=()=>{
  //   console.log("test1 called")
  // }

  // const f2=(a)=>{
  //   console.log("param functionnn ",a)
  // }


// ended---------------------------


let [name,setname]=useState('viperr')

let [obj,setobj]=useState({
name:'Ben',
age:18
})

const ch=()=>{
setobj({
  ...obj,  // math boolnaaa
  name:'Tennyson'

})

}

const fn=()=>{
    setname('Momoooo')
    console.log("username is ",name)
}

  return (
    <div className="text-center text-danger">
      <h1>Hello world</h1>
     
      {/* Event handlingg--------------------*/}

     {/* <button className='btn-info btn' onClick={f1}>Click 1</button>
      <button className='btn btn-danger m-2' onClick={()=>f2(29)} >CLick 2</button> */}

      {/* ended----------------- */}

<h3>{name}</h3>
<h4>{obj.name}</h4>
<h3>{obj.age}</h3>
      <button className='btn-info btn' onClick={fn}>Change name</button>
      <button className='btn-secondary btn m-3 ' onClick={ch}>Change objs name</button>
    </div>
  );
}

export default App;

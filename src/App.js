import './App.css';
import Test1 from './components/Test1'
import  {useEffect, useState} from 'react'

function App() {

  // state
let [users,setusers]=useState([])

let [c1,setc1]=useState(0)
let [c2,setc2]=useState(0)

  useEffect(()=>{
    fetch('https://fakestoreapi.com/users')
    .then(res=>res.json())
    .then(data=>setusers(data))
  },[c1])   // useeffect gets xecuted with c1 state change..... view the  ntwrk tab

  console.log(users)
  return (
    <div className="text-center text-danger">
   <h2>Hello Chitti</h2>
   <h3>{c1}</h3>
   <button className='btn btn-secondary m-4' onClick={()=>setc1(c1+1)}>Cntr 1</button>
   <h3>{c2}</h3>
   <button className='btn btn-danger m-4' onClick={()=>setc2(c2+1)}>Cntr 2</button>
    </div>
  );
}

export default App;

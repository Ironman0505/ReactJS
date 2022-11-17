import './App.css';
import Test1 from './components/Test1'
import  {useState} from 'react'

function App() {

  // state
 let [alien,setalien]=useState('BigChill')

const car=(data)=>{   //car for beta
  console.log("Data sent by bacchha is ",data)
}

  return (
    <div className="text-center text-danger">
     <h2>Hey Root here!!</h2>
     {/* nested component... */}

     <Test1  alien={alien} car={car} />     {/* data is sent to child   ... alien={alien} goes as object's key n value pair into props*/}


    </div>
  );
}

export default App;

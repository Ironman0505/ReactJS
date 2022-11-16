import './App.css';
import Test1 from './components/Test1'
import  {useState} from 'react'

function App() {

  // state


  return (
    <div className="text-center text-danger">
     <h2>Hey Root here!!</h2>
     {/* nested component... */}
     <Test1></Test1>
    </div>
  );
}

export default App;

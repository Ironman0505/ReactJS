import React, { useState } from 'react'

export default function Test1(props) {  //recievd as object ( x={data}  ==> this comes as an object)
                      // destructuring use kar sakthe hai props ke badhal--------
console.log("Data came is ",props.alien)

//  data to be sent to the parent ....dadd will be sending a car.. send in that
let [age,setage]=useState('3356')
  return (

    <div>
      <h2>Test 1</h2>
      <h4>Well Dada has given me {props.alien}</h4>    {/* parent to child data transfer */}
      <button className='btn btn-success' onClick={()=>props.car(age)}>Send to pappa</button>
    </div>
  )
}


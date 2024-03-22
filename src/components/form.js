import React from 'react'
import { useState } from 'react'

function Form() {

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(1);
  const [skills, setSkills] = useState([]);

  return (
    <div> 
      <label> First Name: </label>
      <input type="text" onChange={((e) => {setFname(e.target.value)})} /> 
      <br/>

      <label> Last Name: </label>
      <input onChange={((e) => {setLname(e.target.value)})} />
      <br/>

      <label> Age: </label>
      <input type="number" onChange={((e) => {setFname(e.target.value)})} />
    </div>
  )
}

export default Form
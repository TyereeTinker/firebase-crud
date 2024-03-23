
import { React, useState } from 'react'
import { db } from './firestore-config';
import { collection, addDoc } from 'firebase/firestore';

function Form() {

  const Ref = collection(db, "Employees");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState(1);
  const [salary, setSalary] = useState(1);
  const [skills, setSkills] = useState([]);

  const handleSkillChange = (e, index) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  const addEmployee = async() => {
    try {
      await addDoc(Ref, {Fname: fname, Lname: lname, Age: age, Salary: salary, Skills: skills})
    } catch (error) {
      console.log("ERROR: ", error)
    }
  }


  return (
    <div> 
      <label> First Name: </label>
      <input type="text" onChange={((e) => {setFname(e.target.value)})} /> 
      <br/>

      <label> Last Name: </label>
      <input onChange={((e) => {setLname(e.target.value)})} />
      <br/>

      <label> Age: </label>
      <input type="number" onChange={((e) => {setAge(e.target.value)})} />
      <br/>

      <label> Salary: </label>
      <input type="number" onChange={((e) => {setSalary(e.target.value)})} />

      {skills.map((skill, index) => (
        <div key={index}>
          <input
            type="text"
            value={skill}
            onChange={(e) => handleSkillChange(e, index)}
          />
        </div>
      ))}
      <button onClick={handleAddSkill}>Add Skill</button> <br/> <br/>
      <button onClick={addEmployee}> ADD </button>
    </div>
  )
}

export default Form
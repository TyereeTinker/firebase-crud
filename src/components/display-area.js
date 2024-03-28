import { React, useState, useEffect } from 'react';
import { db } from './firestore-config';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';

function DisplayArea() {

    const [employees, setEmployees] = useState([]);
    const Ref = collection(db, "Employees");
  
    useEffect(() => {
      const getEmployees = async() => {
        const data = await getDocs(Ref);
        setEmployees(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        console.log(data)
      }
      getEmployees();
    }, [])

    const deleteEmployee = async(id) =>{
        const empDoc = doc(db, "Employees", id)
        await deleteDoc(empDoc)
    } 

    return (
        <div>
            {employees.map((emp) => {
                return <div className='emp-data'> 
                    {" "}
                    <h3> NAME: {emp.Fname} {emp.Lname} </h3>
                    <h3> SALARY: ${emp.Salary} </h3>
                    <h3> SKILLS </h3>
                    <ul>
                        {emp.Skills.map((skill, index) => (
                        <li key={index}>{skill}</li> ))}
                    </ul>
                    <button onClick={() => {deleteEmployee(emp.id)}}> DELETE USER </button>
                </div>
            })}
        </div>
    )
}

export default DisplayArea
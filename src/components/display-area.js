import { React, useState, useEffect } from 'react';
import { db } from './firestore-config';
import { collection, getDocs } from 'firebase/firestore';

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

    return (
        <div>
            
            {employees.map((emp) => {
                return <div> 
                    {" "}
                    <h1> {emp.Fname} {emp.Lname} </h1>
                    <h2> ${emp.Salary} </h2>
                    <ul>
                        {emp.Skills.map((skill, index) => (
                        <li key={index}>{skill}</li> ))}
                    </ul>
            </div>
            })}
        </div>
    )
}

export default DisplayArea
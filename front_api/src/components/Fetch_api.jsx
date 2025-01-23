

import React, { useEffect, useState } from 'react'

function Fetch_api() {
    const [students, setStudents] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/students')
        .then(response => response.json())
        .then(data => setStudents(data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <h1>Student List</h1>
        
        {students.length === 0 ? (
            <p>No student found</p>
        ) : (
            <ul>
            {students.map((student) => (
                <li key={student.id}>
                    <strong>Name:</strong>{student.name}<br/>
                    <strong>Department:</strong>{student.department}<br/>
                    <strong>Address:</strong>{student.address}<br/>
                    <strong>Gender:</strong>{student.gender}<br/>
                    <strong>Age:</strong>{student.age}<br/><br/>
                </li>
            ))}
        </ul>
        )}
        
    </div>
  )
}

export default Fetch_api
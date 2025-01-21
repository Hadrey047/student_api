

import React, { useEffect, useState } from 'react'

function Fetch_api() {
    const [records, setRecords] = useState([])

    useEffect(()=>{
        fetch('http://localhost:4000/students')
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    }, [])
  return (
    <div>
        <button>GET STARTED</button>
        <ul>
            {/* {records.map((list, index)=> (
                <li key={index}>{list.id} | {list.name}</li>
            ))} */}
        </ul>
    </div>
  )
}

export default Fetch_api
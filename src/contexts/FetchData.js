import React, { useEffect } from 'react'
import { useState } from 'react'

function FetchData() {
    const [records, setRecords] = useState([])

    useEffect(()=>{
        fetch('')
        .then(response => response.json())
        .then(data => setRecords(data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div>
        <ul>
            {records.map((list, index)=>(
                <li key={list.id}>{list.id} | {list.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default FetchData
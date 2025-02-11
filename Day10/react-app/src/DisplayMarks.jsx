import React from 'react'

const DisplayMarks = () => {
  const students = [
    {name: "Aditya", roll: 948249, m1: 84.5, m2:87, m3: 79.1},
    {name: "Aditya", roll: 948249, m1: 84.5, m2:87, m3: 79.1},
    {name: "Aditya", roll: 948249, m1: 84.5, m2:87, m3: 79.1},
    {name: "Aditya", roll: 948249, m1: 84.5, m2:87, m3: 79.1},
    {name: "Aditya", roll: 948249, m1: 84.5, m2:87, m3: 79.1},
    {name: "Aditya", roll: 948249, m1: 84.5, m2:87, m3: 79.1},
    {name: "Aditya", roll: 948249, m1: 84.5, m2:87, m3: 79.1},
]
  return (
    <div>
       {students.map((student,index) => (Marks key={index} name={student.name} roll))}
    </div>
  )
}

export default DisplayMarks
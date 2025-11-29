import React from 'react'

const Test5 = ({details}) => {
    const{ name, branch, place, address } = details
  return (
    <div>
        <p>My name is : {name}</p>
        <p>My branch is : {branch}</p>
        <p>My place is : {place}</p>

        {/* Accessing nested object */}
        <p>District : {address.district}</p>
        <p>State : {address.state}</p>

    </div>
  )
}

export default Test5

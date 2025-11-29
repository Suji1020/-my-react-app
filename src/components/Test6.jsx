import React from 'react'

const Test6 = ({ list }) => {
  return (
    <div>
      <ul>
        {list.map((name, index) => (
          <li key={index}>--/{name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Test6

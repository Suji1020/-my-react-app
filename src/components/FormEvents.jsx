// import React from 'react'
// import { useState } from 'react'

// const FormEvents = () => {
//     const[name,setName] = useState('')
//     const[details,setDetails] = useState('')

//     const getname = (event) => {
//         setName(event.target.value)
//     }

//     const getdetails = () => {
//         setDetails(name)
//     }

//   return (
//     <div>
//         <h1>This is form1 events , {name}</h1>
//         {/* <h1>This is form2 events , {details}</h1> */}

//         <input type = "text" className='bg-blue-700' onChange={getname}/>
//         <div className='text-yellow-700' onClick={getdetails}>Submit</div>


//     </div>
//   )
// }

// export default FormEvents


import React, { useState } from 'react';

const FormEvents = () => {

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [submittedData, setSubmittedData] = useState("");


  const getName = (event) => {
    setName(event.target.value);  
  };


  const getCourse = (event) => {
    setCourse(event.target.value); 
  };

  const submit = (event) => {
    event.preventDefault();
    setSubmittedData({ name, course });  
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Student Registration Form</h1>

      <h2 className="text-blue-700">Typing : {name}</h2>
      <h2 className="text-green-700">Course : {course}</h2>

      <input
        type="text"
        placeholder="Enter Name"
        className="border p-2 mt-3"
        value={name}
        onChange={getName}   
      />

      <br />

      <input
        type="text"
        placeholder="Enter Course"
        className="border p-2 mt-3"
        value={course}
        onChange={getCourse}  
      />

      <br />

      <button
        className="bg-blue-600 text-white px-4 py-2 mt-4 rounded"
        onClick={submit}  
      >
        Submit
      </button>

      {submittedData && (
        <div className="mt-5 p-4 border rounded">
          <h2 className="font-bold text-lg">Submitted Data</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Course:</strong> {submittedData.course}</p>
        </div>
      )}
    </div>
  );
};

export default FormEvents;

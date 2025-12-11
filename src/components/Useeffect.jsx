import React, { useState, useEffect } from 'react';

const Useeffect = () => {
  const [name, setName] = useState("sujitha");

  useEffect(() => {
    if (name === "sujitha") {
      setName("Nellore")
    }else{
        setName("Tirupati")

    }
  }, []); 

  return (
    <div>Your name is : {name}</div>
  );
}

export default Useeffect;

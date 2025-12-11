import React from 'react'
import Firstcomponent from './Firstcomponent'
import Secondcomponent from './Secondcomponent'
import { useState } from 'react'


const Ternaryoperator = () => {
    const isRain = true;

return (
  <div>
    {isRain ? "Take an umbrella " : "Enjoy the sunshine "}
  </div>
);
}

export default Ternaryoperator
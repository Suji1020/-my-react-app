import React from 'react'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'
import Test5 from './components/Test5' 
import Test6 from './components/Test6'


const App = () => {
  const data = {
    name : "Sujitha",
    branch : "B.Tech",
    place : "Nellore",
    address: {
      district: "Nellore",
      state: "Andhra Pradesh"
    }
  }

  const arr = ["React","Angular","Vue","JQuery"]

  return (
    <div>
      <Test1 Course = "Full Stack Web development" />
      <Test2 Mentor = "Rajesh Sir"/>
      <Test3 Mode = "Offline"/>
      <Test4 Place = "Tirupati"/>
      <Test5 details = {data}/>
      <Test6 list = {arr}/>
    </div>
  )
}

export default App

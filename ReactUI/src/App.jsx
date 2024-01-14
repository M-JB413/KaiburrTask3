import { useEffect, useState } from 'react'
import Details from './components/details'
import Forms from './components/forms'
import { readData } from './api/api'
import './App.css'

function App() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    readData(setUserData)
  }, [])
  return (
    <>
      <div className="forms">
        <Forms setUserData={setUserData} />
      </div>
      <div className="info">
        <Details userData={userData} setUserData={setUserData} />
      </div>
    </>
  )
}

export default App

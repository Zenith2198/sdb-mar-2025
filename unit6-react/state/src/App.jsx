import { useState } from 'react';
import './App.css'
import SignUp from './components/SignUp'
import SignUpFormless from './components/SignUpFormless'
import HelloUser from './components/HelloUser';

function App() {
  const [nameOfUser, setNameOfUser] = useState("");

  return (
    <>
      <HelloUser nameOfUser={nameOfUser} />
      <SignUp nameOfUser={nameOfUser} setNameOfUser={setNameOfUser} />
      {/* <SignUpFormless /> */}
    </>
  )
}

export default App

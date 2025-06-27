import { useState } from 'react'
import './App.css'
import PokeDisplay from './components/PokeDisplay'
import PokeSearch from './components/PokeSearch'

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <PokeSearch search={search} setSearch={setSearch} />
      <PokeDisplay search={search} />
    </>
  )
}

export default App

import './App.css'
import HelloSomething from './components/HelloSomething'
import HelloWorld from './components/HelloWorld'

function App() {
  const somethings = ["a thing", "some other thing", "yet another thing", "the final thing"];

  return (
    <>
      <HelloWorld />
      {somethings.map((thing) => (
        <HelloSomething something={thing} />
      ))}
    </>
  )
}

export default App



import './App.css'

function App() {
const name = 'MAXXXXI'
const x = 20;
const y = 40;
const names = ['Brad','Mary','Joy','Sara'];
  return (
    <>
          <h1 className="text-3xl font-bold underline"> Hello everyone</h1>
          <p className='text-5xl'> Hello {name}</p>
          <p>
            the sum of {x} and {y} is {x + y};
          </p>
          <ol>
            {names.map((name,index) => {
              <li key={index}>{name}</li>
            })}
          </ol>
    </>
  )
}

export default App

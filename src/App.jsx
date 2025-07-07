

import './App.css'

function App() {
const name = 'MAXXXXI'
const x = 20;
const y = 450;
const names = ['Brad','Mary','Joy','Sara'];
const loggeIn = true;
const styles = {
  color : 'blue',
  fontSize: '55px'
}
  return (
    <>
          <h1 className="text-3xl font-bold underline"> Hello everyone</h1>
          <p className='text-5xl'> Hello {name}</p>
          <p style={styles}> css</p>
          <p>
            the sum of {x} and {y} is {x + y};
          </p>
     
          <ul>
            {names.map((name,index) => {
              <li key={index}> {name} </li>
            })}
          </ul>
          {! loggeIn ? <h1>Hello Member</h1> : <h2>Hello Guest</h2>  }
    </>
  )
}

export default App

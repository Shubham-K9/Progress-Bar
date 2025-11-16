

import './index.css'
import "./App.css"
import Prgbar from '../components/prgbar'

function App() {
 

  return (
    <>
      <div className='App'>
        <h1>Progress Bar</h1>
      </div>
      <div className='progress-container'> 
            <Prgbar progress={75}/>
        </div>
      
    </>
  )
}

export default App

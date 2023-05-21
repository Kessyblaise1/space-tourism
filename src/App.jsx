import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home/Home'
import Navbar from './components/navBar/Navbar'
import Destination from './screens/Destinations/Destination'
import Crew from './screens/Crew/Crew'

function App() {

  return (
    <div className="app">
      <main>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

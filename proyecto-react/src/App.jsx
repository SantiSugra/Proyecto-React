import './App.css'
import Brand from './components/Brand'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <div className='app-class'>
      <Brand/>
      <NavBar/>
      </div>
      <div>
        <ItemListContainer saludo = "Bueenas" />
      </div>
    </div>
  )
}

export default App

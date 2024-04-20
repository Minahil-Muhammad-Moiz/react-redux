import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/header';
import { Routes, Route} from 'react-router-dom';
import CardDetails from './Components/CardDetails';
import Cards from './Components/Cards';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardDetails/>}/>
      </Routes>
    </>
  )
}

export default App

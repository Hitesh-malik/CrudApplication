import './App.css'
import Navbar from './components/Navbar'
import TableSection from './components/TableSection'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
    <Navbar/>
     <TableSection/>
     <ToastContainer />
    </>
  )
}

export default App

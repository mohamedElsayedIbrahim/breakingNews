import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes } from 'react-router';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

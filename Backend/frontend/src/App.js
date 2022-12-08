import './App.css';
import Navbar from './components/script/Navbar';
import Home from './components/script/Home';
import Books from './components/script/Books';
import Add from './components/script/Add';
import Update from './components/script/Update';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Footer from './components/script/Footer';

function App() {
  return (
      
    <Router>
        <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route  path='/books' element={<Books/>} />
        <Route  path='/addBooks' element={<Add/>} />
        <Route  path={`/update/:id`} element={<Update/>} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;

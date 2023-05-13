import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar'
import CreateFruit from './pages/CreateFruit/CreateFruitPage';
// import Home from './pages/POS/Home';

export default function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        {/* <Route path="/" element={<Home/>}/> */}
        <Route path="/new" element={<CreateFruit/>}/>
      </Routes>
    </Router>
  )
}



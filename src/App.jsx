import './App.css'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from './pages/Dashboard/page'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/route" element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="container py-5">
      <h1 className="mb-3">OctoFit Tracker</h1>
      <p className="lead">
        Welcome to a modern React + Vite frontend for the OctoFit Tracker app.
      </p>
      <p>The app is configured for React 19, Bootstrap styling, and client-side routing.</p>
    </div>
  )
}

function About() {
  return (
    <div className="container py-5">
      <h1 className="mb-3">About OctoFit</h1>
      <p>Build an activity tracking system with user profiles, leaderboards, and team management.</p>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit Tracker
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

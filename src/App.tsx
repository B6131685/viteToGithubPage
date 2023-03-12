import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

function App() {


  return (
    <div className="App">
      <div>
        <a href="https://b6131685.github.io/viteToGithubPage/vite.svg" target="_blank">
          <img src="https://b6131685.github.io/viteToGithubPage/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + GithubPage</h1>
    </div>
  )
}

export default App

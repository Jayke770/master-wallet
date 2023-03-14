import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import 'animate.css'
import App from "./"
import { App as KonstaApp } from 'konsta/react'
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <KonstaApp theme="material" dark safeAreas>
      <App />
    </KonstaApp>
  </React.StrictMode>
)

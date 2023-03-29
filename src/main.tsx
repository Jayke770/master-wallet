import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import "./styles/globals.css"
import 'animate.css'
import { App, Onboard, CreateWallet } from "./pages"
import { App as KonstaApp } from 'konsta/react'
import { HashRouter, Routes, Route } from "react-router-dom"
function MasterWallet() {
  return (
    <React.StrictMode>
      <KonstaApp theme="material" dark safeAreas>
        <HashRouter>
          <Routes>
            <Route path='/' element={<App />} />
            <Route path='/onboard' element={<Onboard />} />
            {/* Wallet */}
            <Route path="/wallet/create" element={<CreateWallet />} />
          </Routes>
        </HashRouter>
      </KonstaApp>
    </React.StrictMode>
  )
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<MasterWallet />)

import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import "./styles/globals.css"
import 'animate.css'
import { App, Onboard } from "./"
import { App as KonstaApp } from 'konsta/react'
import { useLocalstorageState } from "rooks"
function MasterWallet() {
  const [appState, setAppState] = useLocalstorageState<"new" | "old" | null>("appState", null)
  useEffect(() => {
    if (!appState) setAppState("new")
  }, [appState])
  return (
    <React.StrictMode>
      <KonstaApp theme="material" dark safeAreas>
        {appState === 'old' ? <App /> : <Onboard />}
      </KonstaApp>
    </React.StrictMode>
  )
}
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(<MasterWallet />)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardPrototyperApp from '../../CardPrototyperApp/CardPrototyperApp'
import "./main.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardPrototyperApp />
  </StrictMode>
)

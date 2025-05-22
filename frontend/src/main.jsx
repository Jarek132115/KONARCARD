import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styling/home.css'
import './styling/fonts.css'
import './styling/myprofile.css'
import './styling/login.css'
import './styling/navbar.css'
import './styling/footer.css'
import './styling/buttons.css'
import './styling/product.css'
import './styling/policies.css'
import './styling/success.css'
import './styling/profile.css'
import App from './App.jsx'
import { BrowserRouter as Router} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)

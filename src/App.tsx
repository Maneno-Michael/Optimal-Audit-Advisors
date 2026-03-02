import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { WhatsAppWidget } from './components/WhatsAppWidget'
// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-stone-50 text-slate-900 font-sans selection:bg-amber-100 selection:text-amber-900 flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
        </Routes>
        <Footer />
        <WhatsAppWidget />
      </div>
    </Router>
  )
}

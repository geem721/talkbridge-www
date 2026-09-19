import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Tutorial from './components/Tutorial.jsx'
import Pricing from './components/Pricing.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Tutorial />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}

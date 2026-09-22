import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import InAction from './components/InAction.jsx'
import Tutorial from './components/Tutorial.jsx'
import Pricing from './components/Pricing.jsx'
import ReleaseNotes from './components/ReleaseNotes.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <InAction />
        <Tutorial />
        <Pricing />
        <ReleaseNotes />
        <About />
      </main>
      <Footer />
    </>
  )
}

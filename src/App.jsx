import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'

import Layout from './components/layout/Layout'
import Routes from './routes/Routes'

function App() {
  

  return (
    <>
    <Layout>
      <Navbar/>
      <Routes/>
      <Footer/>
    </Layout>
    </>
  )
}

export default App

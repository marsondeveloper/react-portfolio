import { Header, Footer, Home, Aboutme, Clients, Portfolio, Services, Skills, Contact, Nav } from "./components/index"


function App() {
  
  return (
    <>
      <Header/>
      <main>
        <Home/>
        <div className="container">
           <h1>React Portfolio</h1>
        </div>
        <Aboutme/>
      </main>
      <Footer/>
    </>
  )
}

export default App

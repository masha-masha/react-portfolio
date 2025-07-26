import { Header, Footer, Home, About, SkillsInfo, Services, Portfolio } from './components';

function App() {
 return (
  <>
   <Header />
   <main>
    <Home />
    <About />
    <SkillsInfo/>
    <Services/>
    <Portfolio/>
   </main>
   <Footer />
  </>
 );
}

export default App;

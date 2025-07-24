import { Header, Footer, Home, About, SkillsInfo, Services } from './components';

function App() {
 return (
  <>
   <Header />
   <main>
    <Home />
    <About />
    <SkillsInfo/>
    <Services/>
   </main>
   <Footer />
  </>
 );
}

export default App;

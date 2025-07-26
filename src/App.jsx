import { Header, Footer, Home, About, SkillsInfo, Services, Portfolio, GetInTouch } from './components';

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
    <GetInTouch/>
   </main>
   <Footer />
  </>
 );
}

export default App;

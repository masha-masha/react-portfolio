import { Header, Footer, Home, About, SkillsInfo, Services, Portfolio, GetInTouch, Clients, Contacts, ScrollToTop  } from './components';

function App() {
 return (
  <>
   <Header />
   <main>
    <Home />
    <About />
    <SkillsInfo />
    <Services />
    <Portfolio />
    <GetInTouch />
    <Clients />
    <Contacts/>
   </main>
   <Footer />
   <ScrollToTop/>
  </>
 );
}

export default App;
